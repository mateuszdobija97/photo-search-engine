import React, { useState, useEffect, Fragment } from "react";
import SearchBar from "../common/SearchBar";
import homeApiService from "./api/HomeApiService";
import { NavLink } from "react-router-dom";
import { getResultRoute } from "../../routes/Routes";
import "./Home.css";

const Home = () => {
  const [query, setQuery] = useState("");
  const [isListOpen, setIsListOpen] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query.length < 3) {
      setSuggestions([]);
      setIsListOpen(false);
      return;
    }
    setIsListOpen(true);
    homeApiService
      .getSuggestions(query)
      .then((suggestionsResponse) => setSuggestions(suggestionsResponse));
  }, [query]);

  const onSubmitSearchBarHome = (e) => {
    e.preventDefault();
  };

  const listSuggestions = isListOpen && (
    <Fragment>
      {suggestions.length ? (
        <ul>
          {suggestions.map((suggestion, index) => (
            <NavLink key={index} to={getResultRoute(suggestion)}>
              <li>{suggestion}</li>
            </NavLink>
          ))}
        </ul>
      ) : (
        <div className="search-not-found">
          <p>No images for display!</p>
        </div>
      )}
    </Fragment>
  );

  return (
    <div className="home">
      <div className="home-content">
        <div className="home-title">
          <h1>Unsplash</h1>
        </div>
        <div className="home-description">
          <p>The internet's source of freely-usable images.</p>
          <p>Powered by creators everywhere.</p>
        </div>
        <div className="home-searchbar-wrapper">
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Search free high-resolution photos"
            className="home-searchbar-input"
            onResetQuery={setQuery}
            onSubmit={onSubmitSearchBarHome}
          />
          <div className="home-searchbar-suggestions">{listSuggestions}</div>
        </div>
        <div className="home-footer">
          <p>Trending: flower, wallpapers, backgrounds, happy, love</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
