"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/auth";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  function navClass(href: string) {
    return `px-3 py-1.5 rounded-lg text-xs transition-colors ${
      pathname.startsWith(href)
        ? "bg-blue-50 text-blue-700 font-medium"
        : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
    }`;
  }

  function handleSignOut() {
    const supabase = createClient();
    supabase.auth.signOut().then(() => {
      window.location.href = "/login";
    });
  }

  function handleCoachClick(e: React.MouseEvent) {
    e.preventDefault();
    window.location.href = "/coach";
  }

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-2xl mx-auto px-4 h-12 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Link href="/" className="text-sm font-medium text-gray-900 mr-3">
            Ledarskapsresan
          </Link>
          <Link href="/intro" className={navClass("/intro")}>Introduktion</Link>
          <Link href="/modules" className={navClass("/modules")}>Moduler</Link>
          <Link href="/tools" className={navClass("/tools")}>Verktyg</Link>
          <a href="/coach" onClick={handleCoachClick} className={navClass("/coach")}>
            Coach
          </a>
        </div>
        <button onClick={handleSignOut} className="text-xs text-gray-400 hover:text-gray-600">
          Logga ut
        </button>
      </div>
    </nav>
  );
}
