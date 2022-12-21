import React from "react";
import { useState, useEffect } from "react";
// import Result from "./Result";

import {
  fetchAllClassifications,
  fetchAllFilms,
  fetchAllPeople,
  fetchAllPlanets,
  fetchAllSpecies,
  fetchAllVehicles,
  fetchAllStarships,
  BASE_URL,
} from "../api";

export default function Search(props) {
  ///create a state for the fecched data
  const [result, setResult] = useState([]);

  const [query, setQuery] = useState("");

  const [classificationList, setClassificationList] = useState([]);
  useEffect(() => {
    fetchAllClassifications().then((classifications) => {
      setClassificationList(Object.keys(classifications));
    });
  }, []);

  return (
    <div className="search-container">
      <fieldset className="search-info">
        <label htmlFor="selection">Search Star Wars Info</label>
        <input
          className="search-bar"
          id="search-bar"
          type="text"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <select
          className="search-classification"
          name="classification"
          id="select-classification"
          value={props.classification}
          onChange={(e) => props.setClassification(e.target.value)}
        >
          <option value="any">--Classifications--</option>
          {classificationList &&
            classificationList.map((classification, idx) => {
              return (
                <option key={idx} value={classification}>
                  {classification}
                </option>
              );
            })}
        </select>
        <button
          className="search-button"
          onClick={(e) => props.search(e, query, props.classification)}
        >
          Search
        </button>
      </fieldset>

      {result.map((item) => {
        return <h1>{item.people}</h1>;
      })}
    </div>
  );
}

/*
     you will have a state that store conditions
      the map only return the element that satisfy the conditions
   
   
   */
