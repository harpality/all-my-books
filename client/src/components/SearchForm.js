import React from "react";

const SearchForm = props => {
  return (
    <form>
      <div className="search-form">
        <h5>Book Search</h5>
        <div className="input-field">
          <input
            onChange={props.handleInputChange}
            value={props.value}
            type="text"
            name="search"
            placeholder="Enter Book Here"
          />
        </div>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="submit"
          onClick={props.handleFormSubmit}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
