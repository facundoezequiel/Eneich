import styled from "styled-components";
import { breakpoints } from "../../constants/media";

// Modal Container
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  // Modal Background
  #modalBackground {
    position: absolute;
    top: 0%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(106, 97, 90, 0.9);
    content: "";
    z-index: 98;
  }

  // Modal Window
  #windowModal {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    z-index: 99;
  }

  // Modal Close Botton
  #windowModal a {
    position: absolute;
    top: 0;
    right: 0;
    color: white;
    font-size: 2em;
    margin: 1em 1em 1em 1em;
    cursor: pointer;
    transition: all 0.2s ease-out;
  }

  // Video Container
  #videoContainer {
    width: 60%;
    margin: 0 auto;
  }

  // Hover Effects
  @media (hover: hover) {
    #windowModal a:hover {
      transform: scale(1.3);
    }
  }

  /* ----------- DESKTOP RESPONSIVE ----------- */

  //1920px Window -----------
  //Full HD
  @media (max-width: ${breakpoints.window1920}) {
    // Video Container
    #videoContainer {
      width: 70%;
    }
  }

  /* ----------- TABLET RESPONSIVE ----------- */

  //1024px Tablet -----------
  //iPad Pro
  @media (max-width: ${breakpoints.tablet1024}) {
    // Video Container
    #videoContainer {
      width: 80%;
    }
  }
`;

export { ModalContainer };
