import React from "react";

export default function SearchForm() {
  return (
    <div className="row">
      <div className="col-11">
        <form id="search-form">
          <input
            type="search"
            placeholder="🔍Enter a city name..."
            className="form-control"
            id="city-input"
          />
        </form>
      </div>
      <div className="col-1">
        <button className="current-location" id="current-location">
          <span role="img" aria-label="emoji">
            📍
          </span>
        </button>
      </div>
    </div>
  );
}
