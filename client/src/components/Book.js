import React from "react";

const Book = props => {
  return (
    <div className="book">
      <h6 className="book-title">{props.title}</h6>
      <span className="book-authors">by {props.authors}</span>
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
        >
          View
        </a>
        <a className="waves-effect waves-light btn">Save</a>
      </div>
    </div>
  );
};

export default Book;
