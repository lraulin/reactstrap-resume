import React, { Component, useState } from "react";
import { NavLink as RRNavLink, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button,
} from "reactstrap";

const App = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    return setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div>
      {/* <Navbar color="inverse" light expand="md"> */}
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Lee M. Raulin</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={RRNavLink} href="/about/">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} href="https://github.com/lraulin">
                Github
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.linkedin.com/in/leeraulin/">
                LinkedIn
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Jumbotron>
        <Container>
          <Row>
            <Col>
              <h1>Lee M. Raulin</h1>
              <h2>JavaScript/Python Developer</h2>
              <p>
                <Button
                  tag="a"
                  color="success"
                  size="large"
                  href="http://reactstrap.github.io"
                  target="_blank"
                >
                  View Reactstrap Docs
                </Button>
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default App;
