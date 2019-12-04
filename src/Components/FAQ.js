import React, { useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

function FAQ() {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="container mt-5 fade__in">
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
                  En hemsida som hjälper dig att välja vilken film eller tv serie att titta på eller
                  upptäcka härnäst. Tanken har varit att jag ska bekanta mig med de olika delarna i
                  React så som React Router, React Hooks, React Bootstrap och CSS i React samt
                  animationer med hjälp av React Pose biblioteket. Vidare har projektet fått mig att
                  fördjupa mig inom React Life Cycles samt optimeringar i form av att eliminera
                  onödiga renderingar.
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
                  hanteras via match parametern? Detta är ganska stora frågor och kan påverka
                  användarupplevelsen avsevärt anser jag. Jag kan utan tvekan påstå att jag känner
                  mig betydligt tryggare med att använda React Router efter detta projekt. Att ha
                  byggt den här sidan har även gett mig en introduktion till React Hooks vilket jag
                  ska fördjupa mig inom härnäst.
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
                  React Hooks och komplexiteten det innebär vad gäller dependencies i olika
                  "lifecycles". T.ex. att man måste använda useCallback om man skickar med en
                  funktion som props till en child komponent som använder den i useEffect - eftersom
                  child komponenten måste ha den i sin dependency array och useCallback ser till att
                  den inte skapar nya referenser till funktionen gång på gång. Jag gillar React
                  Hooks men vissa saker borde vara lite enklare och kanske färdiga "out-of-the-box"
                  som t.ex. att jämföra previousProps med nuvarande props. I dagsläget får man
                  använda sig av useRef för att åstadkomma detta och det medför ytterligare flera
                  rader kod och då tycker jag att det kan vara enklare att skriva en "vanlig" Class
                  komponent istället. Däremot förstår jag att Hooks är framtiden och att det
                  ständigt kommer att förbättras och jag kommer att använda det mer och mer.
                </p>
                <p>
                  Sedan är API som jag använder för att hämta mediainformation svår att hantera
                  emellanåt eftersom informationen inte är konsistent alla gånger. Problem som jag
                  stött på har varit:
                </p>
                <ul>
                  <li>
                    Dubletter av objekt (problem när jag använder mig av objekt.id som key värde i
                    renderingen)
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
                  applicera det jag redan har i min kunskapsbank. I annat fall blir det Google och
                  Stack Overflow. Övning ger färdighet och frågeställningarna till Google blir
                  bättre, mer precisa samt att man blir bättre på att sortera ut rätt data.
                </p>
                <p>
                  Jag anser inte att min lösning nödvändigtvis är den som gäller eller är det
                  korrekta, utan jag tar till mig feedback mer än gärna samt att jag ständigt
                  försöker utvecklas och bli bättre för varje rad kod som jag skriver.
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
                  Jag gillar även att jobba med UI och design. Jag vill ha snygga men diskreta
                  animationer. Användaren ska njuta av att använda sidan. Både visuellt men också
                  vad gäller funktionaliteten. Jag anser att jag har ett öga för design och tycker
                  att det är väldigt roligt att skapa snygga komponenter och hemsidor som både ser
                  bra ut och fungerar bra.
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
                  Jag vill ständigt förbättras och utvecklas inom området. Övning ger färdighet och
                  det finns gott om utrymme till förbättring. Specifika koncept så som "Single
                  Responsibility Principle", React Hooks och "self contained components" är något
                  jag kommer fördjupa mig mer inom. Jag tror det viktigaste är mitt intresse samt
                  uthållighet. Jag drivs av problemlösningen och tycker att det är riktigt givande
                  att programmera och lösa problem och utmaningar som uppstår.
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
                  använda mig av ett CSS framework i detta projekt. Valet blev Bootstrap CSS samt
                  enstaka React-Bootstrap komponenter.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="7" style={{ cursor: "pointer" }}>
              Känner du till Styled Components?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="7">
              <Card.Body className="text-muted">
                <p>
                  Yes och jag har använt det i andra projekt. Men i detta projekt ville jag bli mer
                  bekant med Bootstrap och deras grid system. Det jag däremot kanske gör med detta
                  projekt i framtiden är att använda mig av CSS Modules istället för att ha globala
                  CSS klasser.
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
                  Specifika saker som utförs inom funktionen och att det ska vara "lätt" att följa
                  med i koden. Antingen genom att det finns kommenterar eller genom att koden inte
                  ändrar något utanför sig själv. Jag gillar att man försöker förenkla och förkorta,
                  men ibland kan det bli lite väl förenklat och försvårar istället läsbarheten. Jag
                  anser även att min kod skall vara skriven på ett sätt som underlättar för någon
                  annan att sätta sig in i och förstå hur jag tänkt och varför jag skrivit som jag
                  skrivit.
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
                  Jag vill fortsätta med att fördjupa mig mer inom React Hooks, Context och NoSQL
                  databaser så som Firebase samt lära mig mer om animationer. Funktionell
                  programmering samt nya trender inom React är något som intresserar mig och jag
                  försöker hålla mig så uppdaterad jag kan. Målet är att kunna bygga bra,
                  återanvändningsbara och snygga komponenter enligt best practice metoder.
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
