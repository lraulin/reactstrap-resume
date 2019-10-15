import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Bar = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    console.log(isOpen);
    return setIsOpen(!isOpen);
  };
  return (
    <Navbar color="dark" dark expand="md" fixed="top">
      <NavbarBrand href="/">Lee M. Raulin</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/about/">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/resume/">Resume</NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink href="/projects/">Projects</NavLink>
          </NavItem> */}
          <NavItem>
            <NavLink href="https://github.com/lraulin">
              <i className="fab fa-github"></i>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.linkedin.com/in/leeraulin/">
              <i className="fab fa-linkedin"></i>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://app.pluralsight.com/profile/lee-raulin">
              <i className="fas fa-play-circle"></i>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.freecodecamp.org/lraulin">
              <i className="fab fa-free-code-camp"></i>
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Bar;
