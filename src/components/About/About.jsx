import React, { useState, useEffect, useRef } from "react";
import "./About.css";

const images = [
  "./assets/images/about-image-1.jpg",
  "./assets/images/about-image-2.jpg",
  "./assets/images/about-image-3.jpg",
];

const About = ({ isVisible }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in"); // State for fade class
  const hasRun = useRef(false); // To ensure the effect runs only once

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

  useEffect(() => {
    if (isVisible && !hasRun.current) {
      hasRun.current = true; // Mark the effect as having run

      // Select all spans in the about-header and about-content
      const spans = document.querySelectorAll(
        ".about-header span, .about-content span"
      );

      function typeWriterForSpans(index = 0) {
        if (index < spans.length) {
          const span = spans[index]; // Get the current span
          const text = span.getAttribute("data-text") || span.textContent; // Get the span's text
          span.textContent = ""; // Clear the span to type text letter by letter

          // Type the current span's text and proceed to the next span after a delay
          typeWriter(text, 0, span, () => {
            setTimeout(() => typeWriterForSpans(index + 1), 100); // Delay before typing the next span
          });
        }
      }

      function typeWriter(text, i, span, callback) {
        if (i < text.length) {
          span.textContent += text[i]; // Append the next character to the span's content
          setTimeout(() => typeWriter(text, i + 1, span, callback), 15); // Type the next character after 25ms
        } else {
          callback(); // Call the callback when all characters are typed
        }
      }

      // Start the typewriter effect for all spans
      typeWriterForSpans();
    }
  }, [isVisible]); // Run the effect only when `isVisible` changes

  return (
    <div className="about-container">
      <div className="about-background" />
      <div className="about-header">
        <span id="about-comment1" className="comment" data-text="/*"></span>
        <span className="about-title" data-text="About Me"></span>
      </div>
      <div className="about-content">
        <br />
        <span
          className="about-text"
          data-text="Always on the lookout for fresh tracks and artists to keep the creativity brewing ☕🎶 — powered by caffeine and a set of pedals! 🚴 As a devoted coffee lover and a passionate cyclist, the magic happens when my worlds collide. Biking to a new coffee shop? Bliss."
        ></span>
        <br/>
        <br/>
         <span
          className="about-text"
          data-text="And when data science and front-end development join forces, like in a dazzling data visualization, that's when I'm really in my groove. Now, if I could just master biking to a coffee shop while coding... that would be the ultimate jam session! 🎧💻"
        ></span>
        <br />
        <br />
        <span id="about-comment2" className="comment" data-text="*/"></span>
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
