import React from "react";
import Bar from "./Bar";
import "./App.css";

import Routes from "./Routes";

const App = props => {
  return (
    <div>
      <Bar />
      <div id="content">
        <Routes />
      </div>
    </div>
  );
};

export default App;
