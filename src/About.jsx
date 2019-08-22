import React from "react";
import { Jumbotron, Container, Row, Col, Button } from "reactstrap";

const About = () => (
  <Jumbotron>
    <Container>
      <Row>
        <Col>
          <h1 style={{ textShadow: "3px 3px 3px #999" }}>Lee M. Raulin</h1>
          <h2>JavaScript/Python Developer</h2>
          {/* <p>
            <Button
              tag="a"
              color="success"
              size="large"
              href="http://reactstrap.github.io"
              target="_blank"
            >
              View Reactstrap Docs
            </Button>
          </p> */}
          <p>
            I am a self-taught programmer (not designer, obviously) with two
            years of experience: one paid as a DoT contractor, and one of
            full-time self-directed study.
          </p>
          <p>
            As a contractor at the DoT, I created a web app with React,
            Node/Express, and Postgres, to be deployed via AWS. I also created
            multiple scripts/apps (in Python, Bash, and Node) to assist the
            cybersecurity team by automating various tasks, processing data and
            sending it to the appropriate people, etc.
          </p>
          <p>
            In a former life, I was an English teacher in Korea for a decade,
            and before that, I was a boatswain's mate in the US Coast Guard. I
            also have a master's degree in psychology.
          </p>
          <p>
            My hobbies include reading (nonfiction), fitness (Indian clubs,
            functional strength, yoga, kayaking, natural movement, etc), and
            camping.`;
          </p>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
);

export default About;
