import React, { useEffect, useState } from "react";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isClicked, setIsClicked] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0); // to track previous scroll position

  const handleScroll = () => {
    const currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
      // Scroll Down
      setIsScrolled(true);
    } else {
      // Scroll Up
      setIsScrolled(false);
    }

    setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // For mobile or negative scrolling
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]); // run effect when lastScrollTop changes

  return (
    <>
      <div className={isClicked ? "header clicked" : "header"}>
        <a href="/" className="logo">
          LY
        </a>
        <div className="bars-icon" onClick={() => setIsClicked(true)}>
          <FontAwesomeIcon icon={faBars} className="bars" />
        </div>
      </div>
      <div className={isClicked ? "links clicked" : "links"}>
        <div className="x-icon" onClick={() => setIsClicked(false)}>
          <FontAwesomeIcon icon={faXmark} className="bars" />
        </div>

        <a href="#about-me">{`<About Me />`}</a>
        <a href="#skills">{`<Skills />`}</a>
        <a href="#projects">{`<Projects />`}</a>
        <a href="#contact">{`<Contact />`}</a>

        <div className="btn-def">
          <a
            href="https://drive.google.com/file/d/1XtTiZr0W5_2fZDbsg6F4unvhRXh9dy_3/view?usp=drive_link"
            target="blank"
          >
            Resume
          </a>
        </div>
      </div>
      <div className={isScrolled ? "nav-desktop scrolled" : "nav-desktop"}>
        <a href="/" className="LY">
          LY
        </a>
        <div className="link-section">
          <a className="spacing"></a>
          <a href="#about-me">{`<About Me />`}</a>
          <a href="#skills">{`<Skills />`}</a>
          <a href="#projects">{`<Projects />`}</a>
          <a href="#contact">{`<Contact />`}</a>
          <div className="btn-def">
            <a
              href="https://drive.google.com/file/d/1XtTiZr0W5_2fZDbsg6F4unvhRXh9dy_3/view?usp=sharing"
              target="blank"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
