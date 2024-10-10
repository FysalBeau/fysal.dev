import React from "react";
import { Link } from "react-router-dom"; // Import the Link component
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Projects-Page.css";

const ProjectsPage = () => {
  return (
    <div className="container">
      {/* <Header /> */}
      
      <br />
      {/* Wrap the hero-container div with the Link component */}
      <Link to="/" className="hero-container">
        Coming Soon :)
      </Link>
      
      {/* <Footer /> */}
    </div>
  );
};

export default ProjectsPage;
