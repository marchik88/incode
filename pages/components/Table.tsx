import React from "react";
import { Table as BootstrapTable } from "reactstrap";

type DataProps = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

type TableProps = {
  data: Array<DataProps>;
  children?: React.ReactNode;
};

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <BootstrapTable>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
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
    </BootstrapTable>
  );
};

export default Table;
