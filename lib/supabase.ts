import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY!;

export const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function getOrCreateConversation(
  sessionId: string,
  moduleId: string
): Promise<string> {
  const { data: existing } = await supabase
    .from("conversations")
    .select("id")
    .eq("session_id", sessionId)
    .eq("module_id", moduleId)
    .order("created_at", { ascending: false })
    .limit(1)
    .single();

  if (existing) return existing.id;

  const { data: created, error } = await supabase
    .from("conversations")
    .insert({ session_id: sessionId, module_id: moduleId })
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

export async function loadHistory(sessionId: string, moduleId: string) {
  const { data: conv } = await supabase
    .from("conversations")
    .select("id")
    .eq("session_id", sessionId)
    .eq("module_id", moduleId)
    .order("created_at", { ascending: false })
    .limit(1)
    .single();

  if (!conv) return [];

  const { data: msgs } = await supabase
    .from("messages")
    .select("role, content")
    .eq("conversation_id", conv.id)
    .order("created_at", { ascending: true });

  return msgs ?? [];
}

export async function saveExerciseAnswer(
  sessionId: string,
  moduleId: string,
  questionPart: string,
  questionIndex: number,
  questionText: string,
  answer: string
) {
  const { data: existing } = await supabase
    .from("exercise_answers")
    .select("id")
    .eq("session_id", sessionId)
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
    await supabase
      .from("exercise_answers")
      .insert({ session_id: sessionId, module_id: moduleId, question_part: questionPart, question_index: questionIndex, question_text: questionText, answer });
  }
}

export async function loadExerciseAnswers(sessionId: string, moduleId: string) {
  const { data } = await supabase
    .from("exercise_answers")
    .select("question_part, question_index, answer")
    .eq("session_id", sessionId)
    .eq("module_id", moduleId);
  return data ?? [];
}