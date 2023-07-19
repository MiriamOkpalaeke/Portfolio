import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Projects from "./Pages/Projects";

import Notexisting from "./Pages/Notexisting";
import Footer from "./Components/Footer";
// import ProjectCarousel from "./Pages/ProjectCarousel";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/projectCarousel" element={<ProjectCarousel />} /> */}
          <Route path="*" element={<Notexisting />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
