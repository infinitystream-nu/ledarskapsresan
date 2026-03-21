"use client";

import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const MODULES = [
  { id: "1", label: "M1 — Ny roll" },
  { id: "2", label: "M2 — Kommunikation" },
  { id: "3", label: "M3 — Mål" },
  { id: "4", label: "M4 — Konflikt" },
  { id: "5", label: "M5 — Vardag" },
  { id: "6", label: "M6 — Utveckling" },
];

const WELCOME: Record<string, string> = {
  "1": "Hej! Jag är din coach för modulen om att starta i ny roll. Har du svarat på övningarna? Berätta vad du funderar på.",
  "2": "Hej! Vi jobbar med kommunikation och förtroende. Vad vill du utforska?",
  "3": "Hej! Modulen om mål och uppföljning. Vad är din utmaning just nu?",
  "4": "Hej! Vi jobbar med konflikthantering. Vad skaver i ditt team?",
  "5": "Hej! Ledarskap i vardagen. Vad tar mest energi just nu?",
  "6": "Hej! Dags att sätta din personliga utvecklingsplan. Var vill du börja?",
};

type Message = { role: "user" | "assistant"; content: string };

export default function CoachPage() {
  const searchParams = useSearchParams();
  const initialModuleId = searchParams.get("moduleId") ?? "1";

  const [moduleId, setModuleId] = useState(initialModuleId);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: WELCOME[initialModuleId] },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId] = useState(() => {
    if (typeof window !== "undefined") {
      const key = "ledarskapsresan_session";
      const existing = localStorage.getItem(key);
      if (existing) return existing;
      const newId = crypto.randomUUID();
      localStorage.setItem(key, newId);
      return newId;
    }
    return crypto.randomUUID();
  });
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function switchModule(id: string) {
    setModuleId(id);
    setMessages([{ role: "assistant", content: WELCOME[id] }]);
    setInput("");
  }

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");

    const userMsg: Message = { role: "user", content: text };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setLoading(true);

    const assistantMsg: Message = { role: "assistant", content: "" };
    setMessages([...newMessages, assistantMsg]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages, moduleId, sessionId }),
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
            const delta = parsed.text ?? parsed.delta?.text ?? "";
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

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-2xl flex flex-col gap-4">

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-medium text-gray-900">Din ledarskapscoach</h1>
            <p className="text-sm text-gray-500 mt-1">Välj modul och ställ din fråga</p>
          </div>
          <Link href="/modules" className="text-sm text-gray-400 hover:text-gray-600">← Moduler</Link>
        </div>

        <div className="flex flex-wrap gap-2">
          {MODULES.map((m) => (
            <button
              key={m.id}
              onClick={() => switchModule(m.id)}
              className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                moduleId === m.id
                  ? "bg-blue-50 text-blue-700 border-blue-200 font-medium"
                  : "bg-white text-gray-500 border-gray-200 hover:border-gray-300"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        <div className="bg-white border border-gray-200 rounded-xl flex flex-col h-[500px]">
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] px-4 py-2.5 rounded-xl text-sm leading-relaxed ${
                  msg.role === "user" ? "bg-blue-50 text-blue-900" : "bg-gray-100 text-gray-800"
                }`}>
                  {msg.content}
                  {loading && i === messages.length - 1 && msg.role === "assistant" && (
                    <span className="inline-block w-1 h-4 bg-gray-400 ml-0.5 animate-pulse" />
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