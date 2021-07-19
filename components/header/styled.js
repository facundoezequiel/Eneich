import styled, { css } from "styled-components";
import { breakpoints } from "../../constants/media";

const HeaderContainer = styled.div`
  // Position and scale
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 55px;
  min-height: 55px;
  max-height: 55px;
  backdrop-filter: blur(30px) brightness(1.08);
  -webkit-backdrop-filter: blur(30px) brightness(1.08);
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

  @supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    background-color: rgba(0, 0, 0, 0.1);
  }

  // Logo and Buttons Container
  #logoLenguajeContainer {
    width: 100%;
    max-width: 1344px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
  }

  h1 a img {
    width: 100%;
    max-width: 32px;
    height: auto;
  }

  #logoBlack {
    display: block;
  }

  #logoWhite {
    display: none;
    max-width: 31px;
  }

  #lenguajeContainer {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: flex-end;
  }

  #lenguajeContainer a {
    margin-left: 20px;
    color: var(--nhwhite);
    text-rendering: optimizeLegibility;
    font-family: "Pangea", sans-serif;
    font-size: 0.9em;
    font-weight: 400;
    transition: 0.2s;
  }

  #esp, #eng {
    font-weight: 400;
  }

  #lenguajeContainer a:hover {
    color: var(--nhblack);
  }

  ${(props) =>
    props.design === "bio" &&
    css`
      background-color: var(--nhdarkgray);

      #logoWhite {
        display: block !important;
      }

      #logoBlack {
        display: none !important;
      }

      #lenguajeContainer a:hover {
        color: var(--nhlightgray);
      }

      @supports not (
        (-webkit-backdrop-filter: none) or (backdrop-filter: none)
      ) {
        background-color: rgba(0, 0, 0, 0);
      }
    `};

  ${(props) =>
    props.active === "esp" &&
    css`
      #esp {
        font-weight: 700 !important;
      }
    `};

    ${(props) =>
    props.active === "eng" &&
    css`
      #eng {
        font-weight: 700 !important;
      }
    `};

  /*
  // Shop Button
  button {
    background-color: #141414;
    width: 19%;
    max-width: 127px;
    max-height: 37px !important;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    border-radius: 200px 200px 200px 200px;
    -moz-border-radius: 200px 200px 200px 200px;
    -webkit-border-radius: 200px 200px 200px 200px;
    border: 0px solid #000000;
    margin-left: 35px;
    cursor: pointer;
    transition: 0.2s all;
    display: none;
  }

  button:hover {
    background-color: #6a615a;
  }

  button svg {
    color: #edeae2;
    font-size: 1.1em;
    margin-left: 20px;
  }

  button p {
    color: #edeae2;
    text-rendering: optimizeLegibility;
    font-family: "Pangea", sans-serif;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 3px;
    display: block;
    margin-right: 20px;
    padding-top: 1px;
  } */

  /* ----------- DESKTOP RESPONSIVE ----------- */

  //1624px Window -----------
  @media (max-width: ${breakpoints.window1624}) {
    // Logo and Buttons Container
    #logoLenguajeContainer {
      max-width: 1200px;
    }
  }

  //1366px Window -----------
  //Estandar
  @media (max-width: ${breakpoints.window1366}) {
    // Logo and Buttons Container
    #logoLenguajeContainer {
      max-width: 1080px;
    }
  }

  //1250px Window -----------
  @media (max-width: ${breakpoints.window1250}) {
    // Logo and Buttons Container
    #logoLenguajeContainer {
      max-width: 950px;
    }
  }

  /* ----------- TABLET RESPONSIVE ----------- */

  //1024px Tablet -----------
  //iPad Pro
  @media (max-width: ${breakpoints.tablet1024}) {
    // Logo and Buttons Container
    #logoLenguajeContainer {
      max-width: 700px;
    }
  }

  //830px Tablet -----------
  @media (max-width: ${breakpoints.tablet830}) {
    // Logo and Buttons Container
    #logoLenguajeContainer {
      max-width: 600px;
    }
  }

  //768px Tablet -----------
  //iPad
  @media (max-width: ${breakpoints.tablet768}) {
    // Logo and Buttons Container
    #logoLenguajeContainer {
      max-width: 500px;
    }
  }

  /* ----------- MOBILE RESPONSIVE ----------- */

  //651px Mobile -----------
  @media (max-width: ${breakpoints.mobile651}) {
    // Logo and Buttons Container
    #logoLenguajeContainer {
      width: 80%;
      max-width: none;
    }

    h1 a img {
      max-width: 28px;
    }
  }
`;

export { HeaderContainer };
