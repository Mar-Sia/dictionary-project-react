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
        <small>This page was coded by Maria Siara</small>
      </footer>
    </div>
  );
}
