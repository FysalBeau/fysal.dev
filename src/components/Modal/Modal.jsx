import React, { useState } from "react";
import ReactModal from "react-modal";
import "./Modal.css"; // Import the CSS file

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button className="modal-trigger-button" onClick={handleOpenModal}>
        Trigger Modal
      </button>
      <ReactModal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        contentLabel="Full-Screen Modal Example"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <button className="modal-close-button" onClick={handleCloseModal}>
          Close
        </button>
        {/* Modal Content */}
        <div className="modal-body">
          <h2>This is the modal content</h2>
          <p>You can put any content here that fits within 95% of the screen.</p>
        </div>
      </ReactModal>
    </div>
  );
};

export default Modal;
