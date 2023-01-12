import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  function handleResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="Forecast text-center">
        <div className="row">
          {forecast.daily.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
        <hr />
      </div>
    );
  } else {
    let apiKey = "aco5b5a5f063d77c9b366418et20e71f";
    let city = props.city;
    let url = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);

    return null;
  }
}
