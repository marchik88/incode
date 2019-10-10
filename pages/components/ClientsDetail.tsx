import React from "react";
import { Container, Table } from "reactstrap";

const ClientsDetail: React.FC = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th></th>
        </tr>
        <tr>
          <th>First Name</th>
          <th></th>
        </tr>
        <tr>
          <th>Last Name</th>
          <th></th>
        </tr>
        <tr>
          <th>Email</th>
          <th></th>
        </tr>
        <tr>
          <th>Phone</th>
          <th></th>
        </tr>
      </thead>
    </Table>
  );
};

export default ClientsDetail;
