import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <div className="aboutname"><h2>About Me</h2></div>
      <div className="aboutpara">
        <ul>
          <li><p>I graduated with a Bachelor of Engineering in Mechanical Engineering from Seshadri Rao Gudlavalleru Engineering College, achieving a percentage of 77%. During my academics, I learned Python and developed a strong interest in coding.
        </p></li>
        <li><p>I have a solid foundation in web development, proficient in HTML, CSS, and JavaScript, and familiar with frameworks like React.js. My expertise extends to back-end technologies such as SpringBoot and database management systems like MySQL and Oracle.</p></li>
        <li><p>My mechanical engineering background has equipped me with strong problem-solving skills and analytical thinking. I have worked on projects that integrate web development with engineering principles, showcasing my ability to bridge these domains effectively.</p></li>
        <li><p>I am passionate about coding and continuously learning about new technologies. My goal is to leverage my combined skills in engineering and web development to create innovative solutions and contribute to impactful projects.</p></li>
        </ul>
      </div>
    </section>
  );
};

export default About;
