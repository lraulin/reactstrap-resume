import React from "react";

const inlineBlock = { display: "inline-block" };
const justifySpaceBetween = { justifyContent: "space-between" };

const months = [
  "",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const formatDate = (date = "") => {
  if (date) {
    if (typeof date === "number") {
      date = date.toString();
    }
    date = new Date(...date.split("-"));
    return `${months[date.getMonth()].slice(0, 3)} ${date.getFullYear()}`;
  } else {
    return "";
  }
};

console.log(formatDate(2004));

const dateRange = (start, stop) => {
  [start, stop] = [start, stop].map(x => formatDate(x));
  if (start && stop) {
    return `${start} ~ ${stop}`;
  } else if (start) {
    return start;
  } else if (stop) {
    return stop;
  } else {
    return null;
  }
};

const School = ({
  schoolName = "",
  schoolUrl = "",
  degree = "",
  degreeUrl = "",
  city = "",
  bulletPoints = [],
  startDate = "",
  date = "",
}) => {
  const dateText = dateRange(startDate, date);
  console.log(dateText);
  return (
    <div>
      <div className="line1">
        {/* if (there is a degree url): make the header a link */}
        {degreeUrl && (
          <h3 style={{ textAlign: "left", float: "left" }}>
            <a href={schoolUrl}>{degree}</a>
          </h3>
        )}
        {/* else: no link, just header */}
        {!degreeUrl && (
          <h3 style={{ textAlign: "left", float: "left" }}>{degree}</h3>
        )}

        {/* date(s) if any */}
        {(date || startDate) && (
          <p style={{ textAlign: "right", float: "right" }}>{dateText}</p>
        )}
      </div>
      <div className="line2" style={{ clear: "both" }}>
        {/* SCHOOL NAME */}
        <a style={{ textAlign: "left", float: "left" }} href={schoolUrl}>
          {schoolName}
        </a>

        {/* city, if exists */}
        {city && (
          <p className="city" style={{ textAlign: "right", float: "right" }}>
            {" "}
            {city}
          </p>
        )}
      </div>
      <ul style={{ clear: "both" }}>
        {bulletPoints.map(point => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default School;
