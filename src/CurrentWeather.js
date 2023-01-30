import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

import "./CurrentWeather.css";

export default function CurrentWeather (props) {
  const [weatherData, setWeatherData] =useState ({ready: false});
  const [city, setCity] = useState (props.defaultCity);

  function handleResponse (response) {
    setWeatherData ({
      ready: true,
      temperature: response.data.temperature.current,
      feelslike: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      date: new Date (response.data.time*1000),
      description: response.data.condition.description, 
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      wind: response.data.wind.speed,
      city:response.data.city,
    });
  }

  function handleSubmit (event) {
    event.preventDefault ();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "2afbc670a6b48bo2065e3872ftab04ec";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
    <div>
    <div className="SearchBar">
        <form id="search-form" onSubmit={handleSubmit}>
          <input
            type="search" 
            placeholder="🔍Enter a city name..."
            className="form-control"
            id="city-input" onChange={handleCityChange}
          />
        </form>
      </div>
       <div className="Currentweather">
      <div className="weather-app">
        <div className="row">
          <div className="col-6">
            <h1 id="city">{weatherData.city}</h1>
          </div>
          <div className="col-6">
            <div className="d-flex weather-temperature">
              <h2 className="temperature">
                <img
                  id="icon"
                  alt="Partly Cloudy"
                  src={weatherData.icon}
                />
                <span id="current-temperature">{Math.round(weatherData.temperature)}</span>
                <span className="units">ºC</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <ul>
              <li id="date">{weatherData.date}</li>
              <li id="weather-description">{weatherData.description}</li>
            </ul>
          </div>
          <div className="col-6">
            <p className="feels-like-description">
              Feels like:{" "}
              <span className="feels-like" id="feels-like">
                {Math.round(weatherData.feelslike)}{" "}
              </span>
              <span className="units">ºC</span>
            </p>
          </div>
        </div>
        <div className="data-weather">
          <div className="row">
            <div className="col-6">
              Humidity: <span id="humidity">{weatherData.humidity}</span>%
            </div>
            <div className="col-6">
              Wind: <span id="wind">{weatherData.wind}</span> m/s
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    );
  } else {
    search ();
    return "Loading..."
  }

}

