import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div className="container">
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
