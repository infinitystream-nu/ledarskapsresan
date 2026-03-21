import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import { TOOLS } from "@/lib/tools";
import { MODULES } from "@/lib/content";

export default function ToolsPage() {
  const moduleGroups = MODULES.map((mod) => ({
    mod,
    tools: TOOLS.filter((t) => t.moduleId === mod.id),
  }));

  return (
   <>
    <Navbar />
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">

        <div className="mb-8">
          <h1 className="text-2xl font-medium text-gray-900 mt-4">Verktygsbibliotek</h1>
          <p className="text-sm text-gray-500 mt-1">20 verktyg fördelade på 6 moduler</p>
        </div>

        <div className="flex flex-col gap-8">
          {moduleGroups.map(({ mod, tools }) => (
            <div key={mod.id}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">Modul {mod.number}</span>
                <span className="text-sm font-medium text-gray-700">{mod.title}</span>
              </div>
              <div className="flex flex-col gap-2">
                {tools.map((tool) => (
                  <Link
                    key={tool.id}
                    href={`/tools/${tool.id}`}
                    className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-200 hover:bg-blue-50 transition-colors group flex items-center justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400">{tool.number}</span>
                        <span className="text-sm font-medium text-gray-900 group-hover:text-blue-700">{tool.title}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5">{tool.description}</p>
                    </div>
                    <span className="text-gray-300 group-hover:text-blue-400 ml-4">→</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  </>
  );
}