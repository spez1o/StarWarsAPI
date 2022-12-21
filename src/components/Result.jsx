import { fetchAllFilms } from "../api";
import { useEffect, useState } from "react";

export default function Result(props) {
  const result = props.result;
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function fetchFilms() {
      const films = await fetchAllFilms();
      setFilms(films);
      // console.log(films);
    }
    fetchFilms();
  }, [result]);

  if (props.loading === false) {
    const classification = props.classification;

    // return for people

    if (classification === "people") {
      return (
        <div className="person-container">
          {props.result.map((person) => {
            return (
              <div key={person.name} className="single-person-container">
                <h2>{person.name}</h2>
                <p>sex: {person.gender}</p>
                <p>born: {person.birth_year}</p>
                <p>
                  homeworld: <small>{person.homeworld}</small>
                </p>
                <p>height: {person.height}cm</p>
                <p>weight: {person.mass}kg</p>
                <h4>Features:</h4>
                <p>eye color: {person.eye_color}</p>
                <p>hair color: {person.hair_color}</p>
                <p>skin color: {person.skin_color}</p>
                <h4>Additonal info:</h4>
                <p>
                  created: <small>{person.created.substring(0, 10)}</small>
                </p>
                <h5>
                  films apart of:
                  <div>
                    {films.map((film) => (
                      <div key={film.episode_id}>
                        <ul>{film.title}</ul>
                      </div>
                    ))}
                  </div>
                </h5>
              </div>
            );
          })}
        </div>
      );
    }
    if (classification === "planets") {
      <div className="planet-container">
        {props.result.map((planet) => {
          return (
            <div className="single-planet-container">
              <h2>{planet.name}</h2>
            </div>
          );
        })}
      </div>;
    }
  } else {
    return (
      <div className="loading-screen">
        <h1>Loading...</h1>
      </div>
    );
  }
}
