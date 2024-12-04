import React from "react";
import "./Skills.css";
import html5 from "../../images/htmlbg.png"
import css3 from "../../images/cssbg.png"
import js from "../../images/javascript.png"
import react from "../../images/reactbg.png"
import oracle from "../../images/sql.png"
import mysql from "../../images/mysql.png"
import springboot from "../../images/springboot.png"
import java from "../../images/java.png"

const skillsData = [
  { name: "HTML", img: html5 },
  { name: "CSS", img: css3 },
  { name: "JavaScript", img: js},
  { name: "ReactJS", img: react },
  { name: "Oracle", img: oracle },
  { name: "MySQL", img: mysql },
  { name: "SpringBoot", img: springboot },
  { name: "Java", img: java },
];

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="text-center skillheading">My Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill,index) => (
          <div className="skill-card" key={index}>
            <img src={skill.img} alt={skill.name} />
            <p className="text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
