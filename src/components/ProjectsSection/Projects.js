import React from "react";
import "./Projects.css";
import weatherImg from "../../images/weather.png";
import ecommerceImg from "../../images/e-commerce.png";
import ems from "../../images/employee.png";

const projectData = [
  {
    title: "Weather App",
    img: weatherImg,
    description:
      "Here is the simple Weather app. Created using html,css,javascript and open weather Api .",
  },
  {
    title: "E-Commerce App",
    img: ecommerceImg,
    description:
      "Here is the simple Weather app. Created using html,css,javascript and open weather Api .",
  },
  {
    title: "Employee Management System",
    img: ems,
    description:
      "An Employee Management System built with Spring Boot, ReactJS, and MySQL to manage employee data efficiently.",
    link: "https://github.com/ManojGopu7/Employee-Management-System",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div class="projheading-container">
        <h2 class="projheading">Projects</h2>
        <div class="projheading-line"></div>
      </div>

      <div className="projects-container">
        {projectData.map((project, key) => {
          return (
            <div class="project-card">
              <img src={project.img} className="display" alt="weatherImage" />
              <div className="card-body">
                <div className="projTitle">
                  <h4>{project.title}</h4>
                </div>
                <div className="projDes">
                  <p>{project.description}</p>
                </div>
              </div>
              <div className="buttons">
                <a
                  href={project.demo} target="_blank"
                  className="btn live"
                >
                  Live
                </a>
                <a href={project.link} target="_blank" className="btn src">Source Code</a>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
};

export default Projects;
