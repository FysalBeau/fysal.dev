import React, { useState, useEffect } from "react";
import "./Header.css";
// import defaultLogo from "/assets/icons/logo-default.svg";
// import hoverLogo from "/assets/icons/logo-hover.svg";

const Header = ({ scrollToSection }) => {
  // const [logoSrc, setLogoSrc] = useState(defaultLogo);
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
        // onMouseEnter={() => setLogoSrc(hoverLogo)}
        // onMouseLeave={() => setLogoSrc(defaultLogo)}
        onClick={() => scrollToSection("home")}
      >
        <svg
          className="logo-svg"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle className="logo-circle" cx="30" cy="30" r="30" fill="white" />
          <path
            className="path1"
            d="M7.236 39V20.852H18.91V23.296H10.148V28.574H18.104V31.018H10.148V39H7.236Z"
            fill="#8298F5"
          />
          <path
            className="path2"
            d="M22.6438 19.76H25.4778V27.872H25.6338C26.0325 27.0573 26.5612 26.4247 27.2198 25.974C27.8785 25.506 28.7018 25.272 29.6898 25.272C31.2672 25.272 32.5238 25.8613 33.4598 27.04C34.3958 28.2187 34.8638 29.9693 34.8638 32.292C34.8638 34.6147 34.3958 36.3653 33.4598 37.544C32.5238 38.7227 31.2672 39.312 29.6898 39.312C28.7018 39.312 27.8785 39.0867 27.2198 38.636C26.5612 38.168 26.0325 37.5267 25.6338 36.712H25.4778V39H22.6438V19.76ZM28.5198 36.998C29.5945 36.998 30.4178 36.6687 30.9898 36.01C31.5792 35.3513 31.8738 34.476 31.8738 33.384V31.2C31.8738 30.108 31.5792 29.2327 30.9898 28.574C30.4178 27.9153 29.5945 27.586 28.5198 27.586C28.1038 27.586 27.7138 27.638 27.3498 27.742C26.9858 27.846 26.6652 28.002 26.3878 28.21C26.1105 28.418 25.8852 28.678 25.7118 28.99C25.5558 29.2847 25.4778 29.64 25.4778 30.056V34.528C25.4778 34.944 25.5558 35.308 25.7118 35.62C25.8852 35.9147 26.1105 36.166 26.3878 36.374C26.6652 36.582 26.9858 36.738 27.3498 36.842C27.7138 36.946 28.1038 36.998 28.5198 36.998Z"
            fill="#93CAAC"
          />
          <path
            className="path3"
            d="M37.7397 43.654V41.21H50.2197V43.654H37.7397Z"
            fill="#F5BF44"
          />
        </svg>
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
          <li>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              Contact
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/fysalbeauferris/">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/FysalBeau">GitHub</a>
          </li>
          <li>
            <a href="/assets/resume.pdf">Resumé</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
