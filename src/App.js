import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="WeatherAppWrap">
          <div className="Weather">
            <Weather />
          </div>
          <footer>
            <strong>
              This app was coded by Kaja Królikowska, and is open-sourced on{" "}
              <a
                href="https://github.com/kajakrolikowska/fp-react-weather-app"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>{" "}
              and hosted on{" "}
              <a
                href="https://tourmaline-lebkuchen-5df301.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Netlify
              </a>
              .
            </strong>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
