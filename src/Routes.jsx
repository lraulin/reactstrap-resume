import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";

const Routes = () => (
  <BrowserRouter history={window.history} basename={process.env.PUBLIC_URL}>
    <Route exact path="/" component={About} />
    <Route path="/about" component={About} />
    <Route path="/resume" component={Resume} />
    <Route path="/projects" component={Projects} />
  </BrowserRouter>
);

export default Routes;
