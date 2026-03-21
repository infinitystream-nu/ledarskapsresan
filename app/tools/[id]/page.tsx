"use client";

import { use } from "react";
import Link from "next/link";
import { TOOLS } from "@/lib/tools";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ id: string }> };

export default function ToolPage({ params }: Props) {
  const { id } = use(params);
  const tool = TOOLS.find((t) => t.id === id);
  if (!tool) notFound();

  const allModuleTools = TOOLS.filter((t) => t.moduleId === tool.moduleId);
  const currentIndex = allModuleTools.findIndex((t) => t.id === id);
  const prevTool = allModuleTools[currentIndex - 1];
  const nextTool = allModuleTools[currentIndex + 1];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">

        <div className="mb-6">
          <Link href="/tools" className="text-sm text-gray-400 hover:text-gray-600">← Verktygsbibliotek</Link>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-medium text-gray-400">Verktyg {tool.number}</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-600">Modul {tool.moduleId}</span>
          </div>
          <h1 className="text-2xl font-medium text-gray-900">{tool.title}</h1>
          <p className="text-sm text-gray-500 mt-1">{tool.description}</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          {tool.content.split("\n\n").map((block, i) => {
            if (block.startsWith("## ")) {
              return <h2 key={i} className="text-base font-medium text-gray-900 mt-6 mb-2 first:mt-0">{block.replace("## ", "")}</h2>;
            }
            if (block.startsWith("### ")) {
              return <h3 key={i} className="text-sm font-semibold text-gray-800 mt-4 mb-1">{block.replace("### ", "")}</h3>;
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

        <div className="flex justify-between items-center">
          {prevTool ? (
            <Link href={`/tools/${prevTool.id}`} className="text-sm text-gray-500 hover:text-gray-700">← {prevTool.title}</Link>
          ) : <div />}
          {nextTool && (
            <Link href={`/tools/${nextTool.id}`} className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Nästa verktyg →</Link>
          )}
        </div>

      </div>
    </div>
  );
}