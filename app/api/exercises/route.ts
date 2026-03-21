import { saveExerciseAnswer, loadExerciseAnswers, getUserId } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const userId = await getUserId(request);
    if (!userId) return new Response(JSON.stringify({ error: "Ej inloggad" }), { status: 401 });

    const { moduleId, questionPart, questionIndex, questionText, answer } = await request.json();
    await saveExerciseAnswer(userId, moduleId, questionPart, questionIndex, questionText, answer);
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
    const userId = await getUserId(request);
    if (!userId) return new Response(JSON.stringify([]), { status: 200 });

    const { searchParams } = new URL(request.url);
    const moduleId = searchParams.get("moduleId") ?? "";
    const answers = await loadExerciseAnswers(userId, moduleId);
    return new Response(JSON.stringify(answers), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify([]), {
      headers: { "Content-Type": "application/json" },
    });
  }
}