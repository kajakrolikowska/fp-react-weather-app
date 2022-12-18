import React from "react";
import FormatedDate from "./FormatedDate";

export default function WeatherInformation(props) {
  return (
    <div className="row WeatherInformation">
      <div className="col-12">
        <FormatedDate date={props.data.date} />
      </div>
      <div className="col-6 Location">
        <h1>{props.data.city}</h1>
      </div>
      <div className="col-3 Icon">
        <img src={props.data.icon} alt={props.data.description} />
      </div>
      <div className="col-3 Temperature">
        <span className="temp">{Math.round(props.data.temperature)}</span>
        <span className="units">°C | °F</span>
      </div>

      <div className="col CurrentConditions">
        <ul>
          <li>Description: {props.data.description}</li>
          <li>Feels like: {Math.round(props.data.feelslike)}°C</li>
          <li>Wind: {Math.round(props.data.wind)} km/h</li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Pressure: {props.data.pressure} hPa</li>
        </ul>
      </div>
    </div>
  );
}
