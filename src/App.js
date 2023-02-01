import React from "react";
import "./styles.css";

import SearchForm from "./SearchForm";
import LocationButton from "./LocationButton";
import CurrentWeather from "./CurrentWeather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="Weather-app">
          <div className="row">
            <div className="col-9">
              <SearchForm />
            </div>
            <div className="col-1">
              <LocationButton />
            </div>
          </div>
          <hr />
          <CurrentWeather defaultCity="paris" />
          <hr />
        </div>
      </div>
      <Footer />
    </div>
  );
}
