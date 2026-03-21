export type QuestionPart = {
  part: string
  questions: string[]
  reflection: string
}

export type Lesson = {
  id: string
  type: 'fordupning' | 'ovningar'
  title: string
  content: string
  questions?: QuestionPart[]
}

export type Module = {
  id: string
  number: number
  title: string
  theme: string
  description: string
  videoUrl?: string
  lessons: Lesson[]
}

export const MODULES: Module[] = [
  {
    id: '1',
    number: 1,
    title: 'Från kollega till ledare',
    theme: 'Rollförändringen',
    description: 'Steget från medarbetare till ledare är en av de största förändringarna i yrkeslivet. Fokus skiftar från din prestation till teamets prestation.',
    videoUrl: 'https://player.vimeo.com/video/1175805234',
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
          {
            part: 'Del 1 – Rollen som ledare',
            questions: [
              'Beskriv med egna ord vad du tror är den största skillnaden mellan att vara kollega och att vara gruppledare.',
              'Vad tror du blir din största styrka i rollen som gruppledare?',
              'Vilken del av ledarskapet tror du kommer att vara mest utmanande för dig?',
              'Hur vill du att ditt team ska uppleva dig i din nya roll?',
            ],
            reflection: 'Hur kan du bygga trygghet i rollen utan att tappa den naturliga relation du har med kollegorna?'
          },
          {
            part: 'Del 2 – Erfarenheter från samarbete',
            questions: [
              'Tänk tillbaka på ett sammanhang där samarbetet fungerade riktigt bra. Vad var det som gjorde att det fungerade?',
              'Beskriv ett tillfälle där samarbetet inte fungerade som du önskat. Vad saknades i kommunikationen, ledarskapet eller strukturen?',
              'Vad kan du ta med dig av dessa erfarenheter till ditt nuvarande team?',
              'Om du fick ge ett råd till dig själv utifrån de här erfarenheterna – vilket skulle det vara?',
            ],
            reflection: 'Hur kan du som ledare bidra till ett arbetsklimat där alla känner sig delaktiga och lyssnade på?'
          },
          {
            part: 'Del 3 – Att leda utan titel',
            questions: [
              'Beskriv en situation i ditt arbetsliv där du tog ansvar eller ledde andra även utan en formell ledarroll. Vad hände? Hur agerade du? Hur reagerade andra?',
              'Vad lärde du dig om ledarskap av den situationen?',
              'Vilka av dessa erfarenheter vill du använda i din nya roll?',
            ],
            reflection: 'Hur kan du ta med dig ditt naturliga sätt att ta ansvar och påverka, men samtidigt anpassa det till rollen som formell ledare?'
          },
          {
            part: 'Del 4 – Min första plan som gruppledare',
            questions: [
              'Vilken typ av ledare vill du vara i vardagen? (Exempel: stödjande, tydlig, coachande, strukturerad, lyhörd)',
              'Beskriv tre konkreta beteenden du vill börja med direkt i din nya roll.',
              'Hur vill du följa upp dig själv på dessa beteenden?',
            ],
            reflection: 'Hur kan du använda dina första månader som gruppledare för att skapa vanor och arbetssätt som blir hållbara över tid?'
          },
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
    videoUrl: 'https://player.vimeo.com/video/1175805260',
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

Exempel: "När du kom försent till mötet upplevde jag att vi tappade fokus i gruppen."

## 5. Tillitstrappan – fyra steg

Tillit byggs nedifrån och upp. Om ett steg saknas blir nästa instabilt.

- **Steg 1 – Trygghet**: Grunden för all tillit. Var konsekvent och håll vad du lovar.
- **Steg 2 – Öppenhet**: Vi vågar prata om hur det verkligen är. Lyssna utan att försvara dig.
- **Steg 3 – Ansvarstagande**: Vi tar ansvar – individuellt och tillsammans.
- **Steg 4 – Samspel & utveckling**: Vi utvecklas tillsammans. Feedback är naturligt.

## 6. Forum för ledning

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
        questions: [
          {
            part: 'Del 1 – Din kommunikationsstil',
            questions: [
              'Hur skulle du beskriva din kommunikationsstil med några ord? (Exempel: tydlig, spontan, lyssnande, rakt på sak, eftertänksam)',
              'Hur tror du att andra i teamet skulle beskriva din stil?',
              'När tycker du att din kommunikation fungerar som bäst – och varför?',
              'I vilka situationer upplever du att kommunikationen brister?',
            ],
            reflection: 'Vad händer i ditt team när kommunikationen fungerar riktigt bra? Hur märks det i samarbetet och stämningen?'
          },
          {
            part: 'Del 2 – Att lyssna och förstå',
            questions: [
              'Hur visar du att du verkligen lyssnar på någon?',
              'Vilka signaler kan visa att du inte är fullt närvarande i ett samtal?',
              'Tänk på ett samtal där du kände dig riktigt lyssnad på – vad gjorde den andra personen som gjorde skillnad?',
              'Hur kan du själv skapa samma känsla hos andra?',
            ],
            reflection: 'Vad skulle hända om du la lite mer tid på att lyssna än på att svara under nästa möte eller samtal?'
          },
          {
            part: 'Del 3 – Tydlighet och återkoppling',
            questions: [
              'När du ger instruktioner eller information – hur säkerställer du att alla har förstått?',
              'Hur hanterar du situationer där något blivit otydligt eller missförståtts?',
              'Hur ofta ger du feedback till ditt team? Och hur ofta ber du själv om feedback?',
              'Vad kan du göra för att återkoppling ska bli en naturlig del av vardagen, inte bara vid formella tillfällen?',
            ],
            reflection: 'Hur kan du använda tydlighet och återkoppling som ett sätt att skapa trygghet snarare än kontroll?'
          },
          {
            part: 'Del 4 – Bygga förtroende i vardagen',
            questions: [
              'Vilka beteenden hos en ledare skapar förtroende, enligt dig?',
              'Tänk på en ledare du själv haft förtroende för – vad gjorde den personen konkret?',
              'Hur kan du visa omtanke i vardagen utan att det tar mycket tid?',
              'Vilka löften eller åtaganden är viktiga för dig att alltid hålla som ledare?',
            ],
            reflection: 'Vilken liten handling skulle kunna göra störst skillnad för förtroendet i ditt team just nu?'
          },
          {
            part: 'Del 5 – Utmaningar och utveckling',
            questions: [
              'Vilka situationer upplever du som mest utmanande när det gäller kommunikation?',
              'Vad tror du ligger bakom dessa svårigheter – tid, stress, vana, osäkerhet?',
              'Vad kan du göra för att förbättra kommunikationen i just dessa situationer?',
              'Finns det någon i din omgivning du kan be om feedback på din kommunikation?',
            ],
            reflection: 'Hur kan du använda en utmaning i kommunikationen som en möjlighet att växa i ditt ledarskap?'
          },
        ]
      }
    ]
  },
  {
    id: '3',
    number: 3,
    title: 'Att sätta mål och följa upp',
    theme: 'Tydlighet skapar motivation',
    description: 'Tydliga mål är inte ett kontrollinstrument — de är en förutsättning för att medarbetare ska kunna lyckas.',
    videoUrl: 'https://player.vimeo.com/video/1175805279',
    lessons: [
      {
        id: 'fordupning',
        type: 'fordupning',
        title: 'Fördjupning',
        content: `## 1. Varför mål är viktiga

Mål är en av ledarskapets viktigaste byggstenar. De ger riktning, skapar mening och hjälper människor att förstå hur deras arbete bidrar till något större.

Utan mål blir arbetet lätt fragmenterat. Teamet gör mycket, men ingen vet riktigt vad som är viktigast eller hur framgång egentligen mäts.

Ett bra mål fungerar som ett ankare. Det håller teamet stadigt när vardagen blir stressig och påminner alla om vart ni är på väg.

## 2. SMART-modellen

- **S – Specifikt**: Vad exakt ska göras?
- **M – Mätbart**: Hur vet vi att det är uppnått?
- **A – Accepterat**: Är vi överens och engagerade?
- **R – Realistiskt**: Är det rimligt med våra resurser?
- **T – Tidsatt**: När ska det vara klart?

**Exempel:** Istället för "Vi ska bli bättre på kundservice" → "Vi ska öka kundnöjdheten från 82% till 90% före årets slut genom att följa upp alla kundärenden inom 24 timmar."

## 3. Från mål till handling

Mål i sig skapar ingen förändring – det gör handlingen. Din uppgift är att översätta de övergripande målen till vardagliga aktiviteter.

Delaktighet är nyckeln. När människor känner att de får bidra till hur målet nås, växer ansvarstagandet.

## 4. Uppföljning – där lärandet sker

Ett mål utan uppföljning tappar snabbt sin kraft. Uppföljning är inte bara kontroll – det är en chans till lärande.

Regelbundenhet är viktigare än perfektion. Korta, frekventa avstämningar skapar rörelse och dialog. Det är bättre med fem minuter varje vecka än en halvtimmesrapport en gång i månaden.

**Avsluta varje möte med frågan "Vad tar vi med oss?"**

## 5. Ledarens roll i målprocessen

Din roll är att:
1. Skapa riktning – förklara varför målen finns
2. Skapa förståelse – säkerställ att varje person vet vad målet betyder för just dem
3. Skapa engagemang – lyft fram framsteg och uppmuntra lärande`
      },
      {
        id: 'ovningar',
        type: 'ovningar',
        title: 'Övningar',
        content: '',
        questions: [
          {
            part: 'Del 1 – Målens betydelse',
            questions: [
              'Vad betyder tydliga mål för dig i din roll som ledare?',
              'Hur påverkar otydliga mål arbetet och engagemanget i ett team?',
              'Beskriv ett tillfälle när du upplevt att ett tydligt mål gjorde skillnad i resultatet. Vad bidrog mest?',
              'Vad händer i ditt team när målen blir för många eller otydliga?',
            ],
            reflection: 'Hur kan du som ledare hjälpa gruppen att se sambandet mellan vardagliga uppgifter och de större målen?'
          },
          {
            part: 'Del 2 – Formulera mål',
            questions: [
              'Tänk på ett mål i ditt team just nu. Är det Specifikt, Mätbart, Accepterat, Realistiskt och Tidsatt?',
              'Om inte – hur skulle du kunna formulera om det så att det blir tydligare?',
              'Hur säkerställer du att alla i teamet förstår målet på samma sätt?',
              'Hur kan du involvera teamet mer i processen att ta fram eller anpassa målen?',
            ],
            reflection: 'Vad händer med motivationen när människor känner att de fått vara med och påverka vägen mot målet?'
          },
          {
            part: 'Del 3 – Från mål till handling',
            questions: [
              'Hur översätter du övergripande mål till konkreta aktiviteter i vardagen?',
              'Hur gör du för att synliggöra framsteg?',
              'Hur kan du hjälpa teamet att se små delmål på vägen mot det stora?',
              'Vad kan du själv börja göra annorlunda för att hålla målen levande i vardagen?',
            ],
            reflection: 'Hur kan du använda dina möten eller dagliga samtal för att påminna om riktningen, utan att det blir tjatigt?'
          },
          {
            part: 'Del 4 – Uppföljning och lärande',
            questions: [
              'Hur följer du upp mål idag – formellt eller informellt?',
              'Vad fungerar bra i din uppföljning, och vad kan förbättras?',
              'Hur kan du skapa uppföljningar som fokuserar mer på lärande än på kontroll?',
              'Hur visar du uppskattning för framsteg, även små?',
            ],
            reflection: 'Hur skulle du vilja att uppföljningsmöten i ditt team kändes – om du fick beskriva den perfekta känslan efter ett sådant möte?'
          },
          {
            part: 'Del 5 – Din egen utvecklingsplan',
            questions: [
              'Vilket beteende vill du själv utveckla när det gäller målsättning eller uppföljning?',
              'Vad kan du börja göra redan den här veckan för att ta ett steg i rätt riktning?',
              'Vem i din omgivning kan du be om feedback på detta?',
            ],
            reflection: 'Hur kan du använda det du lärt dig i den här modulen för att inspirera andra i din organisation?'
          },
        ]
      }
    ]
  },
  {
    id: '4',
    number: 4,
    title: 'Konflikthantering och svåra samtal',
    theme: 'Mod att ta tag i det som skaver',
    description: 'Konflikter är oundvikliga — och ofta ett tecken på engagemang. Den ledare som hanterar dem rätt bygger tillit.',
    videoUrl: 'https://player.vimeo.com/video/1175805294',
    lessons: [
      {
        id: 'fordupning',
        type: 'fordupning',
        title: 'Fördjupning',
        content: `## 1. Varför konflikter uppstår

Där människor arbetar tillsammans uppstår skillnader – i synsätt, behov, prioriteringar och värderingar. En konflikt kan uppstå när kommunikationen brister, när någon känner sig orättvist behandlad, eller när olika mål krockar.

**Det är inte samtalet som är problemet – det är ofta frånvaron av det.**

## 2. Fyra typer av konflikter

- **Mål-/intressekonflikt**: Vi kan diskutera och förstå varandras ståndpunkter – men är likafullt oeniga
- **Rollkonflikt**: Uppgifter utförs inte, eller så sker de i sista minuten under protester
- **Maktkonflikt**: Personlig prestige står i fokus
- **Värderingskonflikt**: Det finns ingen vilja att modifiera sin position

## 3. 4-stegsmodellen för svåra samtal

**Steg 1 – Förberedelse**: Klargör för dig själv vad problemet är konkret. Vad vill du uppnå? Separera beteende från person.

**Steg 2 – Beskriv situationen**: Beskriv konkreta observationer. Undvik tolkningar. Använd jag-budskap.

**Steg 3 – Lyssna och utforska**: Ställ öppna frågor. Lyssna aktivt. Bekräfta det du hör. Du behöver inte hålla med – men du behöver förstå.

**Steg 4 – Gemensam lösning**: Sammanfatta gemensam bild. Enas om konkret förändring. Bestäm uppföljning.

## 4. Tidiga signaler att vara uppmärksam på

- Personer drar sig undan, kortare eller kyligare ton
- Ökad irritation, sarkasm eller tyst motstånd
- Samma frågor återkommer utan att lösas
- Tystnad i möten – prat i korridorer istället för dialog
- Sänkta leveranser, mer misstag än vanligt

## 5. Trygg dialog – frågor som öppnar samtal

- **Öppnande**: "Hur upplever du situationen just nu?"
- **Fördjupande**: "Vad ligger bakom det här, tror du?"
- **Klargörande**: "Om jag förstår dig rätt, menar du att…?"
- **Framåtblickande**: "Vad skulle vara ett första steg framåt?"`
      },
      {
        id: 'ovningar',
        type: 'ovningar',
        title: 'Övningar',
        content: '',
        questions: [
          {
            part: 'Del 1 – Din syn på konflikter',
            questions: [
              'Hur ser du spontant på konflikter? Något att undvika eller något som kan leda till utveckling?',
              'Hur reagerar du personligen när stämningen blir spänd eller oenighet uppstår?',
              'Vilka typer av situationer tycker du är svårast att hantera?',
              'Vad tror du att ditt team upplever när du hanterar konflikter – trygghet, oro, tydlighet?',
            ],
            reflection: 'Hur kan du som ledare bidra till att konflikter hanteras som en naturlig och konstruktiv del av arbetet – inte som något hotfullt?'
          },
          {
            part: 'Del 2 – Tidiga signaler och observation',
            questions: [
              'Vilka tecken brukar du se när något inte står rätt till i teamet (tystnad, sarkasm, undvikande, återkommande missförstånd)?',
              'Hur reagerar du idag när du märker dessa tecken – och vad händer om du inte agerar?',
              'Beskriv ett tillfälle då du upptäckte en konflikt tidigt. Vad gjorde du då, och vilket resultat fick det?',
              'Finns det något du vill göra annorlunda nästa gång du ser tidiga signaler på spänning?',
            ],
            reflection: 'Hur kan du stärka din förmåga att se och agera innan en konflikt växer sig större?'
          },
          {
            part: 'Del 3 – Att föra ett svårt samtal',
            questions: [
              'Tänk på ett samtal du haft som kändes svårt. Vad gjorde det svårt – ämnet, känslorna, relationen, timingen?',
              'Hur förberedde du dig inför samtalet?',
              'Hur reagerade den andra personen, och hur reagerade du själv?',
              'Vad fungerade bra i samtalet – och vad skulle du vilja förbättra nästa gång?',
            ],
            reflection: 'Vilka steg i samtalet (förberedelse, fakta, lyssnande, lösning) kan du bli starkare i?'
          },
          {
            part: 'Del 4 – Känslor och trygghet',
            questions: [
              'Hur hanterar du känslor hos andra i en konflikt – ilska, frustration, tystnad?',
              'Vad väcker svåra samtal för känslor i dig själv?',
              'Hur påverkar din egen sinnesstämning hur samtalet utvecklas?',
              'Vad kan du göra för att skapa trygghet – både för dig själv och den du pratar med?',
            ],
            reflection: 'Hur kan du visa empati utan att ta över den andres känslor eller ansvar?'
          },
          {
            part: 'Del 5 – Din egen utvecklingsplan',
            questions: [
              'Vilken del av konflikthantering vill du utveckla mest?',
              'Vilket konkret beteende eller förhållningssätt kan du börja träna på redan nu?',
              'Vem kan du använda som bollplank eller mentor i dessa frågor?',
            ],
            reflection: 'Hur kan du använda nästa konflikt som ett tillfälle att öva på trygghet, närvaro och tydlighet?'
          },
        ]
      }
    ]
  },
  {
    id: '5',
    number: 5,
    title: 'Ledarskap i vardagen',
    theme: 'Struktur som frigör',
    description: 'Det är inte de stora besluten som avgör om du är en bra ledare — det är vad du gör varje dag.',
    videoUrl: 'https://player.vimeo.com/video/1175805312',
    lessons: [
      {
        id: 'fordupning',
        type: 'fordupning',
        title: 'Fördjupning',
        content: `## 1. Dagligt ledarskap

Ledarskap sker i vardagen – i de korta samtalen, i hur du hanterar oväntade situationer, i din närvaro och tillgänglighet. Det är summan av dina dagliga handlingar som skapar kultur och resultat.

## 2. Hållbart ledarskap börjar med hur du använder din tid

Som ledare påverkar din energi hur du kommunicerar, hur närvarande du är, och hur teamet upplever dig. Din energi smittar – både positivt och negativt.

**Prioriteringsrutinen – viktigt vs bråttom:**
- Viktigt & bråttom → Gör direkt
- Viktigt men inte bråttom → Planera in – högsta prioritet för ledarskap
- Bråttom men inte viktigt → Delegera
- Varken viktigt eller bråttom → Ta bort

## 3. 30-minutersstrukturen – veckoplanering

En kort, återkommande veckorutin:

**Steg 1 – Blicka bakåt (10 min)**: Vad fungerade bra? Vad tog mer energi än planerat?

**Steg 2 – Prioritera framåt (10 min)**: Välj max 3 viktigaste fokusområden. Vad är viktigt – inte bara brådskande?

**Steg 3 – Skapa utrymme (10 min)**: Blockera tid i kalendern för ledarskap, fokusarbete och återhämtning.

## 4. Energikartan

Kartlägg vad som ger och tar energi:
- Ger energi: Utvecklande samtal, problemlösning, samarbete som fungerar
- Tar energi (nödvändigt): Svåra beslut, konfliktsamtal, hög belastning
- Tar energi (onödigt): Otydliga möten, uppgifter utan tydligt värde

## 5. 5-minutersreflektionen

En enkel vana i slutet av dagen eller veckan:
1. Vad fungerade bra?
2. Vad var utmanande?
3. Vad vill jag göra annorlunda nästa gång?`
      },
      {
        id: 'ovningar',
        type: 'ovningar',
        title: 'Övningar',
        content: '',
        questions: [
          {
            part: 'Del 1 – Ditt vardagliga ledarskap',
            questions: [
              'Hur ser en typisk dag ut för dig som ledare? Vad tar mest tid?',
              'Hur stor del av din tid lägger du på direkt ledarskap (samtal, uppföljning, coaching) kontra operativa uppgifter?',
              'Vad skulle hända om du skyddade mer tid för ledarskapet i din vardag?',
              'Vilken ledarskapshandling gör störst skillnad för ditt team just nu?',
            ],
            reflection: 'Vad händer med ditt teams prestation och välmående när du är mer närvarande som ledare i vardagen?'
          },
          {
            part: 'Del 2 – Prioritering och fokus',
            questions: [
              'Vad tar mest tid i din vardag just nu – och är det det som är viktigast?',
              'Hur hanterar du situationer när allt känns lika brådskande?',
              'Vad kan du delegera, förenkla eller sluta göra för att skapa mer tid för ledarskap?',
              'Hur skyddar du tid för det som är viktigt men inte brådskande?',
            ],
            reflection: 'Vad i mitt ledarskap får mest tid – och vad borde få mer?'
          },
          {
            part: 'Del 3 – Din energi som ledare',
            questions: [
              'Vad i din vardag ger dig mest energi som ledare?',
              'Vad tar mest energi – och är det nödvändigt eller kan det förändras?',
              'Hur märker du på dig själv när du har lite energi – och hur påverkar det ditt ledarskap?',
              'Vad kan du göra för att återhämta och behålla din energi?',
            ],
            reflection: 'Vad händer med mitt ledarskap när jag har mer energi än vanligt?'
          },
          {
            part: 'Del 4 – Vanor och rutiner',
            questions: [
              'Vilka ledarskapsvanor har du redan som fungerar bra?',
              'Vilken ny rutin skulle göra störst skillnad för ditt ledarskap?',
              'Hur ska du bygga in den rutinen i din vardag konkret?',
              'Hur följer du upp om vanan faktiskt fastnar?',
            ],
            reflection: 'Vad händer i mitt ledarskap om jag reflekterar lite – men ofta?'
          },
        ]
      }
    ]
  },
  {
    id: '6',
    number: 6,
    title: 'Personlig utvecklingsplan',
    theme: 'Nästa steg som ledare',
    description: 'Sista modulen knyter ihop allt — inte som ett avslut, utan som en start på nästa kapitel.',
    videoUrl: 'https://player.vimeo.com/video/1175805323',
    lessons: [
      {
        id: 'fordupning',
        type: 'fordupning',
        title: 'Fördjupning',
        content: `## 1. Ledarskap som livslångt lärande

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
- **Nätverk**: En person som inspirerar, en som utmanar, en att reflektera med regelbundet

## 4. 360° mini – feedback från tre personer

Välj tre personer med olika perspektiv och ställ tre enkla frågor:
1. Vad fungerar bra i mitt ledarskap?
2. Vad skulle du vilja att jag utvecklar eller gör annorlunda?
3. Vad tycker du att jag ska fortsätta göra mer av?

## 5. Nästa nivå

Du har nu genomfört nivå 1 – Gruppledare. Vill du fortsätta till nivå 2 som affärschef – att leda andra ledare – är grunden du byggt här central.`
      },
      {
        id: 'ovningar',
        type: 'ovningar',
        title: 'Övningar',
        content: '',
        questions: [
          {
            part: 'Del 1 – Min ledarresa',
            questions: [
              'Vilka tre ord beskriver bäst din utveckling som ledare under utbildningen?',
              'Vad har du lärt dig om dig själv som ledare?',
              'Vilken del av utbildningen har haft störst påverkan på dig – och varför?',
              'Vad känner du dig mest stolt över att ha utvecklat?',
            ],
            reflection: 'Hur har din syn på ledarskap förändrats sedan du började utbildningen?'
          },
          {
            part: 'Del 2 – Mina styrkor som ledare',
            questions: [
              'Vilka är dina tre största styrkor i ditt ledarskap just nu?',
              'Hur märks dessa styrkor i vardagen – i ditt team, i samarbeten eller i resultat?',
              'Vilken styrka vill du använda ännu mer framöver?',
              'Hur kan du hjälpa andra att dra nytta av dina styrkor?',
            ],
            reflection: 'Vilka situationer får dig att känna dig trygg och autentisk som ledare?'
          },
          {
            part: 'Del 3 – Mina utvecklingsområden',
            questions: [
              'Vilka delar av ditt ledarskap vill du utveckla mest framöver?',
              'Vilka situationer tycker du fortfarande är utmanande eller energikrävande?',
              'Vad skulle du vilja hantera annorlunda i framtiden?',
              'Vad hindrar dig idag – och vad skulle kunna hjälpa dig att ta nästa steg?',
            ],
            reflection: 'Hur skulle ditt ledarskap förändras om du lyckades stärka dessa områden?'
          },
          {
            part: 'Del 4 – Mina mål (använd SMART-modellen)',
            questions: [
              'Fokusområde 1: Mitt mål och tidsram',
              'Fokusområde 2: Mitt mål och tidsram',
              'Fokusområde 3: Mitt mål och tidsram',
            ],
            reflection: 'Vilket av dessa mål kommer göra störst skillnad för dig – och för ditt team?'
          },
          {
            part: 'Del 5 – Mitt nätverk och nästa steg',
            questions: [
              'Vilka personer i din omgivning kan vara stöd i din utveckling? (En som inspirerar, en som utmanar, en att reflektera med)',
              'Hur vill du använda ditt nätverk för att hålla fokus på din utveckling?',
              'Vad vill du att andra ska märka hos dig om tre månader – som visar att du har utvecklats?',
            ],
            reflection: 'Hur kan du bygga in stöd och ansvar i din utvecklingsresa, så att du inte gör den ensam?'
          },
        ]
      }
    ]
  }
]