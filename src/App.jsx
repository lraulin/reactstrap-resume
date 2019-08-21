import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import ReactMarkdown from "react-markdown";

import About from "./About";
import Jumbo from "./Jumbo";
import Resume from "./Resume";
import Projects from "./Projects";

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
              <NavLink href="https://github.com/lraulin">Github</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.linkedin.com/in/leeraulin/">
                LinkedIn
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <BrowserRouter>
        <Route exact path="/" component={Jumbo} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={Projects} />
      </BrowserRouter>
    </div>
  );
};

export default App;
