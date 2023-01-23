import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  return (
    <div className="Currentweather">
      <div className="weather-app">
        <div className="row">
          <div className="col-6">
            <h1 id="city">Lisbon</h1>
          </div>
          <div className="col-6">
            <div className="d-flex weather-temperature">
              <h2 className="temperature">
                <img
                  id="icon"
                  alt="Partly Cloudy"
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                />
                <span id="current-temperature">20</span>
                <span className="units">ºC</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <ul>
              <li id="date">Saturday, 15:13</li>
              <li id="weather-description">Sunny</li>
            </ul>
          </div>
          <div className="col-6">
            <p className="feels-like-description">
              Feels like:{" "}
              <span className="feels-like" id="feels-like">
                18{" "}
              </span>
              <span className="units">ºC</span>
            </p>
          </div>
        </div>
        <div className="data-weather">
          <div className="row">
            <div className="col-6">
              Humidity: <span id="humidity">1</span>%
            </div>
            <div className="col-6">
              Wind: <span id="wind">2</span> m/s
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
