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
        <hr />

        <div className="row WeatherInformation">
          <div className="col-12">
            <ul className="Date">
              <li className="Day">Tuesday, 1 November 2022</li>
              <li className="Time">17:47</li>
            </ul>
          </div>
          <div className="col-6 Location">
            <h1>Berlin</h1>
          </div>
          <div className="col-3 Icon">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
              alt="Clear sky"
            />
          </div>
          <div className="col-3 Temperature">
            <span className="temp">15</span>
            <span className="units">°C | °F</span>
          </div>

          <div className="col CurrentConditions">
            <ul>
              <li>Clear sky</li>
              <li>Feels like: 15°C</li>
              <li>Wind: 4 km/h</li>
              <li>Humidity: 87%</li>
              <li>Pressure: 1018 hPa</li>
            </ul>
            <hr />
          </div>
        </div>

        <div className="row Forecast text-center">
          <strong>Forecast placeholder</strong>
        </div>
        <hr />
      </div>
      <footer>
        <strong>
          This app was coded by Kaja Królikowska, and is open-sourced on{" "}
          <a href="https://github.com/kajakrolikowska/fp-react-weather-app">
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a href="https://tourmaline-lebkuchen-5df301.netlify.app/">Netlify</a>
          .
        </strong>
      </footer>
    </div>
  );
}
