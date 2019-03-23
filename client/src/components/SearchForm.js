import React from 'react';

const SearchForm = props => {
  return (
    <form>
      <section className="search-form">
        <h5>Book Search</h5>

        <div className="input-field">
          <input
            onChange={props.handleInputChange}
            value={props.value}
            type="text"
            name="search"
            aria-label="search"
            placeholder="Enter Book Here"
          />
        </div>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="submit"
          onClick={props.handleFormSubmit}>
          Search
        </button>
      </section>
    </form>
  );
};

export default SearchForm;
