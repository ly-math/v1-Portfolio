import React, { useState } from "react";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <div className={isClicked ? "header clicked" : "header"}>
        <a href="/" className="logo"></a>
        <div className="bars-icon" onClick={() => setIsClicked(true)}>
          <FontAwesomeIcon icon={faBars} className="bars" />
        </div>
      </div>
      <div className={isClicked ? "links clicked" : "links"}>
        <div className="x-icon" onClick={() => setIsClicked(false)}>
          <FontAwesomeIcon icon={faXmark} className="bars" />
        </div>

        <a href="">{`<About Me/>`}</a>
        <a href="">{`<Skills/>`}</a>
        <a href="">{`<Projects/>`}</a>
        <a href="">{`<Contact/>`}</a>

        <div className="btn-def">
          <a
            href="https://drive.google.com/file/d/1XtTiZr0W5_2fZDbsg6F4unvhRXh9dy_3/view?usp=drive_link"
            target="blank"
          >
            Resume
          </a>
        </div>
      </div>
      <div className="links-desktop">
        <div className="x-icon" onClick={() => setIsClicked(false)}>
          <FontAwesomeIcon icon={faXmark} className="bars" />
        </div>

        <a href="">{`<About Me/>`}</a>
        <a href="">{`<Skills/>`}</a>
        <a href="">{`<Projects/>`}</a>
        <a href="">{`<Contact/>`}</a>

        <div className="btn-def">
          <a
            href="https://drive.google.com/file/d/1XtTiZr0W5_2fZDbsg6F4unvhRXh9dy_3/view?usp=drive_link"
            target="blank"
          >
            Resume
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
