import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lavis" />
        <footer>
          This project was coded by Nevena Ivaštanin and is{" "}
          <a
            href="https://github.com/nevena31/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://mellow-basbousa-824317.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
