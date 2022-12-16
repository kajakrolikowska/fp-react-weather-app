import React from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="WeatherAppWrap">
      <div className="Weather">
        <form>
          <div className="row SearchEngine">
            <div className="col-9">
              <input
                type="search"
                placeholder="🔍 What is the weather in..."
                className="formControl"
              />
            </div>
            <div className="col">
              <button type="submit" className="checkBtn">
                Check
              </button>
            </div>
          </div>
        </form>
        <br />
        <ul className="Date">
          <li className="Day">Tuesday, 1 November 2022</li>
          <li className="Time">17:47</li>
        </ul>
        <br />
        <div className="row">
          <div className="col-6 Location">
            <h1>Berlin</h1>
          </div>
          <div className="col-4 Temperature">
            <span className="temp">15</span>
            <span className="units">°C</span>
          </div>
          <div className="col-8 Description">
            <p>Clear sky</p>
          </div>
        </div>

        <br />

        <hr />
        <div className="row">
          <div className="col-6 Icon">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
              alt="Clear sky"
            />
          </div>
          <div className="col-6 Definitions">
            <ul>
              <li>Feels like: 15°C</li>
              <li>Wind: 4 km/h</li>
              <li>Humidity: 87%</li>
              <li>Pressure: 1018 hPa</li>
            </ul>
            <br />
          </div>
          <hr />
        </div>
        <div className="Forecast text-center">
          <strong>Forecast placeholder</strong>
        </div>
        <hr />
      </div>
      <footer>
        This app was coded by Kaja Królikowska, and is open-sourced on{" "}
        <a href="https://github.com/kajakrolikowska/fp-react-weather-app">
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a href="https://tourmaline-lebkuchen-5df301.netlify.app/">Netlify</a>.
      </footer>
    </div>
  );
}
