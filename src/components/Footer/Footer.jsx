import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-icons">
      <a href="https://github.com/FysalBeau" target="_blank" rel="noopener noreferrer">
          <img src="./assets/github.svg" alt="GitHub" className="footer-icon" />
        </a>
        <a href="https://www.linkedin.com/in/fysalbeauferris/" target="_blank" rel="noopener noreferrer">
          <img src="./assets/linkedin.svg" alt="LinkedIn" className="footer-icon" />
        </a>
        <a href="./assets/resume.pdf" target="_blank" rel="noopener noreferrer">
          <img src="./assets/resume.svg" alt="Resume" className="footer-icon" />
        </a>
      </div>
      <div className="footer-text">// © 2024 Fysal Beauferris. All Rights Reserved.</div>
    </div>
  );
};

export default Footer;