import styled from "styled-components";

const HeaderContainer = styled.div`
  // Position and scale
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 70px;
  min-height: 70px;
  // Blur
  backdrop-filter: blur(30px) brightness(1.08);
  -webkit-backdrop-filter: blur(30px) brightness(1.08);
  // Display
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

  // Fonts
  @font-face {
    font-family: "PangeaTextTrial";
    src: url("/fonts/pangea/PangeaTextTrial-Light.woff");
    font-style: normal;
    font-weight: 100;
    font-display: swap;
  }

  #logoShopContainer {
    width: 70%;
    max-width: 1344px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
  }

  #shopLenguajeContainerMobile {
    display: none;
  }

  #logoContainer,
  #shopLenguajeContainer {
    width: 50% !important;
    display: flex;
    align-content: center;
    align-items: center;
  }

  #logoContainer {
    justify-content: flex-start;
  }

  #shopLenguajeContainer {
    justify-content: flex-end;
  }

  #logoContainer h1, #logoContainer h1 a {
    width: 100%;
  }

  #logoContainer img {
    width: 5.3%;
    max-width: 35.61px;
  }

  p {
    color: #141414;
    width: 100%;
    height: 100%;
    text-rendering: optimizeLegibility;
    font-family: "Pangea", sans-serif;
    font-size: 0.9em;
  }

  #shopDiv {
    display: flex;
    justify-content: flex-end;

    a {
      margin-right: 15%;
    }
  }
`;

export { HeaderContainer };
