import axios from "axios";
require("dotenv").config();

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&maxResults=3&key=AIzaSyBlx8WiirxVWdhmsTFiYeEM2QlQq8Nf1U0";

// + process.env.REACT_APP_GOOGLE_BOOKS;

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
