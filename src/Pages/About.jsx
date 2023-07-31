import React from "react";
import "../Styles/About.css";
import MiriamPics from "../Assets/IMG_9743d (2).jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about-container">
      <h2>Hello 👋</h2>

      <div className="about-flex">
        <div className="about-text">
          <p className="abt-p">
            My true respect for websites that are not just functional but also
            aesthetically beautiful, entertaining, and user-friendly fueled my
            enthusiasm for studying front-end development. My passion for web
            design and development dates back to my time in college when I
            initially experimented with it.
          </p>
          <p className="abt-p">
            Everything began when I created a blog on Blogger in 2015. But I
            soon realized that the basic aesthetics of the Blogger themes didn't
            support my concept. To develop an original and aesthetically
            pleasing website, I embarked on a self-teaching journey. I had
            minimal experience with HTML and CSS when I first entered the world
            of coding, so I set out to redesign my blog. I improved at altering
            HTML and CSS properties throughout this process to bring my design
            concepts to life.
          </p>
          <p className="abt-p">
            While I enjoyed unraveling the logic behind building applications,
            my true passion lay in crafting delightful user experiences. I
            became fascinated with the power of front-end development in shaping
            how users interact with websites and applications. The ability to
            create intuitive interfaces, seamless interactions, and stunning
            visual elements fascinated me, driving me to refine my skills and
            explore further.
          </p>
          <p className="abt-p">
            In 2022, I made a significant decision to take my passion for
            front-end development to the next level. I recognized that it was
            time to pivot my career path and fully immerse myself in the world
            of web development. This transition allowed me to combine my
            creative mindset with technical expertise, enabling me to craft
            exceptional digital experiences that captivate and delight users.
          </p>
          <p className="abt-p">
            Looking ahead, I am excited about the endless possibilities that lie
            before me as a front-end developer. I aim to continuously expand my
            skill set by staying up-to-date with the latest industry trends and
            emerging technologies. With each project I undertake, my goal is to
            not only create visually stunning designs but also prioritize
            accessibility, performance, and user-centricity. I aspire to
            contribute to the development of cutting-edge websites and
            applications that leave a lasting impact on users while pushing the
            boundaries of what is possible in the digital realm.
          </p>
          <p className="abt-p">Thanks for reading 😊</p>
        </div>
        <motion.div
          className="about-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 2 }}
          transition={{ delay: 1, duration: 2 }}
        >
          <img className="miriam-image" src={MiriamPics} alt="miriam smiling" />
        </motion.div>
      </div>
      <div className="skills-flex">
        <h3>SKILLS</h3>
        <div className="skills-list">
          <div>HTML</div>
          <div>CSS</div>
          <div>JAVASCRIPT</div>
          <div>GIT</div>
          <div>REACT</div>
        </div>
      </div>
      <motion.div className="about-link" whileHover={{ scale: 1.1 }}>
        <a
          className="about"
          href="https://drive.google.com/file/d/1YU5Dofy1ma5ZaGAGHEHwC1hKbWj8bicN/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          DOWNLOAD RESUME
        </a>
      </motion.div>
    </div>
  );
};

export default About;
