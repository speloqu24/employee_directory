import React from "react";

// SEARCH field/form
function SearchEmployee(props) {
  return (
    <form>
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        placeholder="Search"
      />
    </form>
  );
}

export default SearchEmployee;
