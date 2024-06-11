import Place, { PLACES, PlaceType } from "./Places";
import { Accordion } from "./components/Accordion/Accordion";
import { SearchableList } from "./components/SearchableList/SearchableList";

function App() {
  return (
    <main>
      <section>
        <h2>Why ?</h2>
        <Accordion className={"accordion"}>
          <Accordion.Item id="experience" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              We got 20 years of experience
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>Can't go wrong with us</p>
                <p>We are in the business of planning vacation strip</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item id="local-guides" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              We's working with local guides
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>Need local guides for your strip</p>
                <p>Contact us</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
      <section>
        <SearchableList items={PLACES} itemKeyFn={(item) => (item as PlaceType).id}>
          {(item) => <Place item={item as PlaceType} />}
        </SearchableList>
        <SearchableList items={["item1", "item2"]} itemKeyFn={(item) => (item as string)}>
          {(item) => item as string}
        </SearchableList>
      </section>
    </main>
  );
}

export default App;
