"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import { FACILITATOR_INTRO, FACILITATOR_SESSIONS, FACILITATOR_INTRO_SESSION } from "@/lib/facilitator";

export default function FacilitatorPage() {
  const [activeSection, setActiveSection] = useState<"intro" | "sessions">("intro");
  const [activeSession, setActiveSession] = useState<string>("0");

  const session = activeSession === "0"
    ? FACILITATOR_INTRO_SESSION
    : FACILITATOR_SESSIONS.find((s) => s.id === activeSession);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-2xl mx-auto">

          <div className="mb-6">
            <h1 className="text-2xl font-medium text-gray-900">{FACILITATOR_INTRO.title}</h1>
            <p className="text-sm text-gray-500 mt-1">{FACILITATOR_INTRO.subtitle}</p>
          </div>

          <div className="flex gap-1 mb-6 border-b border-gray-200">
            {[
              { id: "intro", label: "Om handledarrollen" },
              { id: "sessions", label: "Sessionsguider" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id as "intro" | "sessions")}
                className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px transition-colors ${
                  activeSection === tab.id
                    ? "border-blue-500 text-blue-700"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeSection === "intro" && (
            <div className="flex flex-col gap-5">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h2 className="text-base font-medium text-gray-900 mb-3">Handledarens roll</h2>
                {FACILITATOR_INTRO.role.split("\n\n").map((p, i) => (
                  <p key={i} className="text-sm text-gray-600 leading-relaxed mb-2">{p}</p>
                ))}
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h2 className="text-base font-medium text-gray-900 mb-4">Format</h2>
                <div className="flex flex-col gap-3">
                  {FACILITATOR_INTRO.formats.map((f) => (
                    <div key={f.name} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-sm font-medium text-gray-900">{f.name}</p>
                        <span className="text-xs text-gray-400">{f.frequency}</span>
                      </div>
                      <p className="text-sm text-gray-600">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h2 className="text-base font-medium text-gray-900 mb-4">Principer för ett bra handledarsamtal</h2>
                <ul className="flex flex-col gap-2">
                  {FACILITATOR_INTRO.principles.map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-blue-400 mt-0.5">→</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeSection === "sessions" && (
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveSession("0")}
                  className={`px-3 py-1.5 rounded-full text-xs border transition-colors ${
                    activeSession === "0"
                      ? "bg-blue-50 text-blue-700 border-blue-200 font-medium"
                      : "bg-white text-gray-500 border-gray-200 hover:border-gray-300"
                  }`}
                >
                  Inledning
                </button>
                {FACILITATOR_SESSIONS.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveSession(s.id)}
                    className={`px-3 py-1.5 rounded-full text-xs border transition-colors ${
                      activeSession === s.id
                        ? "bg-blue-50 text-blue-700 border-blue-200 font-medium"
                        : "bg-white text-gray-500 border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    Modul {s.id}
                  </button>
                ))}
              </div>

              {session && (
                <div className="flex flex-col gap-4">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-1">
                      <h2 className="text-base font-medium text-gray-900">{session.title}</h2>
                      <span className="text-xs text-gray-400">{session.duration}</span>
                    </div>
                    <p className="text-sm text-blue-700 bg-blue-50 rounded-lg px-3 py-2 mt-2">{session.purpose}</p>
                  </div>

                  {session.sections.map((section, si) => (
                    <div key={si} className="bg-white border border-gray-200 rounded-xl p-6">
                      <h3 className="text-sm font-medium text-gray-900 mb-3">{section.title}</h3>
                      <ul className="flex flex-col gap-2 mb-3">
                        {section.questions.map((q, qi) => (
                          <li key={qi} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="text-blue-300 shrink-0">{qi + 1}.</span>{q}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-start gap-2 p-3 bg-amber-50 rounded-lg border border-amber-100">
                        <span className="shrink-0">💬</span>
                        <p className="text-xs text-amber-800">{section.tip}</p>
                      </div>
                    </div>
                  ))}

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-sm font-medium text-gray-900 mb-3">{session.summary.title}</h3>
                    <ul className="flex flex-col gap-2">
                      {session.summary.points.map((p, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-blue-400 shrink-0">{i + 1}.</span>{p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                    <p className="text-xs font-medium text-blue-600 mb-1">Avsluta sessionen</p>
                    <p className="text-sm text-blue-700">{session.closing}</p>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </>
  );
}
