import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      description: response.data.condition.description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "2afbc670a6b48bo2065e3872ftab04ec";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
      <div className="row">
      <div className="col-11">
        <form id="search-form" onSubmit={handleSubmit}>
          <input
            type="search" onChange={updateCity}
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

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)} ºC</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind} m/s</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
