import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";

class App extends Component {
  render() {
    return (
      <div className="App">
        Google Books Search
      </div>
    );
  }
}

export default App;
