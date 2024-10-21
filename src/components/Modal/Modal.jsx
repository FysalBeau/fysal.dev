import React from "react";
import "./Modal.css";
import ProjectsPage from "../Portfolio/Portfolio";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Close button in the top-right corner */}
        <button className="modal-close-button-right" onClick={onClose}>
          Close
        </button>

        <div className="modal-body">
          {/* Modal content goes here */}
          <ProjectsPage />
        </div>
      </div>
    </div>
  );
};

export default Modal;
