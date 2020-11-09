import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import unsplash from "../../api/unsplash";
import "./Results.css";

import SearchBar from "../common/SearchBar";
import PicturesList from "../PicturesList";

const Results = () => {
  const [pictures, setPictures] = useState([]);
  const [query, setQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(query);

  const routeParams = useParams();
  const { suggestionName } = routeParams;

  useEffect(() => {
    setQuery(suggestionName);
  }, [suggestionName]);

  const onSubmitSearchBarResults = (e) => e.preventDefault();

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearch(query);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [query]);

  useEffect(() => {
    query && getPictures();
  }, [debouncedSearch]);

  const getPictures = () => {
    unsplash
      .get("/search/photos", {
        params: { query: debouncedSearch },
      })
      .then((res) => setPictures(res.data.results));
  };

  return (
    <div className="results-container">
      <SearchBar
        value={query}
        onChange={setQuery}
        placeholder="Search free high-resolution photos"
        className="results-searchbar-input"
        onResetQuery={setQuery}
        onSubmit={onSubmitSearchBarResults}
      />
      <PicturesList pictures={pictures} />
    </div>
  );
};

export default Results;
