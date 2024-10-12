import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Projects.css";
import Modal from "../Modal/Modal"; // Import Modal

const Project = () => {
  const navigate = useNavigate(); // Create a navigate function
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  // Handle redirection on click
  const handleRedirect = () => {
    navigate("/projects"); // Redirect to the second page
  };

  // Function to open the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
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
        <br />
        <br />
        <span className="project-title">Data Science Capstone</span>
        <img
          className="project-1-redirect"
          src="./assets/icons/redirect.svg"
          alt="Redirect"
          onClick={handleRedirect}
        />
        <br />
        <span className="project-created">Created: Winter 2023</span>
        <br />
        <span className="project-description">
          Research paper diving deep into Debt as a Socioeconomic Determinant of
          Cancer Incidence
        </span>
        <br />
        <br />
        <span className="comment-2">*/</span>
      </div>

      <img
        className="project-image project-image-2"
        src="./assets/images/mkrsunion-graphic.png"
        alt="Project 2"
      />

      <div className="project-details project-2">
        <span className="comment-3">/*</span>
        <br />
        <br />
        <span className="project-title">Mkrs Union</span>
        <img
          className="project-1-redirect"
          src="./assets/icons/redirect.svg"
          alt="Redirect"
          onClick={handleRedirect}
        />
        <br />
        <span className="project-created">Created: Winter 2022</span>
        <br />
        <span className="project-description">
          Mkrs Union is a makerspace manager web app for the Taylor Family
          Digital Library Makerspace
        </span>
        <br />
        <br />
        <span className="comment-4">*/</span>
      </div>

      {/* Clickable CTA that opens the modal instead of redirecting */}
      <div className="project-button" onClick={handleOpenModal}>
        <div className="project-button-text">//Want to see all my projects?</div>
      </div>

      {/* Render the Modal component and pass the close function */}
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={handleCloseModal} />}
    </div>
  );
};

export default Project;
