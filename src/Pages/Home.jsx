import React from "react";
import HeroPage from "../Components/HeroPage";
import AboutMe from "../Components/AboutMe";
import FeaturedProjects from "../Components/FeaturedProjects";

const Home = () => {
  return (
    <div>
      <section>
        <HeroPage />
      </section>
      <section>
        <AboutMe />
      </section>
      <section>
        <FeaturedProjects />
      </section>
    </div>
  );
};

export default Home;
