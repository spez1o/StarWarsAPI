import "./App.css";

import Search from "./components/Search.jsx";
import Result from "./components/Result.jsx";
import { fetchAll } from "./api";
import React, { useState, useEffect } from "react";

function App() {
  const [result, setResult] = useState([]);
  const [classification, setClassification] = useState("people");
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://swapi.dev/api/${classification}?page=${page}`
      );
      const data = await response.json();
      setData(data.results);
      console.log(data.results);
    }

    fetchData();
  }, [classification, page]);

  const searchHandler = async (e, query, classification) => {
    try {
      e.preventDefault();
      setLoading(true);
      const data = await fetchAll(classification);
      // we will filter data on this line
      const array = data.filter((item) => {
        // console.log(item);
        let str = JSON.stringify(item);
        // console.log(str);
        return str.toLowerCase().trim().includes(query.toLowerCase().trim());
      });
      // const keys = Object.keys(item);
      // console.log(data);
      setLoading(false);

      setResult(array);
    } catch (error) {}
  };

  return (
    <div className="App">
      <Search
        setClassification={setClassification}
        classification={classification}
        search={searchHandler}
      />
      <div className="pagenation-btn">
        <button onClick={() => setPage(page - 1)}>Previous</button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>

      <Result
        classification={classification}
        result={result}
        loading={loading}
      />
    </div>
  );
}

export default App;
