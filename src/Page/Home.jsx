import React from "react";
import Header from "../Components/Header";
import Intro from "../Components/Intro";
import AboutMe from "../Components/AboutMe";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Overlay from "../Components/Overlay";

function Home() {
  return (
    <div className="home-container">
      <Header />
      <Intro />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Overlay />
    </div>
  );
}

export default Home;
