import { useState, useEffect } from "react";
// import fetchData from "../services/sw-api";
import Card from "./Card";

function MainContent() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/starships")
      .then((res) => res.json())
      .then((data) => setState(data.results));
  }, []);

  console.log(state);

  return (
    <main>
      {state.map((ship, index) => (
        <Card key={index} info={ship} />
      ))}
    </main>
  );
}

export default MainContent;