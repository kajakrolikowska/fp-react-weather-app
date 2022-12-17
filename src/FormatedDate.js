import React from "react";

export default function FormatedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let date = props.date.getDate();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[props.date.getMonth()];
  let year = props.date.getFullYear();
  let hours = String(props.date.getHours()).padStart(2, "0");
  let minutes = String(props.date.getMinutes()).padStart(2, "0");

  return (
    <ul className="Date">
      <li className="Day">
        {day}, {date} {month} {year}
      </li>
      <li className="Time">
        {hours}:{minutes}
      </li>
    </ul>
  );
}
