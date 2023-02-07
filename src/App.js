import React from "react";
import "./styles.css";

import CurrentWeather from "./CurrentWeather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="Weather-app">
           <CurrentWeather defaultCity="porto" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
