import React, { useState, useEffect } from "react";
import "./About.css";

const images = [
  "./assets/images/about-image-1.jpg",
  "./assets/images/about-image-2.jpg",
  "./assets/images/about-image-3.jpg",
];

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in"); // State for fade class

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass(""); // Remove fade class to start fade-out
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFadeClass("fade-in"); // Add fade class to start fade-in
      }, 500); // Wait for fade-out duration before changing image
    }, 4000); // Total time before next image (fade-out + fade-in)

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="about-container">
      <div className="about-background" />
      <div className="about-header">
        <span id="about-comment1" className="comment">
          /*
        </span>
        <span className="about-title">About Me</span>
      </div>
      <div className="about-content">
        <br />
        <span className="about-text">
          Always on the lookout for fresh tracks and artists to keep the
          creativity brewing ☕🎶 — powered by caffeine and a set of pedals! 🚴
          As a devoted coffee lover and a passionate cyclist, the magic happens
          when my worlds collide. Biking to a new coffee shop? Bliss.
          <br />
          <br />
          And when data science and front-end development join forces, like in a
          dazzling data visualization, that's when I'm really in my groove. Now,
          if I could just master biking to a coffee shop while coding... that
          would be the ultimate jam session! 🎧💻
        </span>
        <br />
        <span id="about-comment2" className="comment">
          <br></br>*/
        </span>
      </div>
      <img
        className={`about-image ${fadeClass}`} // Apply the fade class here
        src={images[currentImageIndex]}
        alt="Slideshow"
      />
    </div>
  );
};

export default About;
