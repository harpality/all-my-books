import axios from "axios";

// using axios to make calls to the API and the backend server to load, save, and delete books

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = `&key=${process.env.REACT_APP_GOOGLE_BOOKS}`;

export default {
  // gets books from google books api
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  },
  // gets saved books from db
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // save a book to db
  saveBook: function(book) {
    return axios.post("/api/books", book);
  },
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};
