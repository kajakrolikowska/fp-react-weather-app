import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import Forecast from "./Forecast";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return <Forecast />;
  } else {
    let apiKey = "aco5b5a5f063d77c9b366418et20e71f";
    let city = props.city;
    let url = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);

    return null;
  }
}
