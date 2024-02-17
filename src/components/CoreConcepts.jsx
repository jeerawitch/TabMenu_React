import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

function Coreconcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((concpetItem) => (
          <CoreConcept key={concpetItem.title} {...concpetItem} />
        ))}
      </ul>
    </section>
  );
}
export default Coreconcepts;
