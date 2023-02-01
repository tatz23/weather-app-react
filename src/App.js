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
           <CurrentWeather defaultCity="porto" />
          <hr />
        </div>
      </div>
      <Footer />
    </div>
  );
}
