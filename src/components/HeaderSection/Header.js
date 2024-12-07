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
            <table className="table text-center" onClick={getMenuCall}>
              <tr><a href="#home">Home</a></tr>
              <tr><a href="#about">About</a></tr>
              <tr><a href="#skills">Skills</a></tr>
              <tr><a href="#projects">Projects</a></tr>
              <tr><a href="#contact">Contact</a></tr>
            </table>
          </diV>
        </div>
      </nav>
    </header>
  );
};

export default Header;
