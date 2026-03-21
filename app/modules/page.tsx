import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import { MODULES } from "@/lib/content";

export default function ModulesPage() {
  return (
    <>
      <Navbar />
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">

        <div className="mb-8">
          <h1 className="text-2xl font-medium text-gray-900">Gruppledarutbildning</h1>
          <p className="text-sm text-gray-500 mt-1">Från kollega till ledare — nivå 1</p>
        </div>

        <div className="flex flex-col gap-3">
          {MODULES.map((mod) => (
            <Link
              key={mod.id}
              href={`/modules/${mod.id}`}
              className="bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-200 hover:bg-blue-50 transition-colors group"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                      Modul {mod.number}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
                      {mod.theme}
                    </span>
                  </div>
                  <h2 className="font-medium text-gray-900 group-hover:text-blue-700">
                    {mod.title}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">{mod.description}</p>
                </div>
                <span className="text-gray-300 group-hover:text-blue-400 ml-4 mt-1">→</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link href="/coach" className="text-sm text-blue-600 hover:underline">
            Gå till din AI-coach →
          </Link>
        </div>

      </div>
     </div>
  </>
  );
}