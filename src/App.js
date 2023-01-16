import React from "react";
import "./styles.css";

import SearchForm from "./SearchForm";
import CurrentWeather from "./CurrentWeather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="Weather-app">
          <SearchForm />
          <hr />
          <CurrentWeather />
          <hr />
        </div>
      </div>
      <Footer />
    </div>
  );
}
