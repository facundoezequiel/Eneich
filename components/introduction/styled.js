import styled from "styled-components";
import { breakpoints } from "../../constants/media";

// Section Introduction Container
const IntroductionContainer = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 768px !important;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  background-image: url(${"/images/Background2560.jpg"});

  // Logo, title and buttons container
  #logoTitleButtonsContainer {
    width: 70%;
    max-width: 1344px;
    margin-top: 65px;
  }

  // Eneich logo
  img {
    display: block;
    width: 20%;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  // Title
  h1 {
    color: var(--nhblack);
    text-rendering: optimizeLegibility;
    font-family: "MT Dalat Sans", serif;
    font-size: 7.2em;
    font-weight: 400;
    display: block;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin: 4% 0% 4% 0%;
  }

  // Buttons container
  #buttonsContainer {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: flex-start;
    width: 100%;
  }

  // Buttons
  #buttonsContainer button {
    background-color: var(--nhwhite);
    margin-right: 46px;
    padding: 0.1% 3% 0.1% 3%;
    border-radius: 200px 200px 200px 200px;
    -moz-border-radius: 200px 200px 200px 200px;
    -webkit-border-radius: 200px 200px 200px 200px;
    border: 0px solid var(--pureblack);
    cursor: pointer;
    transition: 0.2s;
  }

  // Buttons Text
  #buttonsContainer button p {
    color: var(--nhorange);
    font-family: "Pangea", sans-serif;
    font-size: 0.85em;
    letter-spacing: 3px;
    text-align: center;
    font-weight: 800;
    text-rendering: optimizeLegibility;
    width: 100%;
    transition: 0.2s;
  }

  #lottieAnimationContainer {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    margin-top: 5%;
    width: 100%;
  }

  // Hover Effects
  @media (hover: hover) {
    // Buttons Hover
    button:hover {
      transform: scale(1.1);
    }
    // Buttons Text Hover
    button:hover > p {
      transform: scale(0.9) !important;
    }
  }

  /* ----------- DESKTOP RESPONSIVE ----------- */

  //1860px Window -----------
  @media (max-width: ${breakpoints.window1860}) {
    // Logo, title and buttons container
    #logoTitleButtonsContainer {
      width: 71%;
    }

    // Eneich logo
    img {
      width: 19%;
    }

    // Title
    h1 {
      font-size: 7em;
      margin: 4% 0% 4% 0%;
    }

    // Buttons container
    #buttonsContainer {
      width: 98%;
    }
  }

  //1750px Window -----------
  @media (max-width: ${breakpoints.window1750}) {
    // Logo, title and buttons container
    #logoTitleButtonsContainer {
      width: 72%;
    }

    // Eneich logo
    img {
      width: 18%;
    }

    // Title
    h1 {
      font-size: 6.6em;
      margin: 4% 0% 4% 0%;
    }

    // Buttons container
    #buttonsContainer {
      width: 94%;
    }

    // Buttons
    #buttonsContainer button {
      margin-right: 44px;
    }

    // Buttons Text
    #buttonsContainer button p {
      font-size: 0.83em;
    }
  }

  //1710px Window -----------
  @media (max-width: ${breakpoints.window1710}) {
    // Logo, title and buttons container
    #logoTitleButtonsContainer {
      width: 73%;
    }

    // Eneich logo
    img {
      width: 17%;
    }

    // Title
    h1 {
      font-size: 6.2em;
      margin: 4% 0% 4% 0%;
    }

    // Buttons container
    #buttonsContainer {
      width: 92%;
    }

    // Buttons
    #buttonsContainer button {
      margin-right: 42px;
      padding: 0.1% 2.8% 0.1% 2.8%;
    }

    // Buttons Text
    #buttonsContainer button p {
      font-size: 0.81em;
    }
  }

  //1624px Window -----------
  @media (max-width: ${breakpoints.window1624}) {
    // Logo, title and buttons container
    #logoTitleButtonsContainer {
      width: 75%;
    }

    // Eneich logo
    img {
      width: 16%;
    }

    // Title
    h1 {
      font-size: 5.8em;
      margin: 4% 0% 4% 0%;
    }

    // Buttons container
    #buttonsContainer {
      width: 88%;
    }

    // Buttons
    #buttonsContainer button {
      margin-right: 38px;
    }

    // Buttons Text
    #buttonsContainer button p {
      font-size: 0.79em;
    }
  }

  //14404px Window -----------
  @media (max-width: ${breakpoints.window1440}) {
    // Logo, title and buttons container
    #logoTitleButtonsContainer {
      width: 78%;
    }

    // Eneich logo
    img {
      width: 14%;
    }

    // Title
    h1 {
      font-size: 5.4em;
      margin: 4% 0% 4% 0%;
    }

    // Buttons container
    #buttonsContainer {
      width: 84%;
    }

    // Buttons
    #buttonsContainer button {
      margin-right: 34px;
      padding: 0% 2.7% 0% 2.7%;
    }

    // Buttons Text
    #buttonsContainer button p {
      font-size: 0.77em;
      letter-spacing: 2px;
    }
  }

  //1366px Window -----------
  //Estandar
  @media (max-width: ${breakpoints.window1366}) {
    // Logo, title and buttons container
    #logoTitleButtonsContainer {
      width: 81%;
    }
    
    // Eneich logo
    img {
      width: 13%;
    }

    // Title
    h1 {
      font-size: 5em;
      margin: 4% 0% 4% 0%;
    }

    // Buttons container
    #buttonsContainer {
      width: 80%;
    }

    // Buttons
    #buttonsContainer button {
      margin-right: 30px;
    }

    // Buttons Text
    #buttonsContainer button p {
      font-size: 0.75em;
    }
  }

  //1250px Window -----------
  @media (max-width: ${breakpoints.window1250}) {
    // Logo, title and buttons container
    #logoTitleButtonsContainer {
      width: 83%;
    }
  }

  /* ----------- TABLET RESPONSIVE ----------- */

`;

export { IntroductionContainer };