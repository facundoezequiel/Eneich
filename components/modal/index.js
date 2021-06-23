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
      <div id="modalBackground" onClick={handleCloseClick}></div>
      <div id="windowModal">
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
