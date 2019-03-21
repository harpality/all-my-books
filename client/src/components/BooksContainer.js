import React, { Component } from 'react';
import SearchForm from './SearchForm';
import API from '../utils/API';
import BookResults from './BookResults';
import Book from './Book';

// contains the logic for the search field and API calls for GET/POST

class BooksContainer extends Component {
  state = {
    result: [],
    search: '',
    resultTitle: 'Results'
  };

  searchBooks = query => {
    API.search(query)
      .then(res =>
        this.setState({
          result: res.data.items,
          search: '',
          resultTitle: `Showing results for '${query}':`
        })
      )
      .catch(err => console.log(err));
  };

  saveBook = event => {
    event.preventDefault();
    const target = event.target.parentNode.parentNode;
    API.saveBook({
      title: target.querySelector('h6').textContent,
      authors: target.querySelector('.book-authors').textContent,
      description: target.querySelector('.book-text').textContent,
      image: target.querySelector('img').src,
      link: target.querySelector('a').href,
      saved: true
    }).then(res => console.log(res));
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
  };

  render() {
    return (
      <div>
        <SearchForm
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <BookResults title={this.state.resultTitle}>
          {this.state.result ? (
            this.state.result.map(result => (
              <Book
                key={result.id}
                title={result.volumeInfo.title}
                link={result.volumeInfo.infoLink}
                thumbnail={
                  result.volumeInfo.imageLinks
                    ? result.volumeInfo.imageLinks.thumbnail
                    : null
                }
                description={result.volumeInfo.description}
                authors={
                  result.volumeInfo.authors
                    ? result.volumeInfo.authors.map(author => author + '. ')
                    : 'Unknown'
                }
                saveBook={this.saveBook}
              />
            ))
          ) : (
            <h3 className="no-results">No results!</h3>
          )}
        </BookResults>
      </div>
    );
  }
}

export default BooksContainer;
