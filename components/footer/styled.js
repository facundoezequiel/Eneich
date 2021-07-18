import styled from "styled-components";
import { breakpoints } from "../../constants/media";

const FooterContainer = styled.div`
  width: 100%;
  background-color: var(--nhdarkgray);
  border-top: 1.5px var(--nhwhite) solid;

  // Logo Buttons Container
  #logoButtonsContainer {
    width: 100%;
    max-width: 1344px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    padding: 1.5% 0% 1.5% 0%;
  }

  // Logo Button
  #logoButton {
    max-width: 120px;
  }

  // Logo Image
  #logoButton img {
    width: 100%;
    height: auto;
    display: block;
  }

  // Buttons Copyright Container and Buttons Container
  #buttonsCopyrightContainer, #buttonsContainer {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: flex-end;
  }

  // Buttons Container 
  #buttonsContainer {
    margin-right: 35px;
  }

  // Buttons
  #buttonsContainer a {
    margin-left: 35px;
    background-color: var(--nhwhite);
    position: relative;
  }

  // Copyright and Buttons Texts
  #buttonsCopyrightContainer p,
  #buttonsContainer a span {
    color: var(--nhwhite);
    font-family: "Pangea", sans-serif;
    font-size: 0.875em;
    font-weight: 400;
    text-rendering: optimizeLegibility;
  }

  // Buttons Texts
  #buttonsContainer a span {
    position: relative;
    display: inline-block;
    transition: 0.2s;
    height: 100%;
  }

  #buttonsContainer a:hover > span {
    color: var(--nhdarkgray);
  }

  #buttonsContainer a::before {
    top: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-color: var(--nhdarkgray);
    position: absolute;
    content: "";
    transition: 0.4s ease-out;
  }

  #buttonsContainer a:hover::before {
    width: 0%;
  }

  #esp {
    font-weight: 800 !important;
  }

  #gradientLine {
    content: "";
    background: rgba(250, 201, 171, 1);
    background: -moz-linear-gradient(
      left,
      rgba(250, 201, 171, 1) 0%,
      rgba(176, 204, 199, 1) 27%,
      rgba(196, 196, 196, 1) 69%,
      rgba(229, 45, 8, 1) 100%
    );
    background: -webkit-gradient(
      left top,
      right top,
      color-stop(0%, rgba(250, 201, 171, 1)),
      color-stop(27%, rgba(176, 204, 199, 1)),
      color-stop(69%, rgba(196, 196, 196, 1)),
      color-stop(100%, rgba(229, 45, 8, 1))
    );
    background: -webkit-linear-gradient(
      left,
      rgba(250, 201, 171, 1) 0%,
      rgba(176, 204, 199, 1) 27%,
      rgba(196, 196, 196, 1) 69%,
      rgba(229, 45, 8, 1) 100%
    );
    background: -o-linear-gradient(
      left,
      rgba(250, 201, 171, 1) 0%,
      rgba(176, 204, 199, 1) 27%,
      rgba(196, 196, 196, 1) 69%,
      rgba(229, 45, 8, 1) 100%
    );
    background: -ms-linear-gradient(
      left,
      rgba(250, 201, 171, 1) 0%,
      rgba(176, 204, 199, 1) 27%,
      rgba(196, 196, 196, 1) 69%,
      rgba(229, 45, 8, 1) 100%
    );
    width: 100%;
    height: 5px;
  }

  /* ----------- DESKTOP RESPONSIVE ----------- */

  //1624px Window -----------
  @media (max-width: ${breakpoints.window1624}) {
    // Logo Buttons Container
    #logoButtonsContainer {
      max-width: 1200px;
    }
  }

  //1366px Window -----------
  //Estandar
  @media (max-width: ${breakpoints.window1366}) {
    // Logo Buttons Container
    #logoButtonsContainer {
      max-width: 1080px;
    }
  }

  //1250px Window -----------
  @media (max-width: ${breakpoints.window1250}) {
    // Logo Buttons Container
    #logoButtonsContainer {
      max-width: 950px;
    }
  }

  /* ----------- TABLET RESPONSIVE ----------- */

  //1024px Tablet -----------
  //iPad Pro
  @media (max-width: ${breakpoints.tablet1024}) {
    // Logo Buttons Container
    #logoButtonsContainer {
      max-width: 700px;
    }
  }

  //830px Tablet -----------
  @media (max-width: ${breakpoints.tablet830}) {
    // Logo Buttons Container
    #logoButtonsContainer {
      max-width: 600px;
    }
  }

  //768px Tablet -----------
  //iPad
  @media (max-width: ${breakpoints.tablet768}) {
    // Logo Buttons Container
    #logoButtonsContainer {
      max-width: 500px;
    }
  }

  /* ----------- MOBILE RESPONSIVE ----------- */


`;

export { FooterContainer };
