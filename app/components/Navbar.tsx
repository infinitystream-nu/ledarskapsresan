"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/auth";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();

  async function signOut() {
    await supabase.auth.signOut();
    router.push("/login");
  }

  const links = [
    { href: "/intro", label: "Introduktion" },
    { href: "/modules", label: "Moduler" },
    { href: "/tools", label: "Verktyg" },
    { href: "/coach", label: "Coach" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-2xl mx-auto px-4 h-12 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Link href="/" className="text-sm font-medium text-gray-900 mr-3">
            Ledarskapsresan
          </Link>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 rounded-lg text-xs transition-colors ${
                pathname.startsWith(link.href)
                  ? "bg-blue-50 text-blue-700 font-medium"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          onClick={signOut}
          className="text-xs text-gray-400 hover:text-gray-600"
        >
          Logga ut
        </button>
      </div>
    </nav>
  );
}