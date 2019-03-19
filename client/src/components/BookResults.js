import React from "react";

// results div to hold books

const BookResults = props => {
  return (
    <section className="book-results">
      <h5>{props.title}</h5>
      {props.children}
    </section>
  );
};

export default BookResults;
