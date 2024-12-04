import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div id="home" className="home p-5">
      <div className="heading">
        <h1>I'M Manoj Gopu</h1>
      </div>
      <div className="intro">
        <p>
          Java Full Stack Developer, ReactJS Enthusiast, and Tech Innovator.
        </p>
        <p>
        Building smooth and user-friendly digital solutions with Spring Boot, ReactJS, and MySQL.
        </p>
        <p>
        Skilled at combining clean code with intuitive designs to create modern and impactful web applications.
        </p>
        <p>
        Transforming ideas into impactful web solutions.
        </p>
      </div>
      <div className="more">
        <p>See More About Me<i className="bi bi-caret-down-fill ps-1 mt-3 icon"></i></p>
      </div>
    </div>
  );
};

export default Home;
