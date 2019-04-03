import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";


function App() {
  return (
    <div className="App">
      <h1>Want to do something AMAZING??</h1>
      <br/>
      <h3>Want to be a hero??</h3>
      <br/>
      <br/>

    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
