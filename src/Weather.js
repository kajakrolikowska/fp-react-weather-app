import React, { useState } from "react";
import axios from "axios";
import WeatherInformation from "./WeatherInformation";

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
  function search() {
    let apiKey = "aco5b5a5f063d77c9b366418et20e71f";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(url).then(showConditions);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search(city);
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
            autoFocus="on"
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
        <WeatherInformation data={conditions} />
        <hr />
        <div className="row Forecasts">
          <div className="col">
            <p className="text-center">Forecasts placeholder</p>
            <hr />
          </div>
        </div>
      </div>
    );
  } else {
    search();
  }
}
