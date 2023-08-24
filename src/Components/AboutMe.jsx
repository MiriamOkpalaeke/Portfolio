import React from "react";
import { Link } from "react-router-dom";
import "../Styles/About.css";
import "../Styles/Theme.css";
import { motion } from "framer-motion";

const AboutMe = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className={`About-snippet ${darkMode ? "dark-mode" : ""}`}>
      <div className="snippet-text">
        <h2>
          Hello, I'm Miriam Okpalaeke
          <span className="smiley">🙂</span>
        </h2>
        <p>I transitioned to tech in October 2022 as a front-end developer.</p>
        <p>
          My enthusiasm for learning front-end development was stoked by my
          appreciation of websites that are aesthetically pleasing, engaging,
          and user-friendly.
        </p>
        {/* <div className="about-link">
          <Link className="about" to="/about">
            More About Me
          </Link>
        </div> */}
      </div>
      <motion.div
        className={`about-link ${darkMode ? "dark-mode" : ""}`}
        whileHover={{ scale: 1.1 }}
      >
        <Link className={`about ${darkMode ? "dark-mode" : ""}`} to="/about">
          More About Me
        </Link>
      </motion.div>
    </div>
  );
};

export default AboutMe;
