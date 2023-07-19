import React from "react";
import { Link } from "react-router-dom";
import LoanWise from "../Assets/loanwise.png";
import Netflix from "../Assets/Netflix.png";
import "../Styles/Projects.css";

const FeaturedProjects = () => {
  return (
    <div className="featured-container">
      <div className="featured-text">
        <h2>
          Featured Projects
          <span className="smiley">💻</span>
        </h2>
      </div>
      <div className="projects">
        <div className="project">
          <div>
            <img
              className="project-snippet"
              src={LoanWise}
              alt="loanwise snippet"
            />
          </div>
          <div className="project-writeup">
            <h3 className="project-heading">Loan Wise</h3>
            <p className="project-text">
              A team of developers, including myself, designers, and data
              scientists worked on this project. This is a user-friendly
              platform that simplifies the loan application process for both
              borrowers and financial institutions.
            </p>
            <ul className="language">
              <li>REACT JS</li>
              <li>CSS</li>
            </ul>
            <div className="visit-site">
              <a
                className="visit-link"
                href="https://loan-wise-dev.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                Visit Site
              </a>
            </div>
          </div>
        </div>
        <div className="demarcation"></div>
        <div className="project">
          <div className="project-writeup">
            <h3 className="project-heading">Netflix Clone</h3>
            <p className="project-text">
              This is one of my first project when I started my training at
              Stutern. This netflix landing page clone was built with HTML and
              CSS and it is responsive on both mobile and desktop.
            </p>
            <ul className="language">
              <li>HTML</li>
              <li>CSS</li>
            </ul>
            <div className="visit-site">
              <a
                className="visit-link"
                href="https://net-clone-project.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Visit Site
              </a>
            </div>
          </div>
          <div>
            <img
              className="project-snippet"
              src={Netflix}
              alt="Netflix snippet"
            />
          </div>
        </div>
      </div>
      <div className="about-link">
        <Link className="about" to="/projects">
          View All Projects
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProjects;
