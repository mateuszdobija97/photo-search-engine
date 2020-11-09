import React from "react";
import classNames from "classnames";
import "./SearchBar.css";

const SearchBar = (props) => {
  const className = classNames(`default-searchbar ${props.className}`);
  return (
    <div>
      <div className={className}>
        <form onSubmit={props.onSubmit}>
          <i className="fa fa-search"></i>
          <input
            type="text"
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
            placeholder={props.placeholder}
          />
          {props.onResetQuery && (
            <button onClick={() => props.onResetQuery("")}>X</button>
          )}
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
