import React, { useState } from "react";
import axios from "axios";
import FormatedDate from "./FormatedDate";

import "./Weather.css";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [conditions, setConditions] = useState(null);
  let [load, setLoad] = useState(false);

  function showConditions(response) {
    setLoad(true);
    setConditions({
      city: response.data.city,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      feelslike: response.data.temperature.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      pressure: response.data.temperature.pressure,
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      date: new Date(response.data.time * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "aco5b5a5f063d77c9b366418et20e71f";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(url).then(showConditions);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row SearchEngine">
        <div className="col-9">
          <input
            type="search"
            placeholder="🔍 What is the weather in..."
            className="formControl"
            onChange={updateCity}
          />
        </div>

        <div className="col">
          <button type="submit" className="checkBtn">
            Check
          </button>
        </div>
      </div>
    </form>
  );

  if (load) {
    return (
      <div>
        {form}
        <hr />

        <div className="row WeatherInformation">
          <div className="col-12">
            <FormatedDate date={conditions.date} />
          </div>
          <div className="col-6 Location">
            <h1>{city}</h1>
          </div>
          <div className="col-3 Icon">
            <img src={conditions.icon} alt={conditions.description} />
          </div>
          <div className="col-3 Temperature">
            <span className="temp">{Math.round(conditions.temperature)}</span>
            <span className="units">°C | °F</span>
          </div>

          <div className="col CurrentConditions">
            <ul>
              <li>Description: {conditions.description}</li>
              <li>Feels like: {Math.round(conditions.feelslike)}°C</li>
              <li>Wind: {Math.round(conditions.wind)} km/h</li>
              <li>Humidity: {conditions.humidity}%</li>
              <li>Pressure: {conditions.pressure} hPa</li>
            </ul>
            <hr />
          </div>
        </div>

        <div className="row Forecast text-center">
          <strong>Forecast placeholder</strong>
        </div>
        <hr />
      </div>
    );
  } else {
    return form;
  }
}
