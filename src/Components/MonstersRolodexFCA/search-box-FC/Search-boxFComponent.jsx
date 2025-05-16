import React from "react";

const SearchBoxFC = ({ onChangeHandler, placeholder, className }) => {
  return (
    <>
      <input
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
        className={className}
      />
    </>
  );
};
export default SearchBoxFC;
