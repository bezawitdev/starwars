export default function fetchData(endpoint = "starships") {
    const BASE_URL = `https://swapi.dev/api/${endpoint}`;
  
    fetch(BASE_URL).then((res) => res.json());
  }