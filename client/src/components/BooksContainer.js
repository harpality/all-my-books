import React, { Component } from "react";
import SearchForm from "./SearchForm";
import API from "../utils/API";
import BookResults from "./BookResults";
import Book from "./Book";

class BooksContainer extends Component {
  state = {
    result: [],
    search: ""
  };

  componentDidUpdate() {
    console.log(this.state.result);
  }

  searchBooks = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data.items }))
      .catch(err => console.log(err));
    this.setState({ search: "" });
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
    // console.log(this.state.search);
  };

  render() {
    return (
      <div>
        <SearchForm
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <BookResults>
          {this.state.result.map(result => (
            <Book key={result.id} title={result.volumeInfo.title} />
          ))}
        </BookResults>
      </div>
    );
  }
}

export default BooksContainer;
