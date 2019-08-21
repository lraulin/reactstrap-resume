import React from "react";
import { Jumbotron, Container, Row, Col, Button } from "reactstrap";

const Jumbo = () => (
  <Jumbotron>
    <Container>
      <Row>
        <Col>
          <h1>Lee M. Raulin</h1>
          <h2>JavaScript/Python Developer</h2>
          {/* <p>
            <Button
              tag="a"
              color="success"
              size="large"
              href="http://reactstrap.github.io"
              target="_blank"
            >
              View Reactstrap Docs
            </Button>
          </p> */}
        </Col>
      </Row>
    </Container>
  </Jumbotron>
);

export default Jumbo;
