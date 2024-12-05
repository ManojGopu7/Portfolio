import React, { useState } from "react";
import "./Header.css";

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(0)
  const getMenuCall = () => {
    if (menuOpen === 0) {
      setMenuOpen(1)
    }
    else {
      setMenuOpen(0)
    }
  }

  return (
    <header>
      <nav className="navbar fixed-top">
        <div className="brand">Manoj Gopu</div>
        <diV className="linksContainer">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </diV>
        <div className="menuButton">
          <div onClick={getMenuCall}>
            <i class="bi bi-list" ></i>
          </div>
          <diV className={menuOpen === 0 ? "menuLinks" : "menuLinksOpened"}>
            <ul onClick={getMenuCall}>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </diV>
        </div>
      </nav>
    </header>
  );
};

export default Header;
