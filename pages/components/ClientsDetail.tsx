import React, { useEffect, useState } from "react";

const ClientsDetail: React.FC = props => {
  interface IRecipeProps {
    data?: string[];
  }

  interface IRecipeState {}

  const [data, setData] = useState<any>([]);
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

  console.log(data);

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <tbody>
      {props.data.map(item => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default ClientsDetail;
