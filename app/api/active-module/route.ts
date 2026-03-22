import { getUserId, supabase } from "@/lib/supabase";

export async function GET(request: Request) {
  try {
    const userId = await getUserId(request);
    if (!userId) return new Response(JSON.stringify({ moduleId: "1" }));

    // Hitta modulen med senast sparad övning
    const { data } = await supabase
      .from("exercise_answers")
      .select("module_id, updated_at")
      .eq("user_id", userId)
      .order("updated_at", { ascending: false })
      .limit(1)
      .single();

    const moduleId = data?.module_id ?? "1";
    return new Response(JSON.stringify({ moduleId }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response(JSON.stringify({ moduleId: "1" }), {
      headers: { "Content-Type": "application/json" },
    });
  }
}