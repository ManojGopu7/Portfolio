import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav className="navbar fixed-top">
        <div className="brand">Manoj Gopu</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
