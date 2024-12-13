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
          <a href="https://github.com/ManojGopu7" target="_blank"><i className="bi bi-github"></i></a>
          <a href="https://linkedin.com/in/manojgopu" target="_blank"><i className="bi bi-linkedin"></i></a>
          <a href="https://wa.me/7330825034" target="_blank"><i className="bi bi-whatsapp"></i></a>
        </div>
      </div>
      <div className="secondFooter">
      <div className="small"><small>Created by Manoj</small></div>
      </div>
    </footer>
  );
};

export default Footer;
