import { Accordion } from "./components/Accordion/Accordion";
import { AccordionItem } from "./components/Accordion/AccordionItem";

function App() {
  return (
    <main>
      <section>
        <h2>Why ?</h2>
        <Accordion className={"accordion"}>
          <AccordionItem
            id="experience"
            className="accordion-item"
            title="We got 20 years of experience"
          >
            <article>
              <p>Can't go wrong with us</p>
              <p>We are in the business of planning vacation strip</p>
            </article>
          </AccordionItem>
          <AccordionItem
            id="local-guides"
            className="accordion-item"
            title="We's working with local guides"
          >
            <article>
              <p>Need local guides for your strip</p>
              <p>Contact us</p>
            </article>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
