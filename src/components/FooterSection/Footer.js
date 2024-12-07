import React from "react";
import "./Footer.css";
import github from "../../images/github.png"
import whatsapp from "../../images/whatsapp.png"
import linkedin from "../../images/linkedin.png"

const Footer = () => {
  return (
    <footer className="footerSection">
      <div className="firstFooter">
        <div className="footer-name"><a href="#home">Manoj Gopu</a></div>
        <div className="socials">
          <a href="https://github.com/ManojGopu7" target="_blank"><img src={github} alt="githubicon" /></a>
          <a href="https://linkedin.com/in/manojgopu" target="_blank"><img src={linkedin} alt="githubicon" /></a>
          <a href="https://wa.me/7330825034" target="_blank"><img src={whatsapp} alt="githubicon" /></a>
        </div>
      </div>
      <div className="secondFooter">
      <div className="small"><small>Created by Manoj</small></div>
      </div>
    </footer>
  );
};

export default Footer;
