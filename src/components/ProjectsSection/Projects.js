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
      "Here is the simple Weather app. Created using html,css,javascript and open weather Api .",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="projcontainer">
      <h2 className="text-center projheading">Projects</h2>
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
                  <button className="live">Live</button>
                  <button className="src">Source Code</button>
              </div>
            </div>
          );
        })}
        
      </div>
    </section>
  );
};

export default Projects;
