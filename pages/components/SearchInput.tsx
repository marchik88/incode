import React, { useState } from "react";

const SearchInput: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  const onChangeHandler = (event: React.SyntheticEvent) => {
    // setInputValue(event.target.value);
    console.log(event);
  };

  return (
    <div className="searchbar form-group">
      <input
        value={inputValue}
        type="text"
        className="form-control"
        placeholder="Search people by name..."
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchInput;
