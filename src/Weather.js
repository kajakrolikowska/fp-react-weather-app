import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="WeatherAppWrap">
      <div className="Weather">
        <ul>
          <li>Tuesday, 1 November 2022</li>
          <li>17:47</li>
        </ul>
        <br />
        <form>
          <input
            type="search"
            placeholder="🔍 What is the weather in..."
            className="formControl"
          />
          <input type="submit" value="Check" />
          <button type="button">📍</button>
        </form>
        <br />
        <div className="row">
          <div className="col-8 Location noPadding">
            <h1>Berlin</h1>
          </div>
          <div className="col-2 Temperature noPadding">
            <h1>15</h1>
          </div>
          <div className="col-2 Units noPadding">
            <p> °C | °F</p>
          </div>
          <div className="col-8 Description">
            <p>Clear sky</p>
          </div>
        </div>
        <hr />
        <br />
        <div className="row">
          <div className="col-4 Icon">
            <img
              src=" http://openweathermap.org/img/wn/10d@2x.png"
              alt="Clear sky"
            />
          </div>
          <div className="col-4 Definitions">
            <ul>
              <li>Max | Min</li>
              <li>Feels like</li>
              <li>Wind</li>
              <li>Humidity</li>
              <li>Pressure</li>
            </ul>
          </div>
          <div className="col-4 Values">
            <ul>
              <li>
                18°C | <span className="min">12°C</span>
              </li>
              <li>15°C</li>
              <li>4 km/h</li>
              <li>86%</li>
              <li>1007 hPa</li>
            </ul>
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
