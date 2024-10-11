import React from "react";
import "./Intro.scss";
import html from "../assets/html.png";
import css from "../assets/css.png";
import sass from "../assets/sass.png";
import js from "../assets/js.png";
import ts from "../assets/ts.png";
import reactjs from "../assets/reactjs.png";

function Intro() {
  return (
    <>
      <div className="intro-wrap">
        <h1>Hi, My name is</h1>
        <div className="name">
          <h2>Ly Math </h2>
          <span id="slash">/ </span>
          <h2 className="khmer"> ម៉ាត់​ លី</h2>
        </div>
        <h3>I'm a front-end Developer</h3>
        <p>
          Passionate about crafting seamless user experiences through elegant
          design and innovative code. Currently, I am a student at Norton
          University in Phnom Penh.
        </p>
        <div className="logos">
          <div className="slider">
            <img src={html} alt="html logo" />
            <img src={css} alt="css logo" />
            <img src={sass} alt="sass logo" />
            <img src={js} alt="js logo" />
            <img src={ts} alt="ts logo" />
            <img src={reactjs} alt="react logo" />
          </div>
          <div className="slider">
            <img src={html} alt="html logo" />
            <img src={css} alt="css logo" />
            <img src={sass} alt="sass logo" />
            <img src={js} alt="js logo" />
            <img src={ts} alt="ts logo" />
            <img src={reactjs} alt="react logo" />
          </div>
          <div className="slider">
            <img src={html} alt="html logo" />
            <img src={css} alt="css logo" />
            <img src={sass} alt="sass logo" />
            <img src={js} alt="js logo" />
            <img src={ts} alt="ts logo" />
            <img src={reactjs} alt="react logo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
