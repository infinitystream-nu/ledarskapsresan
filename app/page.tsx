import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="max-w-lg w-full text-center flex flex-col gap-6">

        <div>
          <h1 className="text-3xl font-medium text-gray-900">Ledarskapsresan</h1>
          <p className="text-gray-500 mt-2">Från kollega till ledare — övningar, kunskap och ditt stöd i vardagen</p>
        </div>

        <div className="grid grid-cols-1 gap-3">
          <Link
            href="/coach"
            className="bg-white border border-gray-200 rounded-xl p-5 text-left hover:border-blue-200 hover:bg-blue-50 transition-colors group"
          >
            <div className="font-medium text-gray-900 group-hover:text-blue-700">Din AI-coach</div>
            <div className="text-sm text-gray-500 mt-1">Få personlig coaching kopplad till dina moduler</div>
          </Link>
        </div>

        <p className="text-xs text-gray-400">Nivå 1 — Gruppledare</p>
      </div>
    </div>
  );
}