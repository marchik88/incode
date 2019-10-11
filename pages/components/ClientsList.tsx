import React, { useEffect, useState } from "react";
// import { gql } from "apollo-boost";
// import { useQuery } from "react-apollo";
import Table from "./Table";
import SearchInput from "./SearchInput";

// const DEMO_DEFAULTS_QUERY = gql`
//   # Write your query or mutation here
//   query Query {
//     hello
//   }
// `;

type DataProps = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

const useSearch = (data: any) => {
  const [search, setSearch] = React.useState("");
  const [sort, setSort] = React.useState([]);

  const onSearchChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setSearch(value);
    data &&
      setSort(
        data.filter((item: DataProps) => item.firstName.includes(search))
      );
  };

  return {
    sort,
    search,
    onSearchChange
  };
};

const ClientsList: React.FC = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { search, onSearchChange, sort } = useSearch(data);

  async function fetchMyAPI() {
    const response = await fetch(
      `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
    );
    const data = await response.json();

    setData(data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchMyAPI();
  }, []);

  // const { data: demoDefaults, loading, error: demoDefaultError } = useQuery(
  //   DEMO_DEFAULTS_QUERY
  // );

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <>
      <SearchInput onSearchChange={onSearchChange} search={search} />
      <Table
        data={data.filter((item: DataProps) =>
          Object.values(item).some((value: string | number) =>
            value.toString().includes(search)
          )
        )}
      />
    </>
  );
};

export default ClientsList;
