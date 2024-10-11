import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <>
      <div className="footer-wrap">
        <div className="link">
          <a href="https://github.com/ly-math" target="blank">
            GitHub
            <img src="/v1-Portfolio/github.png" alt="github logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/math-ly-73ba62244/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="blank"
          >
            LinkedIn
            <img src="/v1-Portfolio/linkedin.png" alt="linkedin logo" />
          </a>
        </div>

        <div className="copyright">
          <p>
            Designed and developed by <strong>Ly Math</strong>
          </p>
          <p className="inspired">Inspired by Brittanychiang</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
