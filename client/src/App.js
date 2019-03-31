import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Saved from './pages/Saved';
import Search from './pages/Search';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Bookshelf from './components/Bookshelf';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Navbar />
          <Bookshelf />
          <main className="container">
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
