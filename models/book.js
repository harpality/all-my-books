const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// defining a scheme for saved books within mongo db

const bookSchema = new Schema({
  title: { type: String, required: true, unique: true },
  authors: { type: [String], required: true },
  description: String,
  image: { type: String },
  link: { type: String },
  saved: { type: Boolean, default: true }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
