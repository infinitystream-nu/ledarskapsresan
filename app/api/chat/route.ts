import Anthropic from "@anthropic-ai/sdk";
import { getOrCreateConversation, saveMessage } from "@/lib/supabase";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const MODULE_CONTEXT: Record<string, { name: string; tools: string; philosophy: string }> = {
  "1": { name: "Från kollega till ledare", tools: "Starta i ny roll, Förväntansdialog, 30-dagarsplan", philosophy: "Rollförändringen handlar om att skifta fokus från din prestation till teamets prestation." },
  "2": { name: "Kommunikation och förtroende", tools: "ToGROW, Feedbacktrappan, Tillitstrappan, Aktivt lyssnande", philosophy: "Öppna frågor + aktivt lyssnande = effektiv kommunikation. Feedback är en färskvara." },
  "3": { name: "Att sätta mål och följa upp", tools: "SMART-mål, Veckouppföljning 10-min, Möteskompassen, Fira framsteg", philosophy: "Tydliga mål skapar motivation. Uppföljning handlar om lärande, inte kontroll." },
  "4": { name: "Konflikthantering och svåra samtal", tools: "Svåra samtal 4-stegsmodellen, Feedback i tre steg, Tidiga signaler, Trygg dialog", philosophy: "Konflikter är naturliga. Det är frånvaron av samtalet som är problemet." },
  "5": { name: "Ledarskap i vardagen", tools: "Veckoplanering 30-min, Energikartan, 5-minutersreflektionen, Prioriteringsrutinen", philosophy: "Hållbart ledarskap börjar med hur du använder din tid. Det viktiga skriker sällan." },
  "6": { name: "Personlig utvecklingsplan", tools: "Utvecklingsplan, Reflektionskort, 360-mini, Mentorssamtal", philosophy: "Utveckling sker inte i en rak linje. Ledarskap är att vara i ständig rörelse." },
};

function buildSystemPrompt(moduleId: string): string {
  const mod = MODULE_CONTEXT[moduleId] || MODULE_CONTEXT["1"];
  return `Du är en personlig ledarskapscoach för nya gruppledare. Du hjälper ledare att omsätta teori till praktik.

## Din approach
- Ställ EN följdfråga i taget — aldrig flera frågor samtidigt
- Håll svar korta: max 3-4 meningar
- Koppla alltid råd till de konkreta verktygen i modulen
- Utmana konstruktivt men var respektfull
- Börja aldrig med "Bra fråga!" eller liknande

## Aktiv modul: ${mod.name}
Verktyg: ${mod.tools}

## Ledarskapsfilosofi
${mod.philosophy}
Ledarskap handlar inte om titel utan om ansvar.
Tydlighet skapar motivation — inte tvärtom.
Handling väger tyngre än ord.`;
}

export async function POST(request: Request) {
  try {
    const { messages, moduleId = "1", sessionId } = await request.json();

    const lastUserMessage = messages[messages.length - 1];

    let conversationId: string | null = null;
    if (sessionId) {
      try {
        conversationId = await getOrCreateConversation(sessionId, moduleId);
        await saveMessage(conversationId, "user", lastUserMessage.content);
      } catch (e) {
        console.error("Supabase save error:", e);
      }
    }

    const encoder = new TextEncoder();
    let fullResponse = "";

    const stream = new ReadableStream({
      async start(controller) {
        const response = await anthropic.messages.create({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1024,
          stream: true,
          system: buildSystemPrompt(moduleId),
          messages: messages,
        });

        for await (const event of response) {
          if (
            event.type === "content_block_delta" &&
            event.delta.type === "text_delta"
          ) {
            fullResponse += event.delta.text;
            const data = JSON.stringify({ text: event.delta.text });
            controller.enqueue(encoder.encode(`data: ${data}\n\n`));
          }
        }

        if (conversationId && fullResponse) {
          try {
            await saveMessage(conversationId, "assistant", fullResponse);
          } catch (e) {
            console.error("Supabase assistant save error:", e);
          }
        }

        controller.enqueue(encoder.encode("data: [DONE]\n\n"));
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response(JSON.stringify({ error: "Något gick fel" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}