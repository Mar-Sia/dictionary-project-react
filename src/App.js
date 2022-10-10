import React from "react";
import Dictionary from "./Dictionary.js";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header"></header>
        <h1>dictionary</h1>
      </div>
      <Dictionary defaultKeyword="hello" />
      <footer className="App-footer">
        <small>
          This page was coded by Maria Siara and is{" "}
          <a
            href="https://github.com/Mar-Sia/dictionary-project-react"
            target="_blank"
            rel="noreferrer"
          >
            open-source on GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://idyllic-profiterole-8e0002.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </small>
      </footer>
    </div>
  );
}
