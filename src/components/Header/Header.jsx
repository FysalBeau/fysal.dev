import React, { useState, useEffect } from "react";
import "./Header.css";
import defaultLogo from "/assets/icons/logo-default.svg";
import hoverLogo from "/assets/icons/logo-hover.svg";

const Header = ({ scrollToSection }) => {
  const [logoSrc, setLogoSrc] = useState(defaultLogo);
  const [isNavOpen, setIsNavOpen] = useState(false); // State to manage the mobile nav visibility

  useEffect(() => {
    const menu = document.querySelector(".menu");
    const close = document.querySelector(".close");
    const nav = document.querySelector(".mob-right-nav");

    // Add event listeners for opening and closing the mobile nav
    if (menu && close && nav) {
      menu.addEventListener("click", () => setIsNavOpen(true)); // Show nav on menu click
      close.addEventListener("click", () => setIsNavOpen(false)); // Hide nav on close click

      return () => {
        // Clean up event listeners to avoid memory leaks
        menu.removeEventListener("click", () => setIsNavOpen(true));
        close.removeEventListener("click", () => setIsNavOpen(false));
      };
    }
  }, []);

  return (
    <div className="header-container">
      <div
        className="logo-container"
        onMouseEnter={() => setLogoSrc(hoverLogo)}
        onMouseLeave={() => setLogoSrc(defaultLogo)}
        onClick={() => scrollToSection("home")}
      >
        <img src={logoSrc} alt="Logo" className="logo" />
      </div>
      <div className="header">
        <div
          className="header-item home"
          onClick={() => scrollToSection("home")}
        >
          //Home
        </div>
        <div
          className="header-item about"
          onClick={() => scrollToSection("about")}
        >
          //About
        </div>
        <div
          className="header-item projects"
          onClick={() => scrollToSection("projects")}
        >
          //Projects
        </div>
        <div
          className="header-item contact"
          onClick={() => scrollToSection("contact")}
        >
          //Contact
        </div>
        <img src="./assets/icons/menu.svg" className="menu" alt="menu" />
      </div>

      {/* Mobile right navigation */}
      <nav className={`mob-right-nav ${isNavOpen ? "open-nav" : ""}`}>
        <img src="./assets/icons/close.svg" className="close" alt="close" />

        <ul>
          <li >
            <a href="#home" onClick={() => scrollToSection("home")} >Home</a>
          </li>
          <li >
            <a href="#about" onClick={() => scrollToSection("about")} >About</a>
          </li>
          <li>
            <a href="#projects" onClick={() => scrollToSection("projects")}>Projects</a>
          </li>
          <li>
            <a href="#contact" onClick={() => scrollToSection("contact")}>Contact</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/fysalbeauferris/">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/FysalBeau">GitHub</a>
          </li>
          <li>
            <a
              href="/assets/resume.pdf"
            >
              Resumé
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
