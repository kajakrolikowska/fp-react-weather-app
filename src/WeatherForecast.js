import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          Tue
          <div className="WeatherIcon">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-night.png"
              alt="light rain"
              width="50"
            />
          </div>
          <span className="DailyTempMax">19° </span>
          <span className="DailyTempMin">10°</span>
        </div>
      </div>
      <hr />
    </div>
  );
}
