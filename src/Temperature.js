import React, { useState } from "react";

export default function Temperature(props) {
  let [unit, setUnit] = useState("celsius");

  function convToF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convToC(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="col-3 Temperature">
        <span className="temp">{Math.round(props.celsius)}</span>
        <span className="unit">
          {" "}
          °C |{" "}
          <a href="/" onClick={convToF}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="col-3 Temperature">
        <span className="temp">{Math.round((props.celsius * 9) / 5 + 32)}</span>
        <span className="unit">
          <a href="/" onClick={convToC}>
            {" "}
            °C{" "}
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
