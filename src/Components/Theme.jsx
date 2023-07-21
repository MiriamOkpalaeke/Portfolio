import React from "react";

const Theme = ({ darkMode, toggleDarkMode }) => {
  return (
    <div>
      <button
        className="theme-btn"
        style={{ backgroundColor: "transparent", border: "none" }}
        onClick={toggleDarkMode}
        title={darkMode ? "Light Mode" : "Dark Mode"}
      >
        {darkMode ? (
          <span>
            <i
              className="fa-regular fa-sun fa-xl"
              style={{ color: "#f4f5f5" }}
            ></i>
            <span className="tooltip-text">Light Mode</span>
          </span>
        ) : (
          <span>
            <i class="fa-solid fa-moon fa-xl" style={{ color: "#4b5058" }}></i>

            <span className="tooltip-text">Dark Mode</span>
          </span>
        )}
      </button>
    </div>
  );
};

export default Theme;
