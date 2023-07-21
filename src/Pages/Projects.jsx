import React from "react";
import "../Styles/Projects.css";
import LoanWise from "../Assets/loanwise.png";
import Netflix from "../Assets/Netflix.png";
import Udemy from "../Assets/udemy.png";
import Instagram from "../Assets/Instagram.png";
import TodoApp from "../Assets/TodoApp.png";
import Google from "../Assets/google.png";
import Star from "../Assets/StarWar.png";
import contact from "../Assets/contactform.png";

const Projects = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className={`featured-container ${darkMode ? "dark-mode" : ""}`}>
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
          <div class="slides">
            <div id="slide-1">
              <div div className="flex-effect">
                <img className="flex-image" src={Udemy} alt="udemy snippet" />
                <p className="flex-heading">Udemy Clone</p>
                <p className="flex-text">
                  The desktop View of Udemy Home Page.
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
                  alt="instagram snippet"
                />
                <p className="flex-heading">Instagram Clone</p>
                <p className="flex-text">
                  The desktop View of Instagram home page.
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
            <div id="slide-1">
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
                      href="https://loan-wise-dev.netlify.app"
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
                        href="https://github.com/t1-loanwise/loan-wise-Group1-Team1A"
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
                <img className="flex-image" src={Google} alt="google snippet" />
                <p className="flex-heading">Google search Clone</p>
                <p className="flex-text">
                  The desktop view of Google when Messi is searched.
                </p>
                <ul className="language-2">
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
                <div className="flex-btn">
                  <div className="visit-site">
                    <a
                      className="visit-link"
                      href="https://google-search-site-project.netlify.app"
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
                        href="https://github.com/MiriamOkpalaeke/google-project"
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
                  src={Netflix}
                  alt="netflix snippet"
                />
                <p className="flex-heading">Netflix Clone</p>
                <p className="flex-text">
                  A clone of the home page of Netflix website.
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
                        href="https://github.com/MiriamOkpalaeke/Netflix-clone"
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
            <div id="slide-3">
              <div id="slide-1">
                <div div className="flex-effect">
                  <img
                    className="flex-image"
                    src={Star}
                    alt="starwars snippet"
                  />
                  <p className="flex-heading">Star Wars </p>
                  <p className="flex-text">
                    A clone of the star wars page by fetching data from an API.
                  </p>
                  <ul className="language-2">
                    <li>REACT</li>
                    <li>CSS</li>
                  </ul>
                  <div className="flex-btn">
                    <div className="visit-site">
                      <a
                        className="visit-link"
                        href="shttps://mi-starwars-api-task.netlify.app"
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
                          href="https://github.com/MiriamOkpalaeke/Starwars-film-API-Assignment"
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
            </div>
            <div id="slide-4">
              <div id="slide-1">
                <div div className="flex-effect">
                  <img
                    className="flex-image"
                    src={contact}
                    alt="udemy snippet"
                  />
                  <p className="flex-heading">Contact Form</p>
                  <p className="flex-text">
                    A contact form created using 3rd party library formik.
                  </p>
                  <ul className="language-2">
                    <li>REACT</li>
                    <li>CSS</li>
                  </ul>
                  <div className="flex-btn">
                    <div className="visit-site">
                      <a
                        className="visit-link"
                        href="https://contact-form-react-mimi.netlify.app"
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
                          href="https://github.com/MiriamOkpalaeke/contact-form-react"
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
            </div>
            <div id="slide-5">
              <div id="slide-1">
                <div div className="flex-effect">
                  <img
                    className="flex-image"
                    src={TodoApp}
                    alt="udemy snippet"
                  />
                  <p className="flex-heading">Todo APP</p>
                  <p className="flex-text">A simple Todo list App.</p>
                  <ul className="language-2">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                  </ul>
                  <div className="flex-btn">
                    <div className="visit-site">
                      <a
                        className="visit-link"
                        href="https://simple-todo-list-task.netlify.app/"
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
                          href="https://github.com/MiriamOkpalaeke/todo-list"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
