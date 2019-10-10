import React, { useState } from "react";
import { InputGroup, Input } from "reactstrap";

type SearchProps = {
  onSearchChange: (e: React.FormEvent<HTMLInputElement>) => void;
  search: string;
};

const SearchInput: React.FC<SearchProps> = ({ onSearchChange, search }) => {
  return (
    <div className="searchbar form-group">
      <InputGroup>
        <Input
          value={search}
          type="text"
          className="form-control"
          placeholder="Search people..."
          onChange={onSearchChange}
        />
      </InputGroup>
    </div>
  );
};

export default SearchInput;
