export type FacilitatorSection = {
  title: string
  questions: string[]
  tip: string
}

export type FacilitatorSession = {
  id: string
  moduleId: string
  title: string
  duration: string
  purpose: string
  sections: FacilitatorSection[]
  summary: { title: string; points: string[] }
  closing: string
}

export const FACILITATOR_INTRO = {
  title: "Handledarstöd — Gruppledarutbildning",
  subtitle: "Guide för dig som leder gruppen igenom utbildningen",
  role: `Som handledare är din viktigaste uppgift att skapa ett tryggt utrymme för reflektion och dialog — inte att undervisa eller ha alla svar.

Du behöver inte vara expert på ledarskap. Det räcker att du ställer öppna frågor och lyssnar aktivt, håller strukturen och tiden, uppmuntrar alla att delta, och kopplar samtalet till deltagarnas egna situationer.`,

  formats: [
    {
      name: "Individuellt med mentor",
      desc: "En deltagare och en handledare. Intima samtal, djup reflektion. Rekommenderat för chefer som coachar sina gruppledare.",
      frequency: "45–60 min per modul"
    },
    {
      name: "I grupp (3–8 personer)",
      desc: "Grupp av nya gruppledare som går utbildningen tillsammans. Skapar kollegialt lärande och nätverk.",
      frequency: "90 min per modul, 7 tillfällen"
    },
    {
      name: "Blandat",
      desc: "Individuellt arbete med modulen, sedan gemensam session för reflektion och dialog.",
      frequency: "Eget tempo + gemensamma träffar"
    }
  ],

  principles: [
    "Låt deltagaren styra — din roll är att facilitera, inte föreläsa",
    "Inga rätt eller fel svar — erfarenheter är lika värdefulla som teorier",
    "Koppla alltid till verkligheten — 'Hur ser det ut hos dig?'",
    "Avsluta med ett konkret nästa steg — vad ska deltagaren göra annorlunda?",
    "Följ upp — fråga vid nästa tillfälle vad som hänt sedan sist"
  ]
}

export const FACILITATOR_INTRO_SESSION: FacilitatorSession = {
  id: "0",
  moduleId: "0",
  title: "Inledning",
  duration: "45 min",
  purpose: "Att introducera utbildningen, skapa trygghet och engagemang, samt hjälpa deltagaren formulera sina mål och förväntningar inför resan som gruppledare. Handledarens roll är att skapa en positiv start och en känsla av riktning.",
  sections: [
    {
      title: "1. Välkomna och skapa förväntан",
      questions: [
        "Hur känns det att påbörja den här utbildningen?",
        "Vad hoppas du få ut av den?",
        "Vad tror du blir mest spännande – och kanske mest utmanande?"
      ],
      tip: "Betona att utbildningen bygger på reflektion och praktisk tillämpning – inte på 'rätt svar', utan på att hitta sitt eget ledarskap."
    },
    {
      title: "2. Utforska nuläget och förväntningarna",
      questions: [
        "Hur ser din roll ut just nu? Vilket ansvar har du?",
        "Vad tycker du fungerar bra i ditt ledarskap eller samarbete idag?",
        "Finns det något du vill bli bättre på – i ditt sätt att kommunicera, planera eller stötta andra?",
        "Hur vill du att ditt team ska beskriva dig som ledare om ett år?"
      ],
      tip: "Fokusera på nyfikenhet snarare än utvärdering. Det viktiga är att deltagaren börjar tänka kring sin egen utveckling."
    },
    {
      title: "3. Gå igenom utbildningens upplägg",
      questions: [
        "Hur planerar du att lägga upp din tid för utbildningen?",
        "Vilken del av upplägget – presentation, fördjupning, övningar eller verktyg – tror du du kommer använda mest?"
      ],
      tip: "Hjälp deltagaren att planera in tid för utbildningen redan nu. Regelbundenhet ökar effekten – hellre 15 minuter i veckan än att ta allt på en gång."
    },
    {
      title: "4. Formulera personliga mål",
      questions: [
        "Vad vill du utveckla mest i ditt ledarskap?",
        "Vilka situationer vill du känna dig tryggare i?",
        "Vilka resultat hoppas du att utbildningen leder till – för dig och för teamet?"
      ],
      tip: "Skriv gärna ner målen och återkom till dem i slutet av utbildningen. Det blir ett bra underlag för att följa utvecklingen över tid."
    },
    {
      title: "5. Samtala om stöd och ansvar",
      questions: [
        "Hur vill du att jag som handledare ska stötta dig?",
        "Finns det något särskilt du vill ha återkoppling på under programmets gång?",
        "Hur kan du själv se till att ta tillvara på utbildningen på bästa sätt?"
      ],
      tip: "Lyft vikten av att utbildningen blir mest värdefull när deltagaren själv är aktiv – reflekterar, testar nya beteenden och följer upp."
    }
  ],
  summary: {
    title: "Handledarens tre huvuduppgifter i inledningen",
    points: [
      "Skapa engagemang: Få deltagaren att känna nyfikenhet och motivation. Förklara att detta handlar om att växa som ledare – inte bara att lära teori.",
      "Klargöra förväntningar: Hjälp deltagaren sätta ord på vad de vill uppnå. Ett tydligt personligt mål skapar fokus och mening.",
      "Lägga grunden för dialog: Bygg en öppen och tillitsfull relation redan nu, så att du kan följa upp utvecklingen på ett naturligt sätt under resans gång."
    ]
  },
  closing: "Syftet är att deltagaren ska känna sig trygg, inspirerad och redo att ta ansvar för sin egen utveckling."
}

