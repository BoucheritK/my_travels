import React, { Component } from "react";

import "./App.css";

import Travel from "./Travel";

import Travels from "./Travels";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">        
          <h1 className="App-title">Traveling</h1>
        </header>
        <Travel />
      </div>

    );
  }
}

export default App;