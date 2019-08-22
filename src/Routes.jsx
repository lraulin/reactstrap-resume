import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";

console.log("***THE URL IS:***");
console.log(process.env.PUBLIC_URL);

const fullPath = path => `${process.env.PUBLIC_URL}/${path}`;

const Routes = () => (
  <BrowserRouter>
    <Route exact path={fullPath("/")} component={About} />
    <Route path={fullPath("/about")} component={About} />
    <Route path={fullPath("/resume")} component={Resume} />
    <Route path={fullPath("/projects")} component={Projects} />
  </BrowserRouter>
);

export default Routes;
