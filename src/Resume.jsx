import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Jumbotron,
  Row,
} from "reactstrap";
import School from "./School";
import "./Resume.css";

const keywords = [
  "working with command lines",
  "writing modules",
  "version control systems",
  "DevOps practices",
  "responsive design",
  "agile software development",
  "front-end systems",
  "debugging",
  "server-side scripting",
  "writing application code",
  "object-oriented design",
  "technical documentation",
  "SQL",
  "JavaScript",
  "software engineering",
  "Python",
  "C#",
  "ASP.NET",
  "MVC",
  "MVVM",
];

const centered = {
  margin: "auto",
};

const popup = () => alert("Not yet implemented!");

const Resume = props => {
  const [dropDownIsOpen, setDropDownIsOpen] = useState(false);
  const toggleDropDown = () => setDropDownIsOpen(!dropDownIsOpen);
  const formats = ["pdf", "docx", "odt", "md", "yaml"];
  const [selectedFormat, setSelectedFormat] = useState(formats[0]);

  return (
    <Jumbotron>
      <Container>
        <Row>
          <Col>
            <Dropdown
              style={{ display: "inline" }}
              isOpen={dropDownIsOpen}
              toggle={toggleDropDown}
            >
              <DropdownToggle caret>{selectedFormat}</DropdownToggle>
              <DropdownMenu>
                {formats.map(f => (
                  <DropdownItem onClick={() => setSelectedFormat(f)} key={f}>
                    {f}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Button style={{ display: "inline" }} onClick={popup}>
              Download
            </Button>
            <article id="resume">
              <header>
                <h1>Lee M. Raulin</h1>
                <p className="subtitle" style={{ centered }}>
                  Full Stack Web Developer
                </p>
              </header>
              <section id="contactSection">
                <span className="contactInfo phoneNumber">
                  <i className="fas fa-mobile-alt"></i> (443) 684-8939
                </span>
                <span className="contactInfo emailAddress">
                  <a href="mailto:leeraulin@gmail.com">
                    <i className="fas fa-envelope-square"></i>{" "}
                    leeraulin@gmail.com
                  </a>
                </span>
                <span className="contactInfo streetAddress">
                  <a href="https://www.google.com/maps/place/Chesapeake+Beach">
                    <i className="fas fa-map-marked-alt"></i> Chesapeake Beach,
                    MD
                  </a>
                </span>
              </section>
              <section id="summarySection">
                <h2>Summary</h2>
                <p>
                  Dedicated and disciplined self-taught programmer 8+ years of
                  experience as an English as a Second Language teacher in Korea
                  and one year of experience as a web developer working under
                  contract for the US Department of Transportation.
                </p>
                <p>
                  Extremely motivated and passionate life-long learner. Have
                  been using Linux as primary operating system for almost a
                  decade. Learned Python as a hobby, and learned how to use Vim
                  because it seemed neat. After deciding to become a programmer,
                  I spent a year of full-time practice/self-study before being
                  accepted by WOS. In the year since then, my skills with
                  JavaScript and Python have continued to develop, as I have
                  become familiar with the languages in depth and used them to
                  create solutions to real-world problems.
                </p>
              </section>
              <section className="keywords">
                <p>
                  <em>Keywords:</em>
                  {" " + keywords.join(", ")}
                </p>
              </section>
              <section id="technicalSkillsSection">
                <h2>Technical Skills</h2>
                <em>Front End</em>
                <ul>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
                <em>Back End</em>
                <ul>
                  <li>Python</li>
                  <li>PostgreSQL</li>
                  <li>C#</li>
                  <li>ASP.NET</li>
                </ul>
                <em>Misc</em>
                <ul>
                  <li>Unix/Linux command line (CLI)</li>
                  <li>Git/Github</li>
                  <li>Linux/Windows/OSX</li>
                </ul>
              </section>
              <section id="experienceSection">
                <h2>Professional Experience</h2>
                <p className="company-and-title">
                  <a href="https://www.wforce.org/">
                    Workforce Opportunity Services
                  </a>{" "}
                  Full Stack Web Developer
                </p>
                <p className="dateRange">
                  <time dateTime="2018-11">November 2018</time>
                  {" ~ "}
                  <time dateTime="2019-09">September 2019</time>
                </p>
                <p className="federalOnly" style={{ display: "none" }}>
                  $60,000, 40 hours/week
                </p>
                <p className="jobDescription">
                  Contractor at the US Department of Transportation (Office of
                  the Secretary of the Treasury).
                </p>
                <ul>
                  <li>
                    Developed, designed, coded, debugged, and documented one web
                    application and multiple console applications.
                  </li>
                  <li>
                    Collaborated with cyber security team to automate security
                    practices/policy compliance.
                  </li>
                </ul>
                <h3>Projects</h3>
                <ul>
                  <li>
                    <p>
                      <a href="/projects/incident-map">
                        Twitter Incident Report Map
                      </a>{" "}
                      Reverse-engineered and reconstructed an app (with access
                      only to the front-end code) using JavaScript (ES6), React,
                      Redux, AWS (E2, RDS, S5), PostgreSQL, Mapbox, etc.
                      Deployed to Firebase, AWS, and Vultr (cloud VM) as staging
                      environment. Calculated projected costs and prepared
                      budget proposal for AWS infrastructure, which was
                      accepted.
                    </p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <p>
                      <a href="/projects/dns-script">DNS Script</a> Coded a
                      NodeJS/SQLite console app that automated checking hundreds
                      of DNS servers every hour and emailing a daily summary of
                      any discrepancies. Deployed to a government BIND (Linux)
                      server.
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="/projects/vulnerability-visualization">
                        Vulnerability Visualization
                      </a>{" "}
                      Programmed a Python script that triggers on receipt of an
                      email by a MS 365 account containing a report on security
                      vulnerabilities. It extracts files attached to the PDF
                      file attached to the email, reformats the spreadsheets,
                      including calculated values, and emails them to a
                      distribution list.
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="/projects/syslog_analytics">Syslog Analytics</a>{" "}
                      Composed Python script to parse/reformat spreadsheet files
                      to support cyber team.
                    </p>
                  </li>
                  <li>
                    Advised and tutored coworkers in Bash and Python scripting
                    and Linux/Unix command-line (CLI).
                  </li>
                </ul>
                {/* Supervisor: Dan Morgan (202) 366-4308
      [daniel.morgan@dot.gov](mailto:daniel.morgan@dot.gov)  */}
                <h3>
                  After-school English Academies (Various) | English Language
                  Instructor (ESL/EFL)
                </h3>
                <p>
                  <time dateTime="2009">2009</time> ~{" "}
                  <time dateTime="2017">2017</time>{" "}
                </p>
                <h2>Education</h2>{" "}
                <School
                  degree="JavaScript Algorithms and Data Structures Developer Certification"
                  schoolName="freeCodeCamp"
                  degreeUrl="https://www.freecodecamp.org/certification/lraulin/javascript-algorithms-and-data-structures"
                  schoolUrl="https://www.freecodecamp.org"
                  bulletPoints={[
                    "represents approximately 300 hours of coursework",
                  ]}
                  date="2019-08-16"
                />
                <School
                  degree="Front End Development Certification (Legacy)"
                  schoolName="freeCodeCamp"
                  degreeUrl="https://www.freecodecamp.org/certification/lraulin/legacy-front-end"
                  schoolUrl="https://www.freecodecamp.org"
                  bulletPoints={[
                    "10 front-end projects",
                    "approximately 400 hours of coursework",
                  ]}
                  date="2017-06-03"
                />
                <School
                  degree="Master of Arts in General Psychology"
                  schoolName="Northcentral University"
                  schoolUrl="https://www.ncu.edu/"
                  bulletPoints={["Courses in statistics and research methods."]}
                  date="2013"
                />
                <School
                  degree="Batchelor of Arts in Psychology"
                  schoolName="St. Mary's College of Maryland"
                  city="St. Mary's City, MD"
                  schoolUrl="https://www.smcm.edu"
                  bulletPoints={[]}
                />
              </section>
            </article>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Resume;
