import React, { useEffect, useRef, useState } from "react"; // Added useState 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Header from "./components/Header/Header"; 
import Hero from "./components/Hero/Hero"; 
import About from "./components/About/About"; 
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ProjectsPage from "./components/Portfolio/Portfolio"; 
import "./index.css";

const App = () => {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Added state for fade-in visibility
  const [isVisible, setIsVisible] = useState({
    header: false,
    home: false,
    about: false,
    projects: false,
    contact: false,
    footer: false,
  });

  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in");

    const options = {
      threshold: 0.25, // Trigger when 25% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.dataset.section; // Get section name from data attribute
          setIsVisible((prevState) => ({ ...prevState, [sectionName]: true })); // Update state
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup function to disconnect the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  // Define offsets for each section
  const offsets = {
    home: 150, // Offset for Home
    about: 120, // Offset for About
    projects: 120, // Offset for Projects
    contact: 15, // Offset for Contact
  };

  // Smooth scroll function with section-specific offset
  const scrollToSection = (section) => {
    const refs = {
      home: homeRef,
      about: aboutRef,
      projects: projectsRef,
      contact: contactRef,
    };

    if (refs[section].current) {
      const offset = offsets[section]; // Get the offset for the current section
      const element = refs[section].current;

      // Get the position of the section
      const topPosition = element.getBoundingClientRect().top + window.scrollY;

      // Scroll to the calculated position with the offset
      window.scrollTo({
        top: topPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <Router>
      <Routes>
        {/* Main Page Route */}
        <Route
          path="/"
          element={
            <div className="container">
              <div
                id="header"
                className={`fade-in ${isVisible.header ? "appear" : ""}`}
                data-section="header"
              >
                <Header scrollToSection={scrollToSection} />
              </div>

              <div
                id="hero"
                ref={homeRef}
                className={`fade-in ${isVisible.home ? "appear" : ""}`}
                data-section="home"
              >
                <Hero scrollToSection={scrollToSection} />
              </div>
              <div
                id="about"
                ref={aboutRef}
                className={`fade-in ${isVisible.about ? "appear" : ""}`}
                data-section="about"
              >
                <About />
              </div>
              <div
                id="projects"
                ref={projectsRef}
                className={`fade-in ${isVisible.projects ? "appear" : ""}`}
                data-section="projects"
              >
                <Projects />
              </div>
              <div
                id="contact"
                ref={contactRef}
                className={`fade-in ${isVisible.contact ? "appear" : ""}`}
                data-section="contact"
              >
                <Contact />
              </div>
              <div
                id="footer"
                className={`fade-in ${isVisible.footer ? "appear" : ""}`}
                data-section="footer"
              >
                <Footer />
              </div>
            </div>
          }
        />
        {/* Second Page Route */}
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
