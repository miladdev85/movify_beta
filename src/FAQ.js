import React from "react";
// import Accordion from "./Accordion";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

function FAQ() {
  return (
    <div className="container mt-5 w-50 fade__in">
      <h1 className="text-center">Frågor och svar</h1>
      <div className="mt-5">
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0" style={{ cursor: "pointer" }}>
              Berätta om detta projekt
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="text-muted">
                <p>
                  Det här är mitt första projekt efter den obligatoriska "To Do" appen som varje
                  React introduktion verkar innehålla. Tanken har varit att jag ska bekanta mig med
                  de olika delarna i React så som React Router, React Hooks, React Bootstrap och CSS
                  i React samt animationer med hjälp av React Pose biblioteket. Projektet är byggt
                  på egen hand utan någon tutorial eller online kurs. Men självklart en hel del
                  Google och Stack Overflow häng.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1" style={{ cursor: "pointer" }}>
              Vad har varit mest lärorikt?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="text-muted">
                <p>
                  Att använda React Router på detta sätt som jag har gjort har varit en utmaning.
                  Funktionerna i sig har varit enkla att förstå efter att ha läst dokumentationen
                  men just "arkitekturtänket" har varit den stora utmaningen med React Router. Vill
                  jag använda search queries? Vill jag att användaren ska kunna dela länk och komma
                  till samma genre, film, serie osv. Ska historiken följa med i search queryn och
                  användas i nästa komponent? Vad ska hanteras via search queries och vad ska
                  hanteras via match parametern? Detta är ganska stora frågor för en nybörjare anser
                  jag. Men övning ger färdighet och jag känner mig betydligt tryggare med att
                  använda React Router efter detta projekt. Att ha byggt den här sidan har även gett
                  mig en introduktion till React Hooks vilket jag ska fördjupa mig inom härnäst. Och
                  självklart att lösa alla problem som uppstår och bredda kunskaperna inom olika
                  områden.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2" style={{ cursor: "pointer" }}>
              Vad har varit jobbigast?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body className="text-muted">
                <p>
                  React Hooks och komplexiteten det innebär vad gäller closures & dependencies i
                  olika "lifecycles". T.ex. att man måste använda useCallback om man skickar med en
                  funktion som props till en child komponent som använder den i useEffect - eftersom
                  child komponenten måste ha den i sin dependency array och useCallback ser till att
                  den inte skapar nya referenser till funktionen gång på gång. Jag tycker om React
                  Hooks men vissa saker borde vara lite enklare och kanske färdiga "out-of-the-box"
                  som t.ex. att jämföra previousProps med nuvarande props. I dagsläget får man
                  använda sig av useRef för att åstadkomma detta och det medför ytterligare flera
                  rader kod och då tycker jag nästan att det är enklare att skriva en gammal god
                  Class komponent. Däremot förstår jag att Hooks är framtiden och jag måste fördjupa
                  mig inom det.
                </p>
                <p>
                  Sedan är API som jag använder för att hämta mediainformation svår att hantera
                  emellanåt eftersom informationen inte är konsistent alla gånger. Problem som jag
                  stött på har varit:
                </p>
                <ul>
                  <li>
                    Dubletter av objekt (problem när jag använder mig av objekt.id som key värde i
                    en array.map funktion)
                  </li>
                  <li>Objekt information som saknas</li>
                  <li>
                    Objekt värde kan vara null, undefined, " ", "N/A" etc. vilket har gjort det
                    svårt för mig att lägga till conditionals och säkra upp för dessa värden
                  </li>
                </ul>
                <p>
                  Dessa problem har uppdagats för mig när jag letat efter mindre kända filmer,
                  serier eller personer.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3" style={{ cursor: "pointer" }}>
              Hur löser du problem?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body className="text-muted">
                <p>
                  Är det ett problem som liknar något jag tidigare varit med om så försöker jag
                  applicera det jag redan har i min kunskapsbank. Men annars så blir det Google och
                  Stack Overflow. Det jag märker mer och mer är att mina frågeställningar till
                  Google blir bättre och bättre för varje dag som går. Mer precisa frågeställningar,
                  bättre på att sortera ut rätt data, snabbare förståelse, etc.
                </p>
                <p>
                  Jag har ingen prestige i det jag gör utan jag är ute efter att lära mig mer och
                  bredda mig. Min lösning behöver inte vara korrekt och jag tar till mig feedback
                  mer än gärna samt att jag ständigt försöker bli bättre på det jag kan.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="4" style={{ cursor: "pointer" }}>
              Vad tycker du är roligast?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body className="text-muted">
                <p>
                  Problemlösning har varit något som jag alltid tyckt är roligt och givande. Det i
                  kombination med kreativiteten i programmering är något som blir en morot för mig
                  och håller mig självmotiverad.
                </p>
                <p>
                  Jag gillar även att jobba med UI och designen. Jag vill ha snygga men diskreta
                  animationer. Användaren ska njuta av att använda sidan. Både visuellt men också
                  vad gäller funktionaliteten. Jag anser att jag har ett öga för design och med
                  hjälp av diverse CSS frameworks blir det väldigt roligt att skapa snygga
                  komponenter och hemsidor som både ser bra ut men också fungerar bra och snabbt.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="5" style={{ cursor: "pointer" }}>
              Vad skulle du vilja förbättra?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
              <Card.Body className="text-muted">
                <p>
                  Allt... men vissa koncept inom React måste jag lära mig och bli bättre på snarast.
                  Detta gäller t.ex. "Single Responsibility Principle". Hur gör jag bäst en
                  komponent som kan återanvändas? Hur mycket logik ska min komponent få utföra? Vad
                  är bäst practice? Ska komponent X göras mer generell och återanvändningsbar redan
                  nu? Är t.ex. min "MoreMediaFetcher" komponent som har samma logik för filmer och
                  tv serier bra eller dålig? Kanske bra i just detta projekt med tänket är fel?
                  Detta är frågor som jag tänkt på men jag känner att jag behöver mer "real-life"
                  erfarenhet och behöver komma ut till ett företag som jobbar med detta och lära mig
                  på plats. Intresset finns, törsten efter kunskap finns och medvetenheten om
                  eventuella fel finns. Det enda som saknas är ett jobb där jag får tillämpa och bli
                  ännu bättre på detta.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="6" style={{ cursor: "pointer" }}>
              Hur har du tänkt kring designen och UI / UX?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="6">
              <Card.Body className="text-muted">
                <p>
                  Jag har utgått ifrån att det ska se bra ut på mobila enheter samt att jag ska
                  använda mig av en CSS framework. Valet blev Bootstrap CSS samt enstaka
                  React-Bootstrap komponenter eftersom jag märkte att flertalet jobbannonser och
                  företag använder Bootstrap. Jag är inte direkt förtjust i Bootstraps design
                  däremot älskar jag deras Grid system. På det hela stora gillar jag Ant Design och
                  Material UI mer än Bootstrap. De fokuserar på snygga komponenter samt att deras
                  React komponenter känns mer "up to date" och officiella. Jag vet inte riktigt vad
                  som anses vara best practice huruvida man ska använda Bootstrap komponenter eller
                  klassnamn? Men jag förstår tänket kring bägge och kan tillämpa det som krävs.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="7" style={{ cursor: "pointer" }}>
              Du har inte använt Styled Components biblioteket - varför?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="7">
              <Card.Body className="text-muted">
                <p>
                  Jag har använt mig av mer generella CSS klasser eftersom jag använder dessa i
                  media query syfte för att få alla bilder att se bra ut på mobilen. Jag har tittat
                  en del på Styled Components och förstår konceptet samt användningsområdet. Jag
                  förstår tänket och skulle inte ha några problem att applicera det.
                </p>
                <p>
                  Jag förstår att i större projekt med flera medlemmar blir det svårt att hålla koll
                  på alla CSS stylesheets samt klassnamn som förr eller senare kommer att krocka.
                  Därför har jag delat upp mina klassnamn i olika filer som berör just de
                  komponenterna samt att mina egna klassnamn innehåler "__" i namnet för att kunna
                  urskilja från Bootstraps klassnamn.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="8" style={{ cursor: "pointer" }}>
              Vad tycker du är bra kod?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="8">
              <Card.Body className="text-muted">
                <p>
                  Specifika saker som utförs och är "lätt" att följa med i koden. Antingen genom att
                  det finns kommenterar eller genom att koden inte "ändrar" något utanför sig själv.
                  Jag gillar att man försöker förenkla och förkorta, men ibland tycker jag det kan
                  se väl komplext ut när t.ex. en dokumentationssida har destructured varje
                  parameter, spreadat alltihopa osv. Det blir lite svårläst enligt mig och ser ut
                  som ninjakod i vissa fall.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="9" style={{ cursor: "pointer" }}>
              Vad vill du fokusera på härnäst?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="9">
              <Card.Body className="text-muted">
                <p>
                  Jag vill hitta ett jobb som junior front-end utvecklare på ett företag som arbetar
                  i React så att jag kan fördjupa mig inom det och lära mig att bli en bra
                  programmerare. Funktionell programmering samt nya trender inom React är något som
                  intresserar mig men jag behöver lite stöttning och coaching - speciellt nu i
                  början av min resa. Målet är att kunna bygga bra, återanvändningsbara och snygga
                  komponenter enligt best practice metoder.
                </p>
                <p>
                  React Hooks, HOC-tänket och animationer med hjälp av React Spring är saker som jag
                  skulle vilja lära mig.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
}

export default FAQ;
