import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ProjectsPage from "./components/Projects-Page/Projects-Page"; // Import the projects page
import "./index.css";

const App = () => {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

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
              <Header scrollToSection={scrollToSection} />
              <div ref={homeRef}>
                <Hero />
              </div>
              <div ref={aboutRef}>
                <About />
              </div>
              <div ref={projectsRef}>
                <Projects />
              </div>
              <div ref={contactRef}>
                <Contact />
              </div>
              <Footer />
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
