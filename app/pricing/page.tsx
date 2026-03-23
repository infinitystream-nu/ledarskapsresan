"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PricingPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleStart() {
    setLoading(true);
    const res = await fetch("/api/stripe/checkout", { method: "POST" });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      router.push("/login");
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-medium text-gray-900">Ledarskapsresan</h1>
          <p className="text-sm text-gray-500 mt-1">Från kollega till ledare</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="text-center mb-6">
            <span className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full mb-3">
              7 dagars gratis provperiod
            </span>
            <div className="flex items-end justify-center gap-1">
              <span className="text-4xl font-medium text-gray-900">199</span>
              <span className="text-gray-500 mb-1">kr/mån</span>
            </div>
            <p className="text-xs text-gray-400 mt-1">Inget kreditkort krävs under provperioden</p>
          </div>

          <div className="flex flex-col gap-2 mb-6">
            {[
              "6 kompletta ledarskapsmoduler",
              "Personlig AI-coach",
              "20 praktiska verktyg",
              "Reflektionsövningar",
              "Avsluta när som helst",
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <span className="text-green-500 text-sm">✓</span>
                <span className="text-sm text-gray-600">{feature}</span>
              </div>
            ))}
          </div>

          <button
            onClick={handleStart}
            disabled={loading}
            className="w-full py-3 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 disabled:opacity-40 transition-colors"
          >
            {loading ? "Vänta..." : "Starta gratis provperiod →"}
          </button>

          <p className="text-xs text-gray-400 text-center mt-3">
            Efter 7 dagar debiteras 199 kr/mån automatiskt
          </p>
        </div>
      </div>
    </div>
  );
}