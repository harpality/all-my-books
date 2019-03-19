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

  deleteBook = id => {
    console.log(id);
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  componentDidUpdate() {}

  render() {
    return (
      <div>
        <Header />
        <BookResults title={this.state.resultTitle}>
          {this.state.result[0] ? (
            this.state.result.map(result => (
              <Book
                key={result._id}
                title={result.title}
                link={result.link}
                thumbnail={result.image}
                description={result.description}
                saved={result.saved}
                authors={
                  result.authors
                    ? result.authors.map(author => author + ". ")
                    : "Unknown"
                }
                deleteBook={this.deleteBook}
                id={result._id}
              />
            ))
          ) : (
            <h3 className="no-results">Nothing saved yet!</h3>
          )}
        </BookResults>
      </div>
    );
  }
}

export default Saved;
