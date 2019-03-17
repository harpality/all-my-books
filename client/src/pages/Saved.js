import React, { Component } from "react";
import Header from "../components/Header";
import BookResults from "../components/BookResults";
import { runInThisContext } from "vm";

class Saved extends Component {
  state = {
    resultTitle: "Saved Books"
  };

  render() {
    return (
      <div>
        <Header />
        <BookResults title={this.state.resultTitle} />
      </div>
    );
  }
}

export default Saved;
