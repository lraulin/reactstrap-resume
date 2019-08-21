import React from "react";
import ReactMarkdown from "react-markdown";

const md = `# About Me

I am a self-taught programmer with two years of experience: one paid as a DoT contractor, and one of full-time self-directed study.

JavaScript/Python developer. As a contractor at the DoT, I created a web app with React, Node/Express, and Postgres, to be deployed via AWS. I also created multiple scripts/apps (in Python, Bash, and Node) to assist the cybersecurity team by automating various tasks, processing data and sending it to the appropriate people, etc.

In a former life, I was an English teacher in Korea for a decade, and before that, I was a boatswain's mate in the US Coast Guard. I also have a master's degree in psychology.

My hobbies include reading (nonfiction), fitness (Indian clubs, functional strength, yoga, kayaking, natural movement, etc), and camping.`;

const About = props => {
  return (
    <div>
      <ReactMarkdown source={md} />
    </div>
  );
};

export default About;