export const FACILITATOR_SESSIONS: FacilitatorSession[] = [
  {
    id: "1",
    moduleId: "1",
    title: "Modul 1 — Från kollega till gruppledare",
    duration: "45 min",
    purpose: "Att hjälpa deltagaren reflektera över sin nya roll som gruppledare – hur den skiljer sig från tidigare erfarenheter, vilka styrkor som finns att bygga vidare på och vilka utmaningar som behöver hanteras tidigt i ledarskapet.",
    sections: [
      {
        title: "1. Skapa trygghet och öppna samtalet",
        questions: [
          "Hur upplevde du första modulen?",
          "Vad väckte mest tankar eller igenkänning?",
          "Hur kändes det att börja se dig själv som ledare, snarare än kollega?"
        ],
        tip: "Bekräfta att det är normalt att känna både nyfikenhet och osäkerhet i början. Rollförändringen tar tid att landa i."
      },
      {
        title: "2. Utforska rollförändringen",
        questions: [
          "Vilka skillnader märker du redan nu mellan din tidigare roll och din nuvarande?",
          "Hur påverkar förändringen relationen till dina tidigare kollegor?",
          "Vad känns mest utmanande med att ha fått ett formellt ledaransvar?",
          "Hur kan du tydliggöra din nya roll för teamet utan att det skapar avstånd?"
        ],
        tip: "Hjälp deltagaren att formulera vad 'att vara ledare' betyder för just dem. En personlig definition gör det lättare att agera konsekvent framåt."
      },
      {
        title: "3. Identifiera styrkor och utvecklingsområden",
        questions: [
          "Vilka egenskaper tror du hjälper dig mest i rollen som gruppledare?",
          "Finns det något du gjort tidigare som du vill göra mer av nu när du leder andra?",
          "Vilka nya färdigheter vill du börja träna på?"
        ],
        tip: "Betona vikten av att bygga på det som redan fungerar. Förändring handlar ofta mer om att justera än att byta ut."
      },
      {
        title: "4. Reflektera kring förtroende och förebildsrollen",
        questions: [
          "Vad betyder förtroende för dig i din ledarroll?",
          "Hur kan du aktivt bygga förtroende hos ditt team?",
          "Vad innebär det för dig att vara en förebild i vardagen?",
          "Vilka beteenden vill du att andra ska förknippa med dig som ledare?"
        ],
        tip: "Uppmuntra till konkreta exempel – tillit skapas i handling, inte i teori."
      },
      {
        title: "5. Utmana med reflekterande perspektiv",
        questions: [
          "Du beskriver att du vill vara en tydlig och rättvis ledare. Hur tror du det märks för teamet i vardagen?",
          "Vilken situation i veckan har fått dig att känna dig mest som ledare?"
        ],
        tip: "Använd reflekterande frågor snarare än råd. Det stärker självinsikten och leder till större ansvarstagande."
      },
      {
        title: "6. Avsluta med ett konkret fokus framåt",
        questions: [
          "Vilket konkret beteende vill du arbeta med till nästa modul?",
          "Vad är det första lilla steget du kan ta redan den här veckan?"
        ],
        tip: "Hjälp deltagaren att välja ett område i taget – det ökar chansen att förändringen faktiskt sker."
      }
    ],
    summary: {
      title: "Fyra fokusområden för handledaren",
      points: [
        "Trygghet i rollen: Hjälp deltagaren att se att osäkerhet är naturligt – rollen växer fram över tid.",
        "Självinsikt: Uppmuntra reflektion över hur de egna beteendena påverkar teamet.",
        "Förtroende: Lyft vikten av att vara konsekvent, omtänksam och tydlig – tillit byggs i små steg.",
        "Utvecklingsmål: Avsluta alltid med att formulera ett konkret nästa steg som kan följas upp."
      ]
    },
    closing: "Syftet är inte att utvärdera prestation, utan att stötta utveckling. Ledarskap formas i reflektion, dialog och erfarenhet."
  },
  {
    id: "2",
    moduleId: "2",
    title: "Modul 2 — Kommunikation och förtroende i teamet",
    duration: "45 min",
    purpose: "Att hjälpa deltagaren reflektera över sitt sätt att kommunicera som ledare, identifiera styrkor och utvecklingsområden, samt översätta lärdomarna till praktiskt beteende i vardagen.",
    sections: [
      {
        title: "1. Starta med öppen reflektion",
        questions: [
          "Vad fastnade du mest för i modulen?",
          "Kände du igen dig i några av exemplen eller utmaningarna?",
          "Hur har du tänkt kring din egen kommunikation efter att du gått igenom materialet?"
        ],
        tip: "Att skapa trygghet och uppmuntra till ärlig självreflektion."
      },
      {
        title: "2. Utforska kommunikationsstil och självbild",
        questions: [
          "Hur skulle du beskriva din kommunikationsstil i några ord?",
          "Tror du att ditt team skulle beskriva dig på samma sätt?",
          "Vilka situationer tycker du är lättast respektive svårast att kommunicera i?",
          "Vad tror du gör att kommunikationen fungerar bra när den gör det?"
        ],
        tip: "Be deltagaren ge ett konkret exempel från sin vardag, t.ex. ett lyckat möte eller ett samtal som gick snett, och utforska vad som påverkade utfallet."
      },
      {
        title: "3. Fördjupa i nyckelområden: lyssna, vara tydlig, bygga förtroende",
        questions: [
          "Hur arbetar du med aktivt lyssnande idag? Hur märker ditt team att du verkligen lyssnar?",
          "Hur säkerställer du att andra förstår vad som sagts?",
          "Vilka konkreta beteenden hos dig påverkar förtroendet mest – positivt eller negativt?"
        ],
        tip: "Stanna vid konkreta exempel. Det är ofta i detaljerna man hittar beteenden som går att förändra."
      },
      {
        title: "4. Identifiera vardagsbeteenden som bygger förtroende",
        questions: [
          "Vad betyder förtroende för dig i ditt ledarskap?",
          "Hur kan du visa omtanke i vardagen utan att det tar mycket tid?",
          "Vilka små saker – att följa upp, tacka, fråga hur någon mår – gör du regelbundet?"
        ],
        tip: "Diskutera hur små beteenden kan ha stor effekt över tid."
      },
      {
        title: "5. Sammanfatta och sätt ett konkret utvecklingsmål",
        questions: [
          "Vilket konkret kommunikationsbeteende vill du träna på till nästa gång?",
          "Hur vill du följa upp om du faktiskt tränat på det?"
        ],
        tip: "Hjälp deltagaren att formulera målet som ett beteende, inte som en allmän intention."
      }
    ],
    summary: {
      title: "Fyra fokusområden för handledaren",
      points: [
        "Lyssnande: Uppmuntra dem att vara mer närvarande och nyfikna – ställa följdfrågor, låta tystnad få plats och lyssna klart innan de svarar.",
        "Tydlighet: Hjälp dem hitta konkreta formuleringar: 'För att vara säker på att vi tänker lika – kan du sammanfatta hur du uppfattar det här?'",
        "Förtroende: Lyft fram att förtroende byggs i de små detaljerna – hålla löften, följa upp och visa respekt i vardagen.",
        "Utvecklingsmål: Målet ska vara något som går att observera, inte en allmän intention."
      ]
    },
    closing: "Gör gärna en kort avstämning efter 2–3 veckor. Fråga: 'Hur gick det med det du ville testa?'"
  },
  {
    id: "3",
    moduleId: "3",
    title: "Modul 3 — Att sätta mål och följa upp",
    duration: "45 min",
    purpose: "Att hjälpa deltagaren reflektera över sitt sätt att arbeta med mål och uppföljning, och stärka förmågan att skapa tydlighet, delaktighet och lärande i teamets målarbete.",
    sections: [
      {
        title: "1. Starta med reflektion",
        questions: [
          "Vad tog du med dig från den här modulen?",
          "Har du fått några nya tankar kring hur du arbetar med mål idag?",
          "Känner du igen några av de utmaningar som beskrivs i materialet?"
        ],
        tip: "Håll samtalet öppet och icke-värderande. Syftet är att få deltagaren att börja tänka på sina egna erfarenheter."
      },
      {
        title: "2. Utforska hur mål sätts idag",
        questions: [
          "Hur brukar du sätta mål i ditt team?",
          "Får medarbetarna vara delaktiga i processen?",
          "Vilka mål upplever du fungerar bäst – och varför?",
          "Finns det mål som känns otydliga eller svåra att följa upp?"
        ],
        tip: "Hjälp deltagaren att se skillnaden mellan mål som är formulerade uppifrån och mål som är förankrade i teamets vardag."
      },
      {
        title: "3. Diskutera SMART-modellen i praktiken",
        questions: [
          "Vilken del av SMART tycker du är lättast att tillämpa?",
          "Vilken del är svårast, och varför?",
          "Har du exempel på mål som inte uppfyller SMART-kriterierna? Hur kan de förbättras?"
        ],
        tip: "Använd ett konkret exempel från deltagarens vardag. Det gör reflektionen praktisk och användbar."
      },
      {
        title: "4. Från mål till handling",
        questions: [
          "Hur omsätter du mål till konkreta aktiviteter i teamet?",
          "Hur ofta pratar ni om målen i det dagliga arbetet?",
          "Hur ser du till att alla förstår hur deras arbete bidrar till helheten?",
          "Hur hanterar du om någon inte delar din bild av prioriteringarna?"
        ],
        tip: "Lyft vikten av att målen inte bara ska mätas – de ska märkas. Det handlar om att skapa mening, inte bara siffror."
      },
      {
        title: "5. Uppföljning som lärande",
        questions: [
          "Hur brukar du följa upp mål – formellt eller mer informellt?",
          "Vilken typ av uppföljning upplevs mest motiverande i ditt team?",
          "Vad brukar hända när ni når ett mål – firas det, analyseras det eller glöms det bort?",
          "Hur kan du göra uppföljningen mer lärande än kontrollerande?"
        ],
        tip: "Uppmuntra deltagaren att skapa en rutin för korta, återkommande reflektioner: 'Vad gick bra? Vad lärde vi oss? Vad gör vi annorlunda nästa gång?'"
      },
      {
        title: "6. Avsluta med utvecklingsfokus",
        questions: [
          "Vilket konkret beteende vill du utveckla kring målarbetet?",
          "Hur ska du följa upp om du faktiskt gjort det?"
        ],
        tip: "Hjälp deltagaren att välja ett litet men konkret steg som går att följa upp i nästa samtal."
      }
    ],
    summary: {
      title: "Handledarens fokus i modul 3",
      points: [
        "Skapa förståelse för varför mål behövs – som riktning och mening, inte bara som krav.",
        "Hjälpa deltagaren formulera mål som är realistiska, engagerande och begripliga.",
        "Förankra vikten av regelbunden uppföljning och lärande.",
        "Uppmuntra ett klimat där mål inte känns som kontroll, utan som en gemensam väg framåt."
      ]
    },
    closing: "Genom att prata om hur målen kommuniceras och hur uppföljning sker, hjälper du deltagaren bygga ett mer levande och utvecklande ledarskap."
  },
  {
    id: "4",
    moduleId: "4",
    title: "Modul 4 — Konflikthantering och svåra samtal",
    duration: "45 min",
    purpose: "Att stödja deltagaren i att reflektera över sitt sätt att hantera konflikter och svåra samtal, identifiera egna mönster och stärka tryggheten i att agera tidigt, lyssna aktivt och skapa lösningar som bygger förtroende.",
    sections: [
      {
        title: "1. Inled med trygghet och öppenhet",
        questions: [
          "Hur kändes det att arbeta med den här modulen?",
          "Vilka tankar väckte den hos dig?",
          "Har du haft någon situation nyligen där du behövt ta ett svårt samtal?"
        ],
        tip: "Bekräfta att konflikter inte är ett tecken på svaghet – utan på att människor bryr sig och vill påverka."
      },
      {
        title: "2. Utforska deltagarens syn på konflikter",
        questions: [
          "Hur brukar du reagera när du märker att det finns spänningar i teamet?",
          "Vilka situationer upplever du som mest obekväma?",
          "Vad tror du gör att vissa konflikter känns svårare än andra?"
        ],
        tip: "Hjälp deltagaren att identifiera sitt eget mönster – drar de sig undan, försöker de lösa för snabbt eller går de in för hårt? Självinsikt är första steget till förändring."
      },
      {
        title: "3. Gå igenom erfarenheter från svåra samtal",
        questions: [
          "Kan du beskriva ett samtal som kändes svårt men ändå gick bra? Vad gjorde du som fungerade?",
          "Finns det ett samtal du undvikit? Vad höll dig tillbaka?",
          "Hur reagerar du när den andra personen blir känslosam eller defensiv?"
        ],
        tip: "Fokusera på lärandet, inte på om samtalet 'lyckades' eller inte. Varje erfarenhet är värdefull."
      },
      {
        title: "4. Fördjupa samtalet om ledarens roll i konflikter",
        questions: [
          "Hur tydlig är du med att ta ansvar när en konflikt uppstår?",
          "Hur visar du att du står kvar även när det blir obekvämt?",
          "Vad betyder det för dig att vara 'neutral men engagerad'?"
        ],
        tip: "Lyft vikten av att se och agera tidigt, innan konflikten blir personlig. Det skapar trygghet i teamet."
      },
      {
        title: "5. Diskutera känslor och trygghet",
        questions: [
          "Hur påverkas du själv av starka känslor i samtal?",
          "Vad brukar hjälpa dig att behålla lugnet?",
          "Hur kan du visa empati utan att ta över situationen?"
        ],
        tip: "Påminn om att trygghet smittar. En lugn ledare skapar lugna samtal."
      },
      {
        title: "6. Samtala om uppföljning och lärande",
        questions: [
          "Hur brukar du avsluta svåra samtal?",
          "Hur säkerställer du att det som sagts faktiskt leder till förändring?",
          "Hur visar du uppskattning för att någon vågat prata öppet?"
        ],
        tip: "Uppmuntra deltagaren att alltid boka en återkoppling – det signalerar både respekt och ansvarstagande."
      },
      {
        title: "7. Sammanfatta och sätt utvecklingsfokus",
        questions: [
          "Vilket konkret fokusområde vill du träna på?",
          "Formulera det som ett beteende: 'Jag ska...' snarare än 'Jag vill bli bättre på...'"
        ],
        tip: "Exempel: 'Jag ska ge feedback snabbare' är bättre än 'Jag ska bli bättre på konflikthantering.'"
      }
    ],
    summary: {
      title: "Handledarens fokus i modul 4",
      points: [
        "Normalisera konflikter – visa att de är en naturlig del av ledarskapet.",
        "Utforska hur deltagaren reagerar och vad som triggar obehag.",
        "Stärka förmågan att lyssna, ställa öppna frågor och stå kvar i samtal som känns svåra.",
        "Förankra vikten av uppföljning – att ett samtal inte är en avslutning, utan början på en förändring."
      ]
    },
    closing: "Ledarskap handlar inte om att undvika svåra ämnen – det handlar om att kunna prata om dem på ett sätt som skapar förståelse, respekt och lärande."
  },
  {
    id: "5",
    moduleId: "5",
    title: "Modul 5 — Ledarskap i vardagen",
    duration: "45 min",
    purpose: "Att hjälpa deltagaren reflektera över hur ledarskapet tar form i vardagen – i små handlingar, i planering, i kommunikation och i hur energi och balans skapas över tid.",
    sections: [
      {
        title: "1. Skapa närvaro och trygghet i samtalet",
        questions: [
          "Hur upplevde du innehållet i den här modulen?",
          "Var det något som kändes särskilt relevant för dig just nu?",
          "Hur skulle du beskriva din vardag som ledare – i tre ord?"
        ],
        tip: "Bekräfta att vardagsledarskap är komplext. Många upplever att de 'inte hinner leda' – normalisera den känslan innan ni börjar analysera."
      },
      {
        title: "2. Utforska ledarskapets vardag",
        questions: [
          "Vilka återkommande situationer påverkar din ledarroll mest?",
          "Vilka beteenden hos dig märks mest i teamets vardag?",
          "Vad tror du ditt team skulle säga att du står för, utifrån hur du agerar dag till dag?"
        ],
        tip: "Hjälp deltagaren se hur 'små saker' – tonfall, tillgänglighet, uppföljning – formar kultur och tillit över tid."
      },
      {
        title: "3. Struktur och planering",
        questions: [
          "Hur planerar du dina dagar? Finns det utrymme för reflektion och samtal?",
          "Vilka rutiner fungerar bra idag – och vilka saknas?",
          "Hur tydligt upplever ditt team att prioriteringarna är?"
        ],
        tip: "Lyft vikten av att planera för människor, inte bara uppgifter. Tiden för samtal och feedback behöver vara inbokad – annars blir den inte av."
      },
      {
        title: "4. Närvaro och kommunikation",
        questions: [
          "När känner du dig som mest närvarande i ditt ledarskap?",
          "Vilka situationer riskerar att göra dig frånvarande – även om du är fysiskt på plats?",
          "Hur visar du att du uppskattar dina medarbetares insatser?"
        ],
        tip: "Påminn om att närvaro inte handlar om tid – det handlar om uppmärksamhet. Två minuter av genuint lyssnande kan förändra ett helt samtal."
      },
      {
        title: "5. Hållbarhet och egen energi",
        questions: [
          "Hur påverkar vardagen din energi just nu?",
          "Vilka situationer tar mest kraft – och vilka ger energi?",
          "Hur ofta tar du pauser eller delegerar ansvar?",
          "Vad händer i teamet när du är stressad eller trött?"
        ],
        tip: "Lyft att hållbart ledarskap inte är själviskt – det är en förutsättning för att kunna leda andra långsiktigt."
      },
      {
        title: "6. Vardagskultur och vanor",
        questions: [
          "Vilka värderingar vill du att ditt ledarskap ska spegla varje dag?",
          "Hur visar du dessa värderingar i handling?",
          "Vilka vanor hos dig skapar den kultur du vill ha – och vilka kan du behöva förändra?",
          "Hur kan du bli mer konsekvent i ditt sätt att ge återkoppling eller uppskattning?"
        ],
        tip: "Kultur byggs inte av ord, utan av hur du reagerar, prioriterar och agerar i vardagen."
      },
      {
        title: "7. Sammanfatta och skapa utvecklingsfokus",
        questions: [
          "Vilken konkret vana vill du skapa i ditt ledarskap?",
          "Hur ska du påminna dig själv om det?"
        ],
        tip: "Hjälp deltagaren välja en enkel vana som känns genomförbar och meningsfull."
      }
    ],
    summary: {
      title: "Handledarens fokus i modul 5",
      points: [
        "Hjälp deltagaren se sambandet mellan beteende och kultur – små handlingar formar teamets upplevelse.",
        "Utforska balansen mellan operativt arbete och ledarskap – var finns utrymmet?",
        "Stärka medvetenheten om hur ledarskapet tar form i vardagen.",
        "Formulera vanor som gör ledarskapet hållbart och konsekvent."
      ]
    },
    closing: "Uppmuntra att den nya vanan följs upp i nästa handledningssamtal."
  },
  {
    id: "6",
    moduleId: "6",
    title: "Modul 6 — Personlig utvecklingsplan",
    duration: "45 min",
    purpose: "Att stödja deltagaren i att reflektera över sin ledarresa, identifiera styrkor och utvecklingsområden, samt formulera en personlig och realistisk utvecklingsplan. Den här dialogen ska inte kännas som en utvärdering, utan som ett inspirerande avslutningssamtal som ger energi, klarhet och motivation.",
    sections: [
      {
        title: "1. Skapa en positiv start – blicka bakåt med stolthet",
        questions: [
          "Hur känns det att vara vid slutet av programmet?",
          "Vad har varit mest värdefullt för dig under utbildningen?",
          "Vilken modul har påverkat dig mest – och varför?",
          "Vad känner du att du gör annorlunda idag jämfört med när du började?"
        ],
        tip: "Hjälp deltagaren se att utveckling handlar om process, inte perfektion. Lyft fram små förändringar som gjort skillnad i deras vardag."
      },
      {
        title: "2. Utforska styrkor och lärdomar",
        questions: [
          "Vilka styrkor i ditt ledarskap har blivit tydligare för dig under programmet?",
          "När känner du att du fungerar som bäst som ledare?",
          "Hur märks dina styrkor i teamet eller i resultaten?"
        ],
        tip: "Sätt ord på framgångar. Många ledare underskattar sina styrkor – hjälp dem att se sitt värde och använda sina styrkor medvetet."
      },
      {
        title: "3. Identifiera utvecklingsområden och önskad förändring",
        questions: [
          "Vilka situationer vill du hantera bättre i framtiden?",
          "Vilka beteenden vill du utveckla eller förändra?",
          "Finns det något som hindrar dig i ditt ledarskap idag?",
          "Vad skulle göra störst skillnad för dig och ditt team om du förbättrade det?"
        ],
        tip: "Lyft fram utvecklingsområden som möjligheter snarare än 'problem'. Utgå från vad deltagaren vill utveckla – inte vad de 'borde' göra."
      },
      {
        title: "4. Formulera mål och plan",
        questions: [
          "Vilka tre fokusområden vill du prioritera framöver?",
          "Hur kan du mäta framsteg inom varje område?",
          "Hur kan du göra planen realistisk och genomförbar i vardagen?",
          "Vilken första liten förändring kan du göra redan den här veckan?"
        ],
        tip: "Håll planen enkel. Tre tydliga mål är bättre än många diffusa. Uppmuntra att skriva ner planen – konkretisering ökar motivationen."
      },
      {
        title: "5. Skapa hållbara vanor",
        questions: [
          "Vilka vanor vill du skapa för att hålla din utveckling vid liv?",
          "Hur kan du påminna dig själv om dina mål?",
          "Hur vill du följa upp – dagligen, veckovis eller månadsvis?",
          "Vilka små signaler i vardagen visar att du är på rätt väg?"
        ],
        tip: "Fokusera på små steg med stor effekt. Det viktigaste är inte tempot, utan riktningen."
      },
      {
        title: "6. Bygg stöd och ansvar",
        questions: [
          "Vem kan du dela din plan med?",
          "Vem kan ge dig ärlig feedback?",
          "Hur vill du följa upp – tillsammans eller på egen hand?",
          "Hur kan jag som handledare fortsätta stötta dig framåt?"
        ],
        tip: "Om deltagaren vill – boka ett kort återkopplingssamtal om tre månader. Det skapar ansvar och visar att utveckling är något långsiktigt."
      },
      {
        title: "7. Avsluta med framtidstro och uppskattning",
        questions: [
          "Vad tar du med dig som känns viktigast framöver?",
          "Vad vill du att andra ska märka hos dig om tre månader?",
          "Vilken mening skulle sammanfatta din utvecklingsresa?"
        ],
        tip: "Bekräfta resan. Att fullfölja ett utvecklingsprogram är en prestation i sig – och en startpunkt för fortsatt lärande."
      }
    ],
    summary: {
      title: "Handledarens fokus i modul 6",
      points: [
        "Hjälp deltagaren se sitt framsteg – bekräfta konkreta förändringar du observerat.",
        "Sätta riktning framåt med en realistisk och konkret plan.",
        "Knyta ihop utbildningen med vardagen – vad händer nu?",
        "Fira genomförandet. Det är en prestation att fullfölja programmet."
      ]
    },
    closing: "Boka gärna ett uppföljningssamtal om 3 månader redan nu – det skapar ansvar och visar att resan fortsätter."
  }
]