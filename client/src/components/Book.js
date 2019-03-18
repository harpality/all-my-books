import React from "react";
import Button from "./Button";

const Book = props => {
  console.log(props);
  return (
    <div className="book">
      <h6 className="book-title">{props.title}</h6>
      <span className="book-authors">{props.authors}</span>
      <div className="book-details">
        {props.thumbnail ? (
          <img className="book-img" src={props.thumbnail} alt="" />
        ) : (
          <span />
        )}
        <span className="book-text">{props.description}</span>
      </div>
      <div className="book-btn">
        <a
          href={props.link}
          className="waves-effect waves-light btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          View
        </a>
        {!props.saveBook ? (
          <Button id={props.id} onClick={props.deleteBook}>
            Delete
          </Button>
        ) : (
          <Button onClick={props.saveBook}>Save</Button>
        )}
      </div>
    </div>
  );
};

export default Book;
