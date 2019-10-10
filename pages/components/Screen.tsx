import React from "react";
import ClientsDetail from "./ClientsDetail";
import ClientsList from "./ClientsList";
import SearchInput from "./SearchInput";
import { Container, Row, Col } from "reactstrap";

const Screen: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col xs="4">
          <SearchInput />
          <ClientsDetail />
        </Col>
        <Col xs="8">
          <ClientsList />
        </Col>
      </Row>
    </Container>
  );
};

export default Screen;
