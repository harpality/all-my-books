import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import BooksContainer from "./components/BooksContainer";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Header />
          <BooksContainer />
        </div>
      </div>
    );
  }
}

export default App;
