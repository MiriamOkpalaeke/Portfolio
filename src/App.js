import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Projects from "./Pages/Projects";

import Notexisting from "./Pages/Notexisting";
import Footer from "./Components/Footer";
import { useState } from "react";
// import ProjectCarousel from "./Pages/ProjectCarousel";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  //   document.body.classList.toggle("dark-mode");
  // };
  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <Navbar />
      <div className="Pages">
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route path="/projects" element={<Projects darkMode={darkMode} />} />
          {/* <Route path="/projectCarousel" element={<ProjectCarousel />} /> */}
          <Route path="*" element={<Notexisting darkMode={darkMode} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
