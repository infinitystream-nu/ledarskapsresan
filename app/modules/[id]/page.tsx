"use client";

import Navbar from "@/app/components/Navbar";
import { useState, use, useEffect, useCallback } from "react";
import Link from "next/link";
import { MODULES } from "@/lib/content";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/auth";

type Props = { params: Promise<{ id: string }> };
type SavedAnswers = Record<string, Record<number, string>>;

export default function ModulePage({ params }: Props) {
  const { id } = use(params);
  const mod = MODULES.find((m) => m.id === id);
  if (!mod) notFound();

  const [activeTab, setActiveTab] = useState<"video" | "fordupning" | "ovningar">("video");
  const [answers, setAnswers] = useState<SavedAnswers>({});
  const [saving, setSaving] = useState<string | null>(null);

  const fordjupning = mod.lessons.find((l) => l.type === "fordupning");
  const ovningar = mod.lessons.find((l) => l.type === "ovningar");

  async function getAuthHeaders(): Promise<HeadersInit> {
    const supabase = createClient();
    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    if (token) {
      return { "Content-Type": "application/json", Authorization: `Bearer ${token}` };
    }
    return { "Content-Type": "application/json" };
  }

  useEffect(() => {
    (async () => {
      const headers = await getAuthHeaders();
      const res = await fetch(`/api/exercises?moduleId=${mod.id}`, { headers });
      const data: { question_part: string; question_index: number; answer: string }[] = await res.json();
      const loaded: SavedAnswers = {};
      data.forEach(({ question_part, question_index, answer }) => {
        if (!loaded[question_part]) loaded[question_part] = {};
        loaded[question_part][question_index] = answer;
      });
      setAnswers(loaded);
    })();
  }, [mod.id]);

  const saveAnswer = useCallback(
    async (part: string, index: number, questionText: string, answer: string) => {
      const key = `${part}-${index}`;
      setSaving(key);
      setAnswers((prev) => ({
        ...prev,
        [part]: { ...(prev[part] ?? {}), [index]: answer },
      }));
      const headers = await getAuthHeaders();
      await fetch("/api/exercises", {
        method: "POST",
        headers,
        body: JSON.stringify({
          moduleId: mod.id,
          questionPart: part,
          questionIndex: index,
          questionText,
          answer,
        }),
      });
      setSaving(null);
    },
    [mod.id]
  );

  return (
    <>
      <Navbar />
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">

        <div className="mb-6">
          <Link href="/modules" className="text-sm text-gray-400 hover:text-gray-600">
          </Link>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">Modul {mod.number}</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-600">{mod.theme}</span>
          </div>
          <h1 className="text-2xl font-medium text-gray-900">{mod.title}</h1>
          <p className="text-sm text-gray-500 mt-1">{mod.description}</p>
        </div>

        <div className="flex gap-1 mb-6 border-b border-gray-200">
          {(mod.videoUrl ? ["video", "fordupning", "ovningar"] : ["fordupning", "ovningar"]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as "fordupning" | "ovningar")}
              className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px transition-colors ${
                activeTab === tab
                  ? "border-blue-500 text-blue-700"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab === "video" ? "Presentation" : tab === "fordupning" ? "Fördjupning" : "Övningar"}
            </button>
          ))}
        </div>

        {activeTab === "video" && mod.videoUrl && (
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="aspect-video">
              <iframe
                src={mod.videoUrl}
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-4 border-t border-gray-100">
              <p className="text-sm text-gray-500">
                Se presentationen och läs sedan fördjupningen innan du svarar på övningarna.
              </p>
            </div>
          </div>
        )}

        {activeTab === "fordupning" && fordjupning && (
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            {fordjupning.content.split("\n\n").map((block, i) => {
              if (block.startsWith("## ")) {
                return <h2 key={i} className="text-base font-medium text-gray-900 mt-6 mb-2 first:mt-0">{block.replace("## ", "")}</h2>;
              }
              if (block.includes("\n- ") || block.startsWith("- ")) {
                const items = block.split("\n").filter((l) => l.startsWith("- "));
                return (
                  <ul key={i} className="list-disc list-inside space-y-1 mb-3">
                    {items.map((item, j) => (
                      <li key={j} className="text-sm text-gray-600">{item.replace(/^- \*\*(.+?)\*\*:(.*)/, "$1:$2").replace(/^- /, "")}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={i} className="text-sm text-gray-600 mb-3">{block.replace(/\*\*/g, "")}</p>;
            })}
          </div>
        )}

        {activeTab === "ovningar" && (
          <div className="flex flex-col gap-6">
            {ovningar?.questions && ovningar.questions.length > 0 ? (
              <>
                {ovningar.questions.map((section) => (
                  <div key={section.part} className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-medium text-gray-900 mb-4">{section.part}</h3>
                    <div className="flex flex-col gap-4">
                      {section.questions.map((q, qi) => (
                        <div key={qi}>
                          <label className="text-sm font-medium text-gray-700 block mb-1">{qi + 1}. {q}</label>
                          <textarea
                            className="w-full text-sm border border-gray-200 rounded-lg p-3 min-h-[80px] resize-none focus:outline-none focus:border-blue-300 text-gray-700"
                            placeholder="Skriv ditt svar här..."
                            value={answers[section.part]?.[qi] ?? ""}
                            onChange={(e) => setAnswers((prev) => ({
                              ...prev,
                              [section.part]: { ...(prev[section.part] ?? {}), [qi]: e.target.value },
                            }))}
                            onBlur={(e) => saveAnswer(section.part, qi, q, e.target.value)}
                          />
                          {saving === `${section.part}-${qi}` && (
                            <p className="text-xs text-gray-400 mt-1">Sparar...</p>
                          )}
                        </div>
                      ))}
                      <div className="mt-2 p-3 bg-blue-50 rounded-lg border border-blue-100">
                        <p className="text-xs text-blue-600 font-medium mb-1">Reflektion</p>
                        <p className="text-sm text-blue-700">{section.reflection}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <p className="text-sm font-medium text-gray-700 mb-3">Dina svar är sparade. Vill du diskutera dem med din coach?</p>
                  <Link
                    href={`/coach?moduleId=${mod.id}`}
                    className="inline-block text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  >
                    Öppna AI-coachen →
                  </Link>
                </div>
              </>
            ) : (
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <p className="text-sm text-gray-500 italic">Övningar för denna modul läggs till snart.</p>
              </div>
            )}
          </div>
        )}

        <div className="mt-6 flex justify-between items-center">
          <Link href="/coach" className="text-sm text-blue-600 hover:underline">
            Diskutera med din coach →
          </Link>
          {mod.number < MODULES.length && (
            <Link href={`/modules/${mod.number + 1}`} className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Nästa modul →
            </Link>
          )}
        </div>

      </div>
    </div>
  </>
  );
}