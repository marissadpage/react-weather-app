import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="New York"/>
      <footer>
        This project was coded by <a href="https://www.linkedin.com/in/marissa-page-a656bb179/"> Marissa Page </a> and is {" "}
      <a 
      href="https://github.com/marissadpage/react-weather-app" 
      target="_blank"
      >
       open-sourced on GitHub 
       </a> {" "}
          and{" "}
          <a
            href="https://romantic-noyce-de948c.netlify.app"
            target="_blank"
          >
            hosted on Netlify
          </a>
      </footer>
      </div>
    </div>
  );
}