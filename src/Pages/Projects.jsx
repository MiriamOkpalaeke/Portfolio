import React from "react";
import "../Styles/Projects.css";
import LoanWise from "../Assets/loanwise.png";
import Netflix from "../Assets/Netflix.png";
import Udemy from "../Assets/udemy.png";
import Instagram from "../Assets/Instagram.png";
import TodoApp from "../Assets/TodoApp.png";
import Google from "../Assets/google.png";
import Star from "../Assets/StarWar.png";

const Projects = () => {
  return (
    <div className="featured-container">
      <div className="featured-text">
        <h2>
          Projects
          <span className="smiley">💻</span>
        </h2>
        <p className="projects-text">
          Here are some of the websites and Apps I have built over the course of
          front-end development:
        </p>
      </div>
      <div className="projects-container">
        <div class="slider">
          {/* <a href="#slide-1">1</a>
        <a href="#slide-2">2</a>
        <a href="#slide-3">3</a>
        <a href="#slide-4">4</a>
        <a href="#slide-5">5</a> */}

          <div class="slides">
            <div id="slide-1">
              <div div className="flex-effect">
                <img className="flex-image" src={Udemy} alt="udemy snippet" />
                <p className="flex-heading">Udemy Clone</p>
                <p className="flex-text">
                  A clone of the desktop View of Udemy landing Page.
                </p>
                <ul className="language-2">
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
                <div className="flex-btn">
                  <div className="visit-site">
                    <a
                      className="visit-link"
                      href="https://project-ud-clone.netlify.app//"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit Site
                    </a>
                  </div>
                  <div className="source-code">
                    <div className="visit-site">
                      <a
                        className="visit-link"
                        href="https://github.com/MiriamOkpalaeke/udemy-clone-assignment"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="slide-2">
              <div div className="flex-effect">
                <img
                  className="flex-image"
                  src={Instagram}
                  alt="udemy snippet"
                />
                <p className="flex-heading">Instagram Clone</p>
                <p className="flex-text">
                  A clone of the desktop View of Instagram home page.
                </p>
                <ul className="language-2">
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
                <div className="flex-btn">
                  <div className="visit-site">
                    <a
                      className="visit-link"
                      href="https://insta-clone-assignment.netlify.app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit Site
                    </a>
                  </div>
                  <div className="source-code">
                    <div className="visit-site">
                      <a
                        className="visit-link"
                        href="https://github.com/MiriamOkpalaeke/Insta-clone"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="slide-2">
              <div div className="flex-effect">
                <img
                  className="flex-image"
                  src={LoanWise}
                  alt="loan wise snippet"
                />
                <p className="flex-heading">Loan Wise</p>
                <p className="flex-text">
                  A platform that simplifies the loan application
                </p>
                <ul className="language-2">
                  <li>REACT JS</li>
                  <li>CSS</li>
                </ul>
                <div className="flex-btn">
                  <div className="visit-site">
                    <a
                      className="visit-link"
                      href="https://project-ud-clone.netlify.app//"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit Site
                    </a>
                  </div>
                  <div className="source-code">
                    <div className="visit-site">
                      <a
                        className="visit-link"
                        href="https://github.com/MiriamOkpalaeke/udemy-clone-assignment"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="slide-2">
              <div div className="flex-effect">
                <img className="flex-image" src={Google} alt="udemy snippet" />
                <p className="flex-heading">Udemy Clone</p>
                <p className="flex-text">
                  A clone of the desktop View of Udemy landing Page.
                </p>
                <ul className="language-2">
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
                <div className="flex-btn">
                  <div className="visit-site">
                    <a
                      className="visit-link"
                      href="https://project-ud-clone.netlify.app//"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit Site
                    </a>
                  </div>
                  <div className="source-code">
                    <div className="visit-site">
                      <a
                        className="visit-link"
                        href="https://github.com/MiriamOkpalaeke/udemy-clone-assignment"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="slide-2">
              <div div className="flex-effect">
                <img className="flex-image" src={Netflix} alt="udemy snippet" />
                <p className="flex-heading">Udemy Clone</p>
                <p className="flex-text">
                  A clone of the desktop View of Udemy landing Page.
                </p>
                <ul className="language-2">
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
                <div className="flex-btn">
                  <div className="visit-site">
                    <a
                      className="visit-link"
                      href="https://project-ud-clone.netlify.app//"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit Site
                    </a>
                  </div>
                  <div className="source-code">
                    <div className="visit-site">
                      <a
                        className="visit-link"
                        href="https://github.com/MiriamOkpalaeke/udemy-clone-assignment"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="slide-3">3</div>
            <div id="slide-4">4</div>
            <div id="slide-5">5</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
