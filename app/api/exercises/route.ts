import { saveExerciseAnswer, loadExerciseAnswers } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const { sessionId, moduleId, questionPart, questionIndex, questionText, answer } = await request.json();
    await saveExerciseAnswer(sessionId, moduleId, questionPart, questionIndex, questionText, answer);
    return new Response(JSON.stringify({ ok: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Kunde inte spara" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get("sessionId") ?? "";
    const moduleId = searchParams.get("moduleId") ?? "";
    const answers = await loadExerciseAnswers(sessionId, moduleId);
    return new Response(JSON.stringify(answers), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify([]), {
      headers: { "Content-Type": "application/json" },
    });
  }
}