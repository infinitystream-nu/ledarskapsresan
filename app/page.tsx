"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/auth";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import { MODULES } from "@/lib/content";

type ModuleProgress = Record<string, number>;

const MODULE_MAX_ANSWERS: Record<string, number> = {
  "1": 15, "2": 20, "3": 20, "4": 20, "5": 16, "6": 15,
};

export default function Home() {
  const [email, setEmail] = useState<string | null>(null);
  const [firstName, setFirstName] = useState<string | null>(null);
  const [progress, setProgress] = useState<ModuleProgress>({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { router.push("/login"); return; }

      setEmail(user.email ?? null);
      const name = user.user_metadata?.full_name ?? user.email?.split("@")[0] ?? null;
      setFirstName(name);

      // Hämta progress per modul
      const { data: session } = await supabase.auth.getSession();
      const token = session.session?.access_token;
      if (token) {
        const progressData: ModuleProgress = {};
        await Promise.all(
          MODULES.map(async (mod) => {
            const res = await fetch(`/api/exercises?moduleId=${mod.id}`, {
              headers: { Authorization: `Bearer ${token}` },
            });
            const answers = await res.json();
            const answered = answers.filter((a: { answer: string }) => a.answer?.trim()).length;
            progressData[mod.id] = Math.min(100, Math.round((answered / MODULE_MAX_ANSWERS[mod.id]) * 100));
          })
        );
        setProgress(progressData);
      }
      setLoading(false);
    })();
  }, []);

  const totalProgress = Math.round(
    Object.values(progress).reduce((a, b) => a + b, 0) / MODULES.length
  );

  const lastActiveModule = MODULES.slice().reverse().find((m) => (progress[m.id] ?? 0) > 0);
  const nextModule = lastActiveModule
    ? MODULES.find((m) => m.number === lastActiveModule.number + 1) ?? lastActiveModule
    : MODULES[0];

  if (loading) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <p className="text-sm text-gray-400">Laddar...</p>
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-2xl mx-auto flex flex-col gap-6">

          {/* Välkomst */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-medium text-gray-900">
                Hej {firstName}! 👋
              </h1>
              <p className="text-sm text-gray-500 mt-0.5">Välkommen till din ledarskapsresa</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400">Totalt genomfört</p>
              <p className="text-2xl font-medium text-blue-600">{totalProgress}%</p>
            </div>
          </div>

          {/* Fortsätt där du slutade */}
          <div className="bg-blue-600 rounded-xl p-5 text-white">
            <p className="text-xs font-medium text-blue-200 mb-1">
              {Object.values(progress).some(p => p > 0) ? "Fortsätt där du slutade" : "Börja här"}
            </p>
            <h2 className="text-base font-medium mb-3">
              Modul {nextModule.number} — {nextModule.title}
            </h2>
            <div className="flex items-center gap-3">
              <div className="flex-1 bg-blue-500 rounded-full h-1.5">
                <div
                  className="bg-white rounded-full h-1.5 transition-all"
                  style={{ width: `${progress[nextModule.id] ?? 0}%` }}
                />
              </div>
              <span className="text-xs text-blue-200">{progress[nextModule.id] ?? 0}%</span>
            </div>
            <div className="flex gap-2 mt-4">
              <Link
                href={`/modules/${nextModule.id}`}
                className="bg-white text-blue-600 text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Öppna modul →
              </Link>
              <Link
                href={`/coach?moduleId=${nextModule.id}`}
                className="bg-blue-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-400 transition-colors"
              >
                Prata med coach
              </Link>
            </div>
          </div>

          {/* Modulöversikt med progress */}
          <div>
            <h2 className="text-sm font-medium text-gray-700 mb-3">Alla moduler</h2>
            <div className="flex flex-col gap-2">
              {MODULES.map((mod) => {
                const pct = progress[mod.id] ?? 0;
                const started = pct > 0;
                const done = pct >= 90;
                return (
                  <Link
                    key={mod.id}
                    href={`/modules/${mod.id}`}
                    className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-200 hover:bg-blue-50 transition-colors group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-medium ${
                          done ? "bg-green-100 text-green-700" :
                          started ? "bg-blue-100 text-blue-700" :
                          "bg-gray-100 text-gray-500"
                        }`}>
                          {done ? "✓" : mod.number}
                        </span>
                        <span className="text-sm font-medium text-gray-900 group-hover:text-blue-700">
                          {mod.title}
                        </span>
                      </div>
                      <span className="text-xs text-gray-400">{pct}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1">
                      <div
                        className={`rounded-full h-1 transition-all ${done ? "bg-green-400" : "bg-blue-400"}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Snabblänkar */}
          <div className="grid grid-cols-2 gap-3">
            <Link href="/intro" className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-200 hover:bg-blue-50 transition-colors group">
              <p className="text-sm font-medium text-gray-900 group-hover:text-blue-700">Introduktion</p>
              <p className="text-xs text-gray-500 mt-0.5">Om utbildningen</p>
            </Link>
            <Link href="/tools" className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-200 hover:bg-blue-50 transition-colors group">
              <p className="text-sm font-medium text-gray-900 group-hover:text-blue-700">Verktygsbibliotek</p>
              <p className="text-xs text-gray-500 mt-0.5">20 praktiska verktyg</p>
            </Link>
            <Link href="/coach" className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-200 hover:bg-blue-50 transition-colors group col-span-2">
              <p className="text-sm font-medium text-gray-900 group-hover:text-blue-700">Din AI-coach</p>
              <p className="text-xs text-gray-500 mt-0.5">Personlig coaching kopplad till dina moduler och svar</p>
            </Link>
          </div>

          <p className="text-xs text-gray-400 text-center">Nivå 1 — Gruppledare</p>
        </div>
      </div>
    </>
  );
}