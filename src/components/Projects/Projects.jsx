import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Projects.css";

const Project = () => {
  const navigate = useNavigate(); // Create a navigate function

  // Handle redirection on click
  const handleRedirect = () => {
    navigate("/projects"); // Redirect to the second page
  };

  return (
    <div className="project-container">
      <div className="project-background" />

      <div className="projects-header">//Projects</div>

      <img
        className="project-image project-image-1"
        src="./assets/images/data-cap-graphic.png"
        alt="Project 1"
      />

      <div className="project-details project-1">
        <span className="comment-1">/*</span>
        <br></br>
        <br></br>
        <span className="project-title">Data Science Capstone</span>    <img
          className="project-1-redirect"
          src="./assets/icons/redirect.svg"
          alt="Redirct"
          onClick={handleRedirect}

        />
        <br></br>
        <span className="project-created">Created: Winter 2023</span>
        <br></br>
        <span className="project-description">
          Research paper diving deep into Debt as a Socioeconomic Determinant of
          Cancer Incidence
        </span>

    
        <br></br>
        <br></br>
        <span className="comment-2">*/</span>
     
      </div>

      <img
        className="project-image project-image-2"
        src="./assets/images/mkrsunion-graphic.png"
        alt="Project 2"
      />

      <div className="project-details project-2">
        <span className="comment-3">/*</span>
        <br></br>
        <br></br>
        <span className="project-title">Mkrs Union</span> <img
          className="project-1-redirect"
          src="./assets/icons/redirect.svg"
          alt="Redirct"
          onClick={handleRedirect}
        />
        <br></br>
        <span className="project-created">Created: Winter 2022</span>
        <br></br>
        <span className="project-description">
          Mkrs Union is a makerspace manager web app for the Taylor Family
          Digital Library Makerspace
        </span>
       
        <br></br>
        <br></br>
        <span className="comment-4">*/</span>
      
      </div>

      {/* Clickable CTA that redirects to the second page */}
      <div className="project-button" onClick={handleRedirect}>
        <div className="project-button-text">//Want to see all my projects?</div>
      </div>
    </div>
  );
};

export default Project;
