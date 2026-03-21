"use client";

import { useState, use } from "react";
import Link from "next/link";
import { MODULES } from "@/lib/content";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ id: string }> };

export default function ModulePage({ params }: Props) {
  const { id } = use(params);
  const mod = MODULES.find((m) => m.id === id);
  if (!mod) notFound();

  const [activeTab, setActiveTab] = useState<"fordupning" | "ovningar">("fordupning");
  const lesson = mod.lessons.find((l) => l.type === activeTab);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">

        <div className="mb-6">
          <Link href="/modules" className="text-sm text-gray-400 hover:text-gray-600">
            ← Alla moduler
          </Link>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
              Modul {mod.number}
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-600">
              {mod.theme}
            </span>
          </div>
          <h1 className="text-2xl font-medium text-gray-900">{mod.title}</h1>
          <p className="text-sm text-gray-500 mt-1">{mod.description}</p>
        </div>

        <div className="flex gap-1 mb-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("fordupning")}
            className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px transition-colors ${
              activeTab === "fordupning"
                ? "border-blue-500 text-blue-700"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Fördjupning
          </button>
          <button
            onClick={() => setActiveTab("ovningar")}
            className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px transition-colors ${
              activeTab === "ovningar"
                ? "border-blue-500 text-blue-700"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Övningar
          </button>
        </div>

        {activeTab === "fordupning" && lesson && (
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
              {lesson.content.split('\n\n').map((block, i) => {
                if (block.startsWith('## ')) {
                  return <h2 key={i} className="text-base font-medium text-gray-900 mt-6 mb-2 first:mt-0">{block.replace('## ', '')}</h2>;
                }
                if (block.includes('\n- ') || block.startsWith('- ')) {
                  const items = block.split('\n').filter(l => l.startsWith('- '));
                  return (
                    <ul key={i} className="list-disc list-inside space-y-1 mb-3">
                      {items.map((item, j) => (
                        <li key={j} className="text-sm text-gray-600">{item.replace(/^- \*\*(.+?)\*\*:(.*)/, '$1:$2').replace(/^- /, '')}</li>
                      ))}
                    </ul>
                  );
                }
                return <p key={i} className="text-sm text-gray-600 mb-3">{block.replace(/\*\*/g, '')}</p>;
              })}
            </div>
          </div>
        )}

        {activeTab === "ovningar" && (
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <p className="text-sm text-gray-500 italic">
              Övningarna kommer snart. Använd din AI-coach för att reflektera kring modulens innehåll.
          </p>
          </div>
        )}

        <div className="mt-6 flex justify-between items-center">
          <Link href="/coach" className="text-sm text-blue-600 hover:underline">
            Diskutera med din coach →
          </Link>
          {mod.number < MODULES.length && (
            <Link
              href={`/modules/${mod.number + 1}`}
              className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Nästa modul →
            </Link>
          )}
        </div>

      </div>
    </div>
  );
}