import React from "react";
import Avatar from "../Assets/MiriamAvatar-removebg-preview.png";
import "../Styles/HeroPage.css";

const HeroPage = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className={`heroPage-container ${darkMode ? "dark-mode" : ""}`}>
      <div className="container-2">
        <div className="avatar">
          <img className=" avatar-img" src={Avatar} alt="Miriam avatar" wid />
        </div>

        <h1>Front-End Web Developer</h1>
        <p className="heroPage-para">
          I love building user-friendly, responsive and interactive website.
        </p>
      </div>

      <div className="effect-container"></div>
    </div>
  );
};

export default HeroPage;
