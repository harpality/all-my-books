import axios from "axios";
require("dotenv").config();

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&maxResults=8&key=";

// + process.env.REACT_APP_GOOGLE_BOOKS;

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
