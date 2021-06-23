import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { ModalContainer } from "./styled";

const Modal = ({ show, onClose, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
    document.body.style.overflow = "unset";
  };

  const modalContent = show ? (
    <ModalContainer>
      <div id="modalBackground" className="animate__animated animate__fadeIn"></div>
      <div id="windowModal" className="animate__animated animate__fadeIn">
        <a href="#" onClick={handleCloseClick}>
          x
        </a>
        {children}
      </div>
    </ModalContainer>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;
