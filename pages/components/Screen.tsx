import React from "react";
import ClientsDetail from "./ClientsDetail";
import ClientsList from "./ClientsList";
import SearchInput from "./SearchInput";

const Screen: React.FC = () => {
  return (
    <>
      <ClientsList />
      <ClientsDetail />
      <SearchInput />
    </>
  );
};

export default Screen;
