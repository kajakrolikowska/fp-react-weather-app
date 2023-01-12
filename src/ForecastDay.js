import React from "react";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];

    return day;
  }
  return (
    <div className="text-center">
      <span className="WeekDay">{day()}</span>
      <div className="WeatherIcon">
        <img
          src={props.data.condition.icon_url}
          alt={props.data.condition.description}
          width="50"
        />
      </div>
      <span className="DailyTempMax">
        {Math.round(props.data.temperature.maximum)}° {""}
      </span>
      <span className="DailyTempMin">
        {Math.round(props.data.temperature.minimum)}°
      </span>
    </div>
  );
}
