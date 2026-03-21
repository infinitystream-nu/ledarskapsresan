export type Lesson = {
  id: string
  type: 'fordupning' | 'ovningar'
  title: string
  content: string
}

export type Module = {
  id: string
  number: number
  title: string
  theme: string
  description: string
  lessons: Lesson[]
}

export const MODULES: Module[] = [
  {
    id: '1',
    number: 1,
    title: 'Från kollega till ledare',
    theme: 'Rollförändringen',
    description: 'Steget från medarbetare till ledare är en av de största förändringarna i yrkeslivet. Fokus skiftar från din prestation till teamets prestation.',
    lessons: [
      {
        id: 'fordupning',
        type: 'fordupning',
        title: 'Fördjupning',
        content: `## 1. Att ta steget till ledarskap

Att bli gruppledare är ett av de största stegen du tar i yrkeslivet. Från att vara en del av teamet blir du nu den som leder det – någon som ska skapa förutsättningar, tydlighet och riktning för andra.

För många känns det både spännande och lite ovant. Ena dagen är du kollegan, nästa dag förväntas du vara ledare. Du är fortfarande samma person, men rollen förändras. Du har nu ansvar för att teamet fungerar, utvecklas och levererar resultat tillsammans.

Det här är inte bara en ny titel – det är ett skifte i perspektiv.

**Ledarskap handlar inte längre om vad du gör själv, utan om vad du får andra att lyckas med.**

## 2. Rollförändringen – att hitta balansen

Som kollega fokuserade du på dina egna uppgifter och din prestation.

Som gruppledare handlar det om att samordna, coacha och stötta andra. Du ska se helheten, prioritera och skapa struktur.

Men rollen har också en dubbelhet. Du är fortfarande en del av gruppen – du delar vardagen, arbetsuppgifterna och gemenskapen. Samtidigt är du också organisationens representant. Du står mitt emellan medarbetarna och ledningen.

## 3. Från kollega till ledare – tre nyckelskiften

**Skifte 1: Från prestation till möjliggörande**
Din framgång mäts inte längre av vad du gör, utan av vad ditt team åstadkommer.

**Skifte 2: Från uppgift till ansvar**
Du ansvarar nu för helheten – inte bara din del. Det inkluderar resultat, relationer och arbetsmiljö.

**Skifte 3: Från kollega till ledare**
Relationen till dina medarbetare förändras. Du behöver hitta en ny balans mellan närhet och tydlighet.

## 4. Ledarskap som ansvar – inte position

Ledarskap handlar inte om titel utan om att:
- Ta ansvar för helheten
- Skapa riktning och tydlighet
- Bära konsekvenser av beslut
- Skapa förutsättningar för andra att lyckas

## 5. Din första tid som ledare

De första veckorna och månaderna är avgörande. Använd verktygen i den här modulen för att skapa en trygg start – för dig och för ditt team.

Verktyg i denna modul: **Starta i ny roll**, **Förväntansdialog**, **30-dagarsplan**`
      },
      {
        id: 'ovningar',
        type: 'ovningar',
        title: 'Övningar',
        content: '',
        questions: [
          { part: 'Del 1 – Rollen som ledare', questions: [
            'Beskriv med egna ord vad du tror är den största skillnaden mellan att vara kollega och att vara gruppledare.',
            'Vad tror du blir din största styrka i rollen som gruppledare?',
            'Vilken del av ledarskapet tror du kommer att vara mest utmanande för dig?',
            'Hur vill du att ditt team ska uppleva dig i din nya roll?',
          ], reflection: 'Hur kan du bygga trygghet i rollen utan att tappa den naturliga relation du har med kollegorna?' },
          { part: 'Del 2 – Erfarenheter från samarbete', questions: [
            'Tänk tillbaka på ett sammanhang där samarbetet fungerade riktigt bra. Vad var det som gjorde att det fungerade?',
            'Beskriv ett tillfälle där samarbetet inte fungerade som du önskat. Vad saknades?',
            'Vad kan du ta med dig av dessa erfarenheter till ditt nuvarande team?',
            'Om du fick ge ett råd till dig själv utifrån de här erfarenheterna – vilket skulle det vara?',
          ], reflection: 'Hur kan du som ledare bidra till ett arbetsklimat där alla känner sig delaktiga och lyssnade på?' },
          { part: 'Del 3 – Min första plan', questions: [
            'Vilken typ av ledare vill du vara i vardagen?',
            'Beskriv tre konkreta beteenden du vill börja med direkt i din nya roll.',
            'Hur vill du följa upp dig själv på dessa beteenden?',
          ], reflection: 'Hur kan du använda dina första månader som gruppledare för att skapa vanor och arbetssätt som blir hållbara över tid?' },
        ]
      }
    ]
  },
  {
    id: '2',
    number: 2,
    title: 'Kommunikation och förtroende',
    theme: 'Coaching & feedback',
    description: 'Grunden för allt ledarskap är kommunikation. Att ställa rätt frågor, lyssna aktivt och ge feedback som leder framåt.',
    lessons: [
      {
        id: 'fordupning',
        type: 'fordupning',
        title: 'Fördjupning',
        content: `## 1. Varför kommunikation är ledarens viktigaste verktyg

Ett samtal består av ren kommunikation mellan två eller flera individer där du har ett budskap att framföra. Vårt sätt att ställa frågor, hur vi lyssnar, vilket kroppsspråk vi har är avgörande för samtalets slutresultat.

**Öppna frågor + Aktivt lyssnande = Effektiv kommunikation**

## 2. ToGROW – ett coachingsverktyg

ToGROW är ett verktyg som hjälper dig att göra ditt coachande samtal tydligt och metodiskt. Utgångsläget är din bedömning av att den coachade har kompetensen och svaren själv.

- **T – Topic**: Vad vill vi prata om?
- **G – Goal**: Vad vill du uppnå med samtalet?
- **R – Reality**: Hur ser det ut idag?
- **O – Options**: Vilka möjligheter finns?
- **W – Will/Way forward**: Vad gör du konkret?

## 3. Feedback-trappan

Feedback är att återkoppla på ett uppvisat beteende, prestation eller arbetsutförande. Mottagaren går igenom fem steg:

**Förkasta → Försvara → Förklara → Förstå → Förändra**

Grunden för ett lyckat feedbacksamtal är att du vet vad du vill uppnå, har tillräckligt med underlag och är förberedd på hur du ska formulera din feedback. Samtalet ska avslutas med en gemensam syn på vad som ska hända.

## 4. Jag-budskap

Jag-budskap är den allra enklaste formen av återkoppling och kan användas för att förstärka, utveckla eller avbryta ett beteende.

Exempel: *"När du kom försent till mötet upplevde jag att vi tappade fokus i gruppen."*

## 5. Forum för ledning

Säkerställ din grundstruktur – dina forum för ledarskap:

1. Daglig planering och uppföljning
2. Långsiktig planering och uppföljning
3. Samordning med angränsande ansvarsområden
4. Verksamhetsuppföljning (proaktivt)
5. Egen ostörd tid

Dina forum ska leda till att dina medarbetare systematiskt, regelbundet och frekvent får sitt uppdrag, sina mål och sin roll tydliggjort samt återkoppling på vad de gjort bra och vad de kan utveckla.`
      },
      {
        id: 'ovningar',
        type: 'ovningar',
        title: 'Övningar',
        content: '',
      }
    ]
  },
  {
    id: '3',
    number: 3,
    title: 'Att sätta mål och följa upp',
    theme: 'Tydlighet skapar motivation',
    description: 'Tydliga mål är inte ett kontrollinstrument — de är en förutsättning för att medarbetare ska kunna lyckas.',
    lessons: [
      { id: 'fordupning', type: 'fordupning', title: 'Fördjupning', content: `## 1. Varför mål är viktiga

Mål är en av ledarskapets viktigaste byggstenar. De ger riktning, skapar mening och hjälper människor att förstå hur deras arbete bidrar till något större.

Utan mål blir arbetet lätt fragmenterat. Teamet gör mycket, men ingen vet riktigt vad som är viktigast eller hur framgång egentligen mäts.

Ett bra mål fungerar som ett ankare. Det håller teamet stadigt när vardagen blir stressig och påminner alla om vart ni är på väg.

## 2. SMART-modellen

- **S – Specifikt**: Vad exakt ska göras?
- **M – Mätbart**: Hur vet vi att det är uppnått?
- **A – Accepterat**: Är vi överens och engagerade?
- **R – Realistiskt**: Är det rimligt med våra resurser?
- **T – Tidsatt**: När ska det vara klart?

**Exempel:** Istället för *"Vi ska bli bättre på kundservice"* → *"Vi ska öka kundnöjdheten från 82% till 90% före årets slut genom att följa upp alla kundärenden inom 24 timmar."*

## 3. Uppföljning – där lärandet sker

Ett mål utan uppföljning tappar snabbt sin kraft. Uppföljning är inte bara kontroll – det är en chans till lärande.

Regelbundenhet är viktigare än perfektion. Korta, frekventa avstämningar skapar rörelse och dialog. Det är bättre med fem minuter varje vecka än en halvtimmesrapport en gång i månaden.

**Avsluta varje möte med frågan "Vad tar vi med oss?"** – det hjälper gruppen att ständigt reflektera och förbättra.

## 4. Ledarens roll i målprocessen

Din roll är att:
1. Skapa riktning – förklara varför målen finns
2. Skapa förståelse – säkerställ att varje person vet vad målet betyder för just dem
3. Skapa engagemang – lyft fram framsteg och uppmuntra lärande` },
      { id: 'ovningar', type: 'ovningar', title: 'Övningar', content: '' }
    ]
  },
  {
    id: '4',
    number: 4,
    title: 'Konflikthantering och svåra samtal',
    theme: 'Mod att ta tag i det som skaver',
    description: 'Konflikter är oundvikliga — och ofta ett tecken på engagemang. Den ledare som hanterar dem rätt bygger tillit.',
    lessons: [
      { id: 'fordupning', type: 'fordupning', title: 'Fördjupning', content: `## 1. Varför konflikter uppstår

Där människor arbetar tillsammans uppstår skillnader – i synsätt, behov, prioriteringar och värderingar. En konflikt kan uppstå när kommunikationen brister, när någon känner sig orättvist behandlad, eller när olika mål krockar.

**Det är inte samtalet som är problemet – det är ofta frånvaron av det.**

## 2. Fyra typer av konflikter

- **Mål-/intressekonflikt**: Vi kan diskutera och förstå varandras ståndpunkter – men är likafullt oeniga
- **Rollkonflikt**: Uppgifter utförs inte, eller så sker de i sista minuten under protester
- **Maktkonflikt**: Personlig prestige står i fokus
- **Värderingskonflikt**: Det finns ingen vilja att modifiera sin position

## 3. 4-stegsmodellen för svåra samtal

**Steg 1 – Förberedelse**: Klargör för dig själv vad problemet är konkret. Vad vill du uppnå? Separera beteende från person.

**Steg 2 – Beskriv situationen**: Beskriv konkreta observationer. Undvik tolkningar. Använd jag-budskap. *"Jag vill ta upp något jag har lagt märke till…"*

**Steg 3 – Lyssna och utforska**: Ställ öppna frågor. Lyssna aktivt. Bekräfta det du hör. Du behöver inte hålla med – men du behöver förstå.

**Steg 4 – Gemensam lösning**: Sammanfatta gemensam bild. Enas om konkret förändring. Bestäm uppföljning.

## 4. Tidiga signaler att vara uppmärksam på

- Personer drar sig undan, kortare eller kyligare ton
- Samma frågor återkommer utan att lösas
- Tystnad i möten, prat i korridorer istället för dialog
- Sänkta leveranser, mer misstag än vanligt` },
      { id: 'ovningar', type: 'ovningar', title: 'Övningar', content: '' }
    ]
  },
  {
    id: '5',
    number: 5,
    title: 'Ledarskap i vardagen',
    theme: 'Struktur som frigör',
    description: 'Det är inte de stora besluten som avgör om du är en bra ledare — det är vad du gör varje dag.',
    lessons: [
      { id: 'fordupning', type: 'fordupning', title: 'Fördjupning', content: `## 1. Dagligt ledarskap

Ledarskap sker i vardagen – i de korta samtalen, i hur du hanterar oväntade situationer, i din närvaro och tillgänglighet. Det är summan av dina dagliga handlingar som skapar kultur och resultat.

## 2. Hållbart ledarskap börjar med hur du använder din tid

Som ledare påverkar din energi hur du kommunicerar, hur närvarande du är, och hur teamet upplever dig. Din energi smittar – både positivt och negativt.

**Prioriteringsrutinen – viktigt vs bråttom:**
- Viktigt & bråttom → Gör direkt
- Viktigt men inte bråttom → Planera in – högsta prioritet
- Bråttom men inte viktigt → Delegera
- Varken viktigt eller bråttom → Ta bort

## 3. 30-minutersstrukturen – veckoplanering

En kort, återkommande veckorutin:

**Steg 1 – Blicka bakåt (10 min)**: Vad fungerade bra? Vad tog mer energi än planerat?

**Steg 2 – Prioritera framåt (10 min)**: Välj max 3 viktigaste fokusområden. Vad är viktigt – inte bara brådskande?

**Steg 3 – Skapa utrymme (10 min)**: Blockera tid i kalendern för ledarskap, fokusarbete och återhämtning.

## 4. 5-minutersreflektionen

En enkel vana i slutet av dagen eller veckan:
1. Vad fungerade bra?
2. Vad var utmanande?
3. Vad vill jag göra annorlunda nästa gång?` },
      { id: 'ovningar', type: 'ovningar', title: 'Övningar', content: '' }
    ]
  },
  {
    id: '6',
    number: 6,
    title: 'Personlig utvecklingsplan',
    theme: 'Nästa steg som ledare',
    description: 'Sista modulen knyter ihop allt — inte som ett avslut, utan som en start på nästa kapitel.',
    lessons: [
      { id: 'fordupning', type: 'fordupning', title: 'Fördjupning', content: `## 1. Ledarskap som livslångt lärande

Utveckling sker inte i en rak linje. Den går i steg, ibland framåt, ibland åt sidan – men alltid framåt så länge du reflekterar och fortsätter välja medvetet.

**Ledarskap är inte att bli klar – det är att vara i ständig rörelse.**

## 2. Vad gör ett ledarskap hållbart?

- Handling väger tyngre än ord
- Att vara konsekvent i svåra situationer
- Att fortsätta utvecklas – ensam och med stöd
- Integritet: samma principer gäller över tid

## 3. Din personliga utvecklingsplan

En bra plan innehåller:
- **Styrkor**: Vad fungerar bra i mitt ledarskap just nu?
- **Fokusområden**: Max tre saker att utveckla
- **Mål**: Formulera med SMART-modellen
- **Vanor**: Vilka små dagliga vanor stöttar min utveckling?
- **Nätverk**: Vem kan stötta mig? En person som inspirerar, en som utmanar, en att reflektera med regelbundet

## 4. Nästa nivå

Du har nu genomfört nivå 1 – Gruppledare. Vill du fortsätta till nivå 2 som affärschef – att leda andra ledare – är grunden du byggt här central. Du tar med dig allt du lärt dig och bygger vidare.` },
      { id: 'ovningar', type: 'ovningar', title: 'Övningar', content: '' }
    ]
  }
]