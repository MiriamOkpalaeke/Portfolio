import React from "react";
import "../Styles/Footer.css";
import "../Styles/Theme.css";

const Footer = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className={`footer-container ${darkMode ? "dark-mode" : ""}`}>
      <h3>Contact Me 💬</h3>
      <p>Get in touch with me via email or socials.</p>
      <div className="demarcation2"></div>
      <div className="contact">
        <div className="email-container">
          <a className="email-link" href="mailto:miriam.okpalaeke@gmail.com">
            Miriam.Okpalaeke@gmail.com
          </a>
        </div>

        <div className="social-media">
          <a
            className="social-link"
            href="https://github.com/MiriamOkpalaeke"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github fa-2xl"></i>
          </a>
          <a
            className="social-link"
            href="https://www.linkedin.com/in/miriam-chinonso-umunnakwe-okpalaeke"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin fa-2xl"></i>
          </a>
          <a
            className="social-link"
            href="https://twitter.com/MiriamOkpalaeke"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-square-twitter fa-2xl"></i>
          </a>
          <a
            className="social-link"
            href="https://www.instagram.com/mireille_nonso/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-square-instagram fa-2xl"></i>
          </a>
        </div>
      </div>
      <div className="demarcation2"></div>
      <div className="copyright">
        Designed & built by Miriam Okpalaeke © 2023
      </div>
    </div>
  );
};

export default Footer;
