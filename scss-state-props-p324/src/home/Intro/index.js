import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./index.scss";

function Intro({ counter, number }) {
  React.useEffect(() => {
    console.log("Salam P324");
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={6} md={8}>
          <h2>Salam</h2>
        </Col>
        <Col xs={6} md={4}>
          <h2>P324</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default Intro;
