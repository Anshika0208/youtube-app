import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          format: "json",
          origin: "*",
          list: "search",
          srsearch: { term },
        },
      });

      setResults(data.query.search);
    };

    //search term after 5 secs user has typed letter
    const timerId = setTimeout(() => {
      if (term) {
        search();
      }
    }, 500);

    return() => {
        clearTimeout(timerId);
    }
    
  }, [term]);

  const renderedResults = results.map((result) => {
    const regex = /(<([^>]+)>)/gi; //NEW
    const cleanSnippet = result.snippet.replace(regex, ""); //NEW

    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go!
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          {cleanSnippet}
        </div>
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <label>Enter Search term : </label>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="input"
        />
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
