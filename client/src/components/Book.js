import React from "react";

const Book = props => {
  return (
    <div className="book">
      <h6 className="book-title">
        {props.title} by {props.authors}
      </h6>
      <div className="book-details">
        {props.thumbnail ? (
          <img className="book-img" src={props.thumbnail} alt="" />
        ) : (
          <span />
        )}
        <span className="book-text">{props.description}</span>
      </div>
    </div>
  );
};

export default Book;
