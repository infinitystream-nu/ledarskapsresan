import Anthropic from "@anthropic-ai/sdk";
import { getOrCreateConversation, saveMessage, loadExerciseAnswers, getUserId } from "@/lib/supabase";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const MODULE_CONTEXT: Record<string, { name: string; tools: string; philosophy: string }> = {
  "1": { name: "Från kollega till ledare", tools: "Starta i ny roll, Förväntansdialog, 30-dagarsplan", philosophy: "Rollförändringen handlar om att skifta fokus från din prestation till teamets prestation." },
  "2": { name: "Kommunikation och förtroende", tools: "ToGROW, Feedbacktrappan, Tillitstrappan, Aktivt lyssnande", philosophy: "Öppna frågor + aktivt lyssnande = effektiv kommunikation. Feedback är en färskvara." },
  "3": { name: "Att sätta mål och följa upp", tools: "SMART-mål, Veckouppföljning 10-min, Möteskompassen, Fira framsteg", philosophy: "Tydliga mål skapar motivation. Uppföljning handlar om lärande, inte kontroll." },
  "4": { name: "Konflikthantering och svåra samtal", tools: "Svåra samtal 4-stegsmodellen, Feedback i tre steg, Tidiga signaler, Trygg dialog", philosophy: "Konflikter är naturliga. Det är frånvaron av samtalet som är problemet." },
  "5": { name: "Ledarskap i vardagen", tools: "Veckoplanering 30-min, Energikartan, 5-minutersreflektionen, Prioriteringsrutinen", philosophy: "Hållbart ledarskap börjar med hur du använder din tid. Det viktiga skriker sällan." },
  "6": { name: "Personlig utvecklingsplan", tools: "Utvecklingsplan, Reflektionskort, 360-mini, Mentorssamtal", philosophy: "Utveckling sker inte i en rak linje. Ledarskap är att vara i ständig rörelse." },
};

const ALL_TOOLS = `
Modul 1: Starta i ny roll, Förväntansdialog, 30-dagarsplan
Modul 2: Kommunikation i vardagen, Tillitstrappan, Aktivt lyssnande
Modul 3: SMART-mål, Veckouppföljning, Möteskompassen, Fira framsteg
Modul 4: Svåra samtal 4-stegsmodellen, Feedback i tre steg, Tidiga signaler, Trygg dialog
Modul 5: Veckoplanering 30-min, Energikartan, 5-minutersreflektionen, Prioriteringsrutinen
Modul 6: Personlig utvecklingsplan, Reflektionskort, 360-mini, Mentorssamtal`;

function buildSystemPrompt(moduleId: string | null, exerciseContext: string): string {
  const isGeneral = !moduleId || moduleId === "general";

  const base = `Du är en personlig ledarskapscoach för gruppledare. Du kombinerar djup förståelse för ledarskap med praktisk vardagscoaching.

## Din approach
- Ställ EN följdfråga i taget — aldrig flera frågor samtidigt
- Håll svar korta och konkreta: max 3-4 meningar
- Koppla alltid till praktiska verktyg och konkreta beteenden
- Utmana konstruktivt men var respektfull
- Börja aldrig med "Bra fråga!" eller liknande
- Var direkt och rak — undvik fluff

## Ledarskapsfilosofi
Ledarskap handlar inte om titel utan om ansvar.
Tydlighet skapar motivation — inte tvärtom.
Handling väger tyngre än ord.
Det viktigaste är inte vad du gör — utan vad du får andra att lyckas med.`;

  if (isGeneral) {
    return `${base}

## Ditt uppdrag som allmän ledarskapscoach
Du är ett stöd i vardagen för ledare — oavsett om de går en utbildning eller inte.
Du hjälper med:
- Konkreta ledarskapssituationer och dilemman i vardagen
- Att resonera kring svåra beslut och samtal
- Tips på vilka verktyg som passar situationen
- Reflektion och personlig utveckling som ledare

## Alla tillgängliga verktyg du kan rekommendera
${ALL_TOOLS}

När en situation matchar ett verktyg — nämn det vid namn och förklara kort hur det kan hjälpa.`;
  }

  const mod = MODULE_CONTEXT[moduleId] || MODULE_CONTEXT["1"];
  const answersSection = exerciseContext
    ? `\n## Användarens övningssvar från modulen\nAnvänd dessa svar som utgångspunkt. Ställ följdfrågor på det användaren faktiskt skrivit.\n${exerciseContext}\n`
    : "";

  return `${base}

## Aktiv modul: ${mod.name}
Verktyg i denna modul: ${mod.tools}
${mod.philosophy}
${answersSection}
## Alla verktyg (kan refereras även utanför aktiv modul)
${ALL_TOOLS}`;
}

export async function POST(request: Request) {
  try {
    const userId = await getUserId(request);
    const { messages, moduleId } = await request.json();

    let exerciseContext = "";
    if (userId && moduleId && moduleId !== "general") {
      try {
        const answers = await loadExerciseAnswers(userId, moduleId);
        if (answers.length > 0) {
          exerciseContext = answers
            .map((a: { question_part: string; question_index: number; answer: string }) =>
              `[${a.question_part}, fråga ${a.question_index + 1}]: ${a.answer}`
            )
            .filter((s: string) => s.split(": ")[1]?.trim())
            .join("\n");
        }
      } catch (e) {
        console.error("Exercise load error:", e);
      }
    }

    let conversationId: string | null = null;
    if (userId) {
      try {
        const convModuleId = moduleId || "general";
        conversationId = await getOrCreateConversation(userId, convModuleId);
        await saveMessage(conversationId, "user", messages[messages.length - 1].content);
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
          system: buildSystemPrompt(moduleId, exerciseContext),
          messages,
        });

        for await (const event of response) {
          if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
            fullResponse += event.delta.text;
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ text: event.delta.text })}\n\n`));
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
      headers: { "Content-Type": "text/event-stream", "Cache-Control": "no-cache", Connection: "keep-alive" },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response(JSON.stringify({ error: "Något gick fel" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}