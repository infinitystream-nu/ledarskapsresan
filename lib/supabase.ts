import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY!;

// Server-side klient med service key (för API-routes)
export const supabase = createSupabaseClient(supabaseUrl, supabaseServiceKey);

// Hämta inloggad användares ID via anon key (används från API-routes med auth header)
export async function getUserId(request: Request): Promise<string | null> {
  const authHeader = request.headers.get("authorization");
  if (!authHeader) return null;
  const token = authHeader.replace("Bearer ", "");
  const { data } = await createSupabaseClient(
    supabaseUrl,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  ).auth.getUser(token);
  return data.user?.id ?? null;
}

export async function getOrCreateConversation(
  userId: string,
  moduleId: string
): Promise<string> {
  const { data: existing } = await supabase
    .from("conversations")
    .select("id")
    .eq("user_id", userId)
    .eq("module_id", moduleId)
    .order("created_at", { ascending: false })
    .limit(1)
    .single();

  if (existing) return existing.id;

  const { data: created, error } = await supabase
    .from("conversations")
    .insert({ user_id: userId, session_id: userId, module_id: moduleId })
    .select("id")
    .single();

  if (error) throw error;
  return created.id;
}

export async function saveMessage(
  conversationId: string,
  role: "user" | "assistant",
  content: string
) {
  await supabase
    .from("messages")
    .insert({ conversation_id: conversationId, role, content });
}

export async function saveExerciseAnswer(
  userId: string,
  moduleId: string,
  questionPart: string,
  questionIndex: number,
  questionText: string,
  answer: string
) {
  const { data: existing } = await supabase
    .from("exercise_answers")
    .select("id")
    .eq("user_id", userId)
    .eq("module_id", moduleId)
    .eq("question_part", questionPart)
    .eq("question_index", questionIndex)
    .single();

  if (existing) {
    await supabase
      .from("exercise_answers")
      .update({ answer })
      .eq("id", existing.id);
  } else {
    await supabase.from("exercise_answers").insert({
      user_id: userId,
      session_id: userId,
      module_id: moduleId,
      question_part: questionPart,
      question_index: questionIndex,
      question_text: questionText,
      answer,
    });
  }
}

export async function loadExerciseAnswers(userId: string, moduleId: string) {
  const { data } = await supabase
    .from("exercise_answers")
    .select("question_part, question_index, answer")
    .eq("user_id", userId)
    .eq("module_id", moduleId);
  return data ?? [];
}