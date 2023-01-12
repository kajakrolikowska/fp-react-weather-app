import React from "react";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          Tue
          <div className="WeatherIcon">
            <img
              src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-night.png"
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
