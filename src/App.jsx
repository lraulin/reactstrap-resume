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

import Routes from "./Routes";

const App = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    console.log(isOpen);
    return setIsOpen(!isOpen);
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
              <NavLink href="/about/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/resume/">Resume</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/projects/">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/lraulin">
                <span className="fab fa-github"></span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.linkedin.com/in/leeraulin/">
                <span class="fab fa-linkedin"></span>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Routes />
    </div>
  );
};

export default App;
