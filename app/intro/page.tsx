"use client";

import Navbar from "@/app/components/Navbar";
import Link from "next/link";

export default function IntroPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-2xl mx-auto">

          <div className="mb-8">
            <h1 className="text-2xl font-medium text-gray-900">Välkommen till Ledarskapsresan</h1>
            <p className="text-sm text-gray-500 mt-1">Gruppledarutbildning — Från kollega till ledare</p>
          </div>

          {/* Video */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
            <div className="aspect-video">
              {process.env.NODE_ENV === "production" ? (
                <iframe
                  src="https://player.vimeo.com/video/1175805219"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-full bg-gray-900 flex flex-col items-center justify-center gap-2">
                  <p className="text-white text-sm font-medium">Video tillgänglig på riktio.com</p>
                  <p className="text-gray-400 text-xs">Vimeo blockerar localhost av säkerhetsskäl</p>
                </div>
              )}
            </div>
          </div>

          {/* Intro-text */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 flex flex-col gap-5">

            <div>
              <h2 className="text-base font-medium text-gray-900 mb-2">Att ta steget till ledarskap</h2>
              <p className="text-sm text-gray-600 leading-relaxed">Att ta steget till gruppledare är en resa som förändrar både dig och ditt sätt att se på arbetet. Plötsligt handlar ledarskapet inte längre bara om vad du själv gör, utan om hur du får andra att lyckas. Det handlar om att skapa energi, riktning och förtroende — och att växa i rollen som ledare.</p>
              <p className="text-sm text-gray-600 leading-relaxed mt-2">Den här utbildningen är skapad för att ge dig en trygg start och konkreta verktyg i den förändringen. Du får stöd att förstå din roll, bygga förtroende i teamet och utveckla de färdigheter som gör skillnad i vardagen.</p>
            </div>

            <div>
              <h2 className="text-base font-medium text-gray-900 mb-2">Din nya roll — från kollega till ledare</h2>
              <p className="text-sm text-gray-600 leading-relaxed">Som kollega har ditt fokus legat på din egen prestation. Som gruppledare breddas uppdraget — nu handlar det om att skapa förutsättningar för att hela teamet ska lyckas. Du leder människor, formar arbetsklimatet och är en länk mellan medarbetare och organisationens mål.</p>
            </div>

            <div>
              <h2 className="text-base font-medium text-gray-900 mb-2">Så är utbildningen uppbyggd</h2>
              <p className="text-sm text-gray-600 mb-3">Utbildningen består av sex moduler som följer din resa som ny ledare — steg för steg. Varje modul har ett tydligt fokusområde:</p>
              <div className="flex flex-col gap-2">
                {[
                  { n: "1", title: "Från kollega till gruppledare", desc: "Grunden i din nya roll" },
                  { n: "2", title: "Kommunikation och förtroende", desc: "Skapa tillit och tydlighet" },
                  { n: "3", title: "Att sätta mål och följa upp", desc: "Ge teamet riktning och struktur" },
                  { n: "4", title: "Konflikthantering och svåra samtal", desc: "Hantera utmaningar konstruktivt" },
                  { n: "5", title: "Ledarskap i vardagen", desc: "Leda, prioritera och inspirera" },
                  { n: "6", title: "Personlig utvecklingsplan", desc: "Din långsiktiga väg framåt" },
                ].map((m) => (
                  <div key={m.n} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full mt-0.5">M{m.n}</span>
                    <div>
                      <p className="text-sm font-medium text-gray-800">{m.title}</p>
                      <p className="text-xs text-gray-500">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-base font-medium text-gray-900 mb-2">Upplägget i varje modul</h2>
              <div className="flex flex-col gap-2">
                {[
                  { icon: "📊", label: "Presentation", desc: "En kort video som introducerar temat" },
                  { icon: "📘", label: "Fördjupning", desc: "Teorin och resonemangen bakom" },
                  { icon: "📝", label: "Övningar", desc: "Reflektionsfrågor du omsätter i din vardag" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="text-base">{item.icon}</span>
                    <div>
                      <p className="text-sm font-medium text-gray-800">{item.label}</p>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">Det är i övningarna och reflektionen som den verkliga utvecklingen sker — när du prövar själv, testar i ditt team och reflekterar över resultatet.</p>
            </div>

            <div>
              <h2 className="text-base font-medium text-gray-900 mb-2">Verktyg för vardagen</h2>
              <p className="text-sm text-gray-600 leading-relaxed">Utöver modulerna får du tillgång till 20 praktiska verktyg som du kan använda direkt i arbetet — feedbacksamtal, svåra samtal, effektiva möten, konflikthantering och mer. Tanken är att du alltid ska ha tillgång till enkla och tydliga stöd, oavsett var du befinner dig.</p>
            </div>

            <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-sm text-blue-800 font-medium mb-1">Din AI-coach</p>
              <p className="text-sm text-blue-700 leading-relaxed">Efter varje modul kan du diskutera dina svar och tankar med din personliga AI-coach — som känner till exakt vad du jobbat med och hjälper dig omsätta lärdomarna i praktiken.</p>
            </div>

          </div>

          <div className="flex justify-end">
            <Link
              href="/modules/1"
              className="bg-blue-600 text-white text-sm font-medium px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
            >
              Börja med modul 1 →
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}