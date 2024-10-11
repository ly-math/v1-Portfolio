import React from "react";
import "./skills.scss";

function Skills() {
  return (
    <>
      <h2 className="h2-title" id="skills">
        <span>{"<"}</span>Skills <span>{"/>"}</span>
      </h2>
      <div className="skills-wrap">
        <div className="section-container">
          <div className="section-one">
            <h3>Languages</h3>
            <div className="child">
              <p>HTML</p>
              <p>CSS</p>
              <p>Javascript</p>
              <p>Typescript</p>
              <p>C++</p>
            </div>
          </div>
          <div className="section-two">
            <h3>Tools & Other</h3>
            <div className="child">
              <p>React Js</p>
              <p>SASS</p>
              <p>Git</p>
              <p>Github</p>
              <p>Vscode</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
