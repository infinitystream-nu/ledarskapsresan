"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  async function handleSubmit() {
    setError("");
    setLoading(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      }
      router.push("/modules");
      router.refresh();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Något gick fel");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">

        <div className="text-center mb-8">
          <h1 className="text-2xl font-medium text-gray-900">Ledarskapsresan</h1>
          <p className="text-sm text-gray-500 mt-1">Från kollega till ledare</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-base font-medium text-gray-900 mb-4">
            {mode === "login" ? "Logga in" : "Skapa konto"}
          </h2>

          <div className="flex flex-col gap-3">
            <div>
              <label className="text-xs font-medium text-gray-500 block mb-1">E-post</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                placeholder="din@epost.se"
                className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg outline-none focus:border-blue-300"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-gray-500 block mb-1">Lösenord</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                placeholder="Minst 6 tecken"
                className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg outline-none focus:border-blue-300"
              />
            </div>

            {error && (
              <p className="text-xs text-red-500">{error}</p>
            )}

            <button
              onClick={handleSubmit}
              disabled={loading || !email || !password}
              className="w-full py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 disabled:opacity-40 transition-colors"
            >
              {loading ? "Vänta..." : mode === "login" ? "Logga in" : "Skapa konto"}
            </button>
          </div>

          <div className="mt-4 text-center">
            <button
              onClick={() => { setMode(mode === "login" ? "signup" : "login"); setError(""); }}
              className="text-xs text-blue-600 hover:underline"
            >
              {mode === "login" ? "Inget konto? Skapa ett här" : "Har du redan ett konto? Logga in"}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}