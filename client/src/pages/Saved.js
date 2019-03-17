import React, { Component } from "react";
import Header from "../components/Header";
import BookResults from "../components/BookResults";
import Book from "../components/Book";
import API from "../utils/API";

class Saved extends Component {
  state = {
    resultTitle: "Saved Books",
    result: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getSavedBooks()
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  deleteBook = data => {
    console.log(data);
    // API.deleteBook(id);
  };

  componentDidUpdate() {
    console.log(this.state.result[0]._id);
  }

  render() {
    return (
      <div>
        <Header />
        <BookResults title={this.state.resultTitle}>
          {this.state.result.map(result => (
            <Book
              key={result._id}
              title={result.title}
              link={result.link}
              thumbnail={result.image}
              description={result.description}
              authors={
                result.authors
                  ? result.authors.map(author => author + " ")
                  : "Unknown"
              }
              deleteBook={this.deleteBook}
              id={result._id}
            />
          ))}
        </BookResults>
      </div>
    );
  }
}

export default Saved;
