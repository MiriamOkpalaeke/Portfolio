import React, { useState } from "react";
import "../Styles/Navbar.css";
import { NavLink } from "react-router-dom";
import Theme from "./Theme";

const Navbar = () => {
  //handling the close button for mobile view
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            Miriam Okpalaeke
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/projects"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Projects
              </NavLink>
            </li>
            {/* <li className="nav-item"></li>
            <li className="nav-item">
              <NavLink
                to="/projectCarousel"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Project2
              </NavLink>
            </li> */}
            <li className="nav-item"></li>
          </ul>

          {/* for mobile view close button */}
          <div className="nav-icon" onClick={handleClick}>
            <i
              className={click ? "fas fa-times" : "fa-sharp fa-solid fa-bars"}
            ></i>
          </div>
          <div className="theme">{/* <Theme /> */}</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
