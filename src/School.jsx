import React from "react";

const inlineBlock = { display: "inline-block" };
const justifySpaceBetween = { justifyContent: "space-between" };

const School = ({
  schoolUrl = "",
  schoolName = "",
  degree = "",
  city = "",
  bulletPoints = [],
}) => {
  console.log(degree);
  return (
    <div>
      <h3>{degree}</h3>
      <div style={justifySpaceBetween}>
        <a style={inlineBlock} href={schoolUrl}>
          {schoolName}
        </a>
        {city && <p style={inlineBlock}> {" | " + city}</p>}
      </div>
      <ul>
        {bulletPoints.map(point => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default School;
