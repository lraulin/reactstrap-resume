import React from "react";

const Projects = props => {
  return (
    <div>
      <h1>Projects</h1>
      <p>{props.location.pathname}</p>
      <img
        src="http://southvault.com/wp-content/uploads/2018/09/Construction-Site-Security.jpg"
        alt="construction"
      />
    </div>
  );
};

export default Projects;
