import React, { useEffect, useState } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";

const DEMO_DEFAULTS_QUERY = gql`
  # Write your query or mutation here
  query Query {
    hello
  }
`;

const ClientsDetail: React.FC = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  const { data: demoDefaults, loading, error: demoDefaultError } = useQuery(
    DEMO_DEFAULTS_QUERY
  );

  console.log(demoDefaults);

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <table>
      <tbody>
        {data.map(({ id, firstName, lastName, email, phone }, index) => (
          <tr key={`tr-${id}-${index}`}>
            <td>{id}</td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{email}</td>
            <td>{phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClientsDetail;
