"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { createClient } from "@/lib/auth";
import Navbar from "@/app/components/Navbar";

const MODULE_NAMES: Record<string, string> = {
  "1": "Från kollega till ledare",
  "2": "Kommunikation och förtroende",
  "3": "Att sätta mål och följa upp",
  "4": "Konflikthantering och svåra samtal",
  "5": "Ledarskap i vardagen",
  "6": "Personlig utvecklingsplan",
  "general": "Allmänt ledarskap",
};

type Message = { role: "user" | "assistant"; content: string };

function CoachContent() {
  const searchParams = useSearchParams();
  const urlModuleId = searchParams.get("moduleId");

  const [moduleId, setModuleId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingModule, setLoadingModule] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);
  const router = useRouter();   // ← lägg till

  useEffect(() => {             // ← lägg till detta block
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    if (isFirstRender.current) { isFirstRender.current = false; return; }
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Hämta aktiv modul vid load
  useEffect(() => {
    (async () => {
      if (urlModuleId) {
        initModule(urlModuleId);
        setLoadingModule(false);
        return;
      }
      try {
        const supabase = createClient();
        const { data } = await supabase.auth.getSession();
        const token = data.session?.access_token;
        const res = await fetch("/api/active-module", {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        });
        const { moduleId: detectedId } = await res.json();
        initModule(detectedId);
      } catch {
        initModule("1");
      } finally {
        setLoadingModule(false);
      }
    })();
  }, []);

  function initModule(id: string) {
    setModuleId(id);
    const isGeneral = id === "general";
    const moduleName = MODULE_NAMES[id] ?? "din modul";
    const welcome = isGeneral
      ? "Hej! Jag är din ledarskapscoach. Berätta vad du funderar på — ett samtal, en utmaning, ett beslut. Jag hjälper dig också att hitta rätt verktyg för situationen."
      : `Hej! Jag ser att du jobbar med "${moduleName}". Har du svarat på övningarna? Berätta vad du funderar på.`;
    setMessages([{ role: "assistant", content: welcome }]);
  }

  async function getAuthHeaders(): Promise<HeadersInit> {
    const supabase = createClient();
    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    return token
      ? { "Content-Type": "application/json", Authorization: `Bearer ${token}` }
      : { "Content-Type": "application/json" };
  }

  async function send() {
    const text = input.trim();
    if (!text || loading || !moduleId) return;
    setInput("");

    const userMsg: Message = { role: "user", content: text };
    const newMessages = [...messages, userMsg];
    setMessages([...newMessages, { role: "assistant", content: "" }]);
    setLoading(true);

    try {
      const headers = await getAuthHeaders();
      const res = await fetch("/api/chat", {
        method: "POST",
        headers,
        body: JSON.stringify({ messages: newMessages, moduleId }),
      });

      const reader = res.body!.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let fullText = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";
        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const data = line.slice(6);
          if (data === "[DONE]") continue;
          try {
            const parsed = JSON.parse(data);
            const delta = parsed.text ?? "";
            if (delta) {
              fullText += delta;
              setMessages((prev) => {
                const updated = [...prev];
                updated[updated.length - 1] = { role: "assistant", content: fullText };
                return updated;
              });
            }
          } catch {}
        }
      }
    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = { role: "assistant", content: "Något gick fel. Försök igen." };
        return updated;
      });
    } finally {
      setLoading(false);
    }
  }

  if (loadingModule) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <p className="text-sm text-gray-400">Laddar din coach...</p>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto px-4 py-10 flex flex-col gap-4">

        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-medium text-gray-900">Din ledarskapscoach</h1>
            {moduleId && (
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
                  {MODULE_NAMES[moduleId] ?? moduleId}
                </span>
                <button
                  onClick={() => initModule("general")}
                  className={`text-xs px-2 py-0.5 rounded-full border transition-colors ${
                    moduleId === "general"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "text-gray-400 border-gray-200 hover:text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  Allmänt ledarskap
                </button>
              </div>
            )}
          </div>
        </div>

        <div
          className="bg-white border border-gray-200 rounded-xl flex flex-col"
          style={{ height: "calc(100vh - 260px)", minHeight: "400px" }}
        >
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] px-4 py-2.5 rounded-xl text-sm leading-relaxed ${
                  msg.role === "user" ? "bg-blue-50 text-blue-900" : "bg-gray-100 text-gray-800"
                }`}>
                  {msg.content}
                  {loading && i === messages.length - 1 && msg.role === "assistant" && !msg.content && (
                    <span className="inline-flex gap-1">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </span>
                  )}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>
          <div className="border-t border-gray-100 p-3 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Skriv din fråga..."
              disabled={loading}
              className="flex-1 text-sm px-3 py-2 border border-gray-200 rounded-lg outline-none focus:border-blue-300 disabled:opacity-50"
            />
            <button
              onClick={send}
              disabled={loading || !input.trim()}
              className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 disabled:opacity-40 transition-colors"
            >
              Skicka
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function CoachPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <p className="text-sm text-gray-400">Laddar...</p>
        </div>
      }>
        <CoachContent />
      </Suspense>
    </>
  );
}