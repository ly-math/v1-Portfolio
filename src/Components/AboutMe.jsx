import React from "react";
import "./aboutme.scss";

function AboutMe() {
  return (
    <>
      <h2 className="h2-title" id="about-me">
        <span>{"<"}</span>About Me <span>{"/>"}</span>
      </h2>
      <div className="aboutme-wrap">
        <div className="text">
          <p>
            Hi, My name is <strong>Ly Math.</strong> I've had a passion for
            technology since I was young, and when I discovered coding, I fell
            in love with it. I began my coding journey back in 2022, and since
            then, I've been fascinated by the process of creating websites and
            applications. This fascination led me to pursue a career as a Web
            Developer because I enjoy building things that everyone can see on
            the internet.
          </p>
          <p>
            Currently, I am a student at <strong>Norton University,</strong>{" "}
            pursuing a degree in <strong>Computer Science</strong> (2023-2027).
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
