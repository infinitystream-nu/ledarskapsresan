"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/auth";

export default function Home() {
  const [email, setEmail] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        router.push("/login");
      } else {
        setEmail(data.user.email ?? null);
      }
    });
  }, []);

  async function signOut() {
    await supabase.auth.signOut();
    router.push("/login");
  }

  if (!email) return null;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="max-w-lg w-full flex flex-col gap-6">

        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-medium text-gray-900">Ledarskapsresan</h1>
            <p className="text-gray-500 mt-1">Från kollega till ledare — nivå 1</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-400">{email}</p>
            <button onClick={signOut} className="text-xs text-blue-600 hover:underline mt-0.5">Logga ut</button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3">
          <Link
            href="/modules"
            className="bg-white border border-gray-200 rounded-xl p-5 text-left hover:border-blue-200 hover:bg-blue-50 transition-colors group"
          >
            <div className="font-medium text-gray-900 group-hover:text-blue-700">Moduler</div>
            <div className="text-sm text-gray-500 mt-1">6 moduler — från kollega till ledare</div>
          </Link>

          <Link
            href="/coach"
            className="bg-white border border-gray-200 rounded-xl p-5 text-left hover:border-blue-200 hover:bg-blue-50 transition-colors group"
          >
            <div className="font-medium text-gray-900 group-hover:text-blue-700">Din AI-coach</div>
            <div className="text-sm text-gray-500 mt-1">Få personlig coaching kopplad till dina moduler</div>
          </Link>
          <Link
            href="/tools"
            className="bg-white border border-gray-200 rounded-xl p-5 text-left hover:border-blue-200 hover:bg-blue-50 transition-colors group"
          >
           <div className="font-medium text-gray-900 group-hover:text-blue-700">Verktygsbibliotek</div>
           <div className="text-sm text-gray-500 mt-1">20 verktyg för vardagligt ledarskap</div>
          </Link>
        </div>

        <p className="text-xs text-gray-400 text-center">Nivå 1 — Gruppledare</p>
      </div>
    </div>
  );
}