import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "aco5b5a5f063d77c9b366418et20e71f";
  let city = props.city;
  let url = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(url).then(handleResponse);

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
