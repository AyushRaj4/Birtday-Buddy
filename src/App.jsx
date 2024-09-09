import { useState } from "react";
import data from "./data";
import People from "./People";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>
        {people.map((person) => {
          return <People {...person} key={person.id} />;
        })}
        <button type="button" className="btn btn-block" onClick={() => setPeople(() => [])}>Clear All</button>
      </section>
    </main>
  );
};
export default App;
