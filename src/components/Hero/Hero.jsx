import React from "react";
import "./Hero.css"; // Import the CSS file

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Background Card */}
      <div className="hero-card">
        {/* Intro Text */}
        <div className="intro-text">
          <span className="comment">/*</span>

          <br></br>
          <br></br>
          <span className="greeting">Hi there,</span>
        </div>

        {/* Main Title */}
        <div className="main-title">I'm Fysal!</div>

        {/* Description */}
        <div className="description">
          <span className="role">Developer 🧑🏻‍💻 + Data Scientist 📊</span>
          <br />
          <span className="bio">
            Graduate in Computer Science<br></br> with a Minor in Data Science.
            <br />
            Based in Calgary, Alberta 🇨🇦
          </span>
          <br></br>
          <br></br>
          <span className="comment">*/</span>
        </div>

        {/* Image */}
        <img
          className="profile-img"
          src="./assets/hero-image.jpg"
          alt="Profile"
        />

        {/* Contact Button */}
        <div className="contact-button">
          <div className="button-text">//Contact Me</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
