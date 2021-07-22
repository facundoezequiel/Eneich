import styled from "styled-components";
import { breakpoints } from "../../constants/media";

// Biography Esp Eng Container
const BioespengContainer = styled.div`
  width: 100%;
  background-color: var(--nhwhite);

  // Font for bio
  @import url("https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap");

  // Bio Container
  #bioContainer {
    width: 100%;
    border-bottom: 1px var(--nhdarkgray) solid;
  }

  // Title Container
  #titleContainer {
    width: 100%;
    background-color: var(--nhdarkgray);
    padding: 80px 0px 60px 0px;
  }

  // Title Container
  #titleContainer div {
    width: 100%;
    margin: 0 auto;
    min-width: 768px;
    max-width: 768px;
  }

  // Title
  #titleContainer h2 {
    color: #edeae2;
    text-rendering: optimizeLegibility;
    font-family: "MT Dalat Sans", serif;
    font-style: normal;
    font-weight: normal;
    font-size: 3.125em;
    letter-spacing: 0.05em;
    text-align: left;
    padding: 30px 0px 20px 0px;
    margin: 0px 0px 0px 0px !important;
  }

  // Subtitle
  #titleContainer p {
    color: var(--nhwhite);
    font-family: "Pangea", sans-serif;
    font-size: 0.9em !important;
    letter-spacing: 3px;
    text-align: left;
    font-weight: 400;
    text-rendering: optimizeLegibility;
    display: inline;
    border-top: 1px var(--nhwhite) solid;
    padding: 14px 0px 0px 0px;
  }

  // Text Container
  #pContainer {
    width: 100%;
    padding: 60px 0px 100px 0px;
    background-color: var(--nhwhite);
    z-index: 98;
  }

  // Image
  #pContainer img {
    width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
    min-width: 768px;
    max-width: 768px;
  }

  // Text
  #pContainer p {
    width: 100%;
    margin: 0 auto;
    min-width: 768px;
    max-width: 768px;
    font-size: 1.3em;
    line-height: 35px;
    font-family: "Lora", serif;
    text-align: left;
    padding: 60px 0px 0px 0px;
  }

  // Back Button
  #backButton {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    background-color: transparent;
    border: 0px solid;
    padding: 0 !important;
    cursor: pointer;
  }

  // Back Button Image
  #backButton img {
    transition: 0.2s;
    display: block;
    transform: rotate(180deg);
  }

  // Back Button Text
  #backButton span {
    color: var(--nhwhite);
    font-family: "Pangea", sans-serif;
    font-size: 0.9em !important;
    letter-spacing: 3px;
    text-align: left;
    font-weight: 400;
    text-rendering: optimizeLegibility;
    margin: 0px 0px 0px 18px;
    display: inline;
  }

  #backButton:hover > img {
    transform: rotate(180deg) translateX(23px);
  }

  // Gradient Line
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

  //1366px Window -----------
  //Estandar
  @media (max-width: ${breakpoints.window1366}) {
    // Title Container
    #titleContainer div {
      min-width: 700px;
      max-width: 700px;
    }

    // Image
    #pContainer img {
      min-width: 700px;
      max-width: 700px;
    }

    // Text
    #pContainer p {
      min-width: 700px;
      max-width: 700px;
      font-size: 1.2em;
    }
  }

  /* ----------- TABLET RESPONSIVE ----------- */

  //1024px Tablet -----------
  //iPad Pro
  @media (max-width: ${breakpoints.tablet1024}) {
    // Title Container
    #titleContainer {
      padding: 105px 0px 60px 0px;
    }

    // Title
    #titleContainer h2 {
      font-size: 2.5em;
    }

    // Subtitle
    #titleContainer p {
      font-size: 0.813em !important;
    }

    // Back Button Text
    #backButton span {
      font-size: 0.813em !important;
    }
  }

  //830px Tablet -----------
  @media (max-width: ${breakpoints.tablet830}) {
    // Title Container
    #titleContainer div {
      min-width: 600px;
      max-width: 600px;
    }

    // Image
    #pContainer img {
      min-width: 600px;
      max-width: 600px;
    }

    // Text
    #pContainer p {
      min-width: 600px;
      max-width: 600px;
      font-size: 1.1em;
      line-height: 32px;
    }
  }

  //768px Tablet -----------
  //iPad
  @media (max-width: ${breakpoints.tablet768}) {
    // Title Container
    #titleContainer div {
      min-width: 500px;
      max-width: 500px;
    }

    // Image
    #pContainer img {
      min-width: 500px;
      max-width: 500px;
    }

    // Text
    #pContainer p {
      min-width: 500px;
      max-width: 500px;
    }
  }

  /* ----------- MOBILE RESPONSIVE ----------- */

  //651px Mobile -----------
  @media (max-width: ${breakpoints.mobile651}) {
    // Title Container
    #titleContainer div {
      min-width: 80%;
      max-width: 80%;
      width: 80%;
    }

    // Image
    #pContainer img {
      width: 80%;
      min-width: 80%;
      max-width: 80%;
    }

    // Text
    #pContainer p {
      width: 80%;
      min-width: 80%;
      max-width: 80%;
      font-size: 1.4em;
      line-height: 40px;
    }

    // Title
    #titleContainer h2 {
      font-size: 3.125em;
    }

    // Subtitle
    #titleContainer p {
      font-size: 0.9em !important;
      letter-spacing: 2px;
    }

    // Back Button Text
    #backButton span {
      font-size: 0.9em !important;
    }
  }

  //550px Mobile -----------
  @media (max-width: ${breakpoints.mobile550}) {
    // Title
    #titleContainer h2 {
      font-size: 2.35em;
    }

    // Text
    #pContainer p {
      font-size: 1.1em;
      line-height: 35px;
    }

    // Subtitle
    #titleContainer p {
      font-size: 0.8em !important;
    }

    // Back Button Text
    #backButton span {
      font-size: 0.8em !important;
    }
  }

  //375px Mobile -----------
  //iPhone X
  @media (max-width: ${breakpoints.mobile375}) {
    // Title
    #titleContainer h2 {
      font-size: 2.2em;
    }
  }

  //360px Mobile -----------
  //Moto G4
  @media (max-width: ${breakpoints.mobile375}) {
    // Title
    #titleContainer h2 {
      font-size: 2em;
    }

    // Subtitle
    #titleContainer p {
      font-size: 0.75em !important;
      letter-spacing: 1px;
    }
  }

  //280px Mobile -----------
  //Galaxy Fold
  @media (max-width: ${breakpoints.mobile280}) {
    // Title
    #titleContainer h2 {
      font-size: 1.7em;
    }

    // Text
    #pContainer p {
      font-size: 1em;
      line-height: 27px;
    }

    // Subtitle
    #titleContainer p {
      font-size: 0.65em !important;
    }

    // Back Button Text
    #backButton span {
      font-size: 0.7em !important;
    }
  }
`;

export { BioespengContainer };
