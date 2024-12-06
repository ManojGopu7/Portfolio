import React, { useState } from "react";
import "./Home.css";
import resumess from "../../images/resumess.png";

const Home = () => {
  const [showResume, setShowResume] = useState(false);

  const handleResumeClick = () => {
    setShowResume(true);
  };

  const handleCloseClick = () => {
    setShowResume(false);
  };

  return (
    <div id="home" className="home">
      <div className="heading">
        <h1>I'M 
          Manoj Gopu</h1>
      </div>
      <div className="intro">
        <p>
        A Passionate Full Stack Developer, proficient in building and optimizing dynamic web applications.
        </p>
        <p>Transforming ideas into impactful web solutions.</p>
      </div>
      
      <div className="resume-section">
        <button className="resume-btn" onClick={handleResumeClick}>
          Resume
        </button>
      </div>

      {showResume && (
        <div className="resume-popup">
          <div className="resume-content">
            <img
              src={resumess}
              alt="Resume Screenshot"
              className="resume-img"
            />
            <div className="resume-buttons">
              <a
                href="/Manoj Gopu.pdf"
                download="Manoj Gopu_Resume.pdf"
                className="btn download-btn"
              >
                Download Resume
              </a>

              <button className="close-btn" onClick={handleCloseClick}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="more">
        <a href="#about" className="moreaboutme"><p>See More About Me<i class="bi bi-caret-down-fill mt-5 ps-2 text-dark down"></i></p></a>
      </div>
    </div>
  );
};

export default Home;
