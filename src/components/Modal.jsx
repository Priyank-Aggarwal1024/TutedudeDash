import React from "react";
import "../assets/styles/Modal.css";
const Modal = ({ onClose, open, children }) => {
  if (!open) {
    return <></>;
  }
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};
export default Modal;
