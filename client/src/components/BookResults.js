import React from "react";

const BookResults = props => {
  return (
    <div className="book-results">
      <h5>{props.title}</h5>
      {props.children}
    </div>
  );
};

export default BookResults;
