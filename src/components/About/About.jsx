import React, { useState, useEffect} from "react";
import "./About.css";

const images = [
  './assets/about-image-1.jpg',
  './assets/about-image-2.jpg',
  './assets/about-image-3.jpg'
];

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500); //Change image every 3.5 seconds

    return () => clearInterval(interval); // Clean up interbal on component unmount

  }, []);

  return (
    <div className="about-container">
      <div className="about-background" />
      <div className="about-header">
        <span className="comment">/*</span>
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
        <br/>
        <span className="comment">
          <br></br>*/
        </span>
      </div>
      <img
        className="about-image"
        src={images[currentImageIndex]}
        alt="Slideshow"
      />
    </div>
  );
};

export default About;
