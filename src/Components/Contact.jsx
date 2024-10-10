import React from "react";
import "./contact.scss";

function Contact() {
  return (
    <>
      <h2 className="h2-title">
        <span>{"<"}</span>Contact <span>{"/>"}</span>
      </h2>
      <div className="contact-wrap">
        <div className="email-me">
          <div className="social-media"></div>
          <p className="text">
            I'm currently available and open to new opportunities! Whether you
            have a project in mind, need assistance with web development, or
            just want to say hello, feel free to reach out. I'll get back to you
            as soon as possible. {`<3`}
          </p>
          <div className="btn-def">
            <a href="mailto:leeinnit0@gmail.com" target="blank">
              Email me!
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
