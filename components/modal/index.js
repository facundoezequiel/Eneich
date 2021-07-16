import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { ModalContainer } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ show, onClose, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);
  {
    /* Close Modal Function */
  }
  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
    document.body.style.overflow = "unset";
  };
  const modalContent = show
    ? ({
        /* Modal */
      },
      (
        <ModalContainer className="animate__animated animate__fadeIn">
          {/* Modal Background */}
          <div id="modalBackground"></div>
          {/* Modal Window */}
          <div id="windowModal">
            {/* Close Modal Botton */}
            <a onClick={handleCloseClick}>
              <span>
                {/* Font Awersome Icon */}
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </a>
            {/* Video Container */}
            <div id="videoContainer">{children}</div>
          </div>
        </ModalContainer>
      ))
    : null;
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