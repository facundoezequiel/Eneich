import styled from "styled-components";
import { breakpoints } from "../../constants/media";

// Section Introduction Container
const IntroductionContainer = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 1080px !important;
  min-height: 850px !important;
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
    width: 100%;
    max-width: 1344px;
    margin-top: 55px;
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
  #buttonsContainer a {
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
  #buttonsContainer a p {
    color: var(--nhorange);
    font-family: "Pangea", sans-serif;
    font-size: 0.7em;
    letter-spacing: 3px;
    text-align: center;
    font-weight: 800;
    text-rendering: optimizeLegibility;
    transition: 0.2s;
  }

  // Lottie Animation Container
  #lottieAnimationContainer {
    display: flex;
    justify-content: flex-start;
    margin: 5% 0% 0% 0%;
  }

  // Lottie Animation Section
  #lottieAnimationContainer section {
    height: 70px;
    width: 45px;
  }

  // Hover Effects
  @media (hover: hover) {
    // Buttons Hover
    a:hover {
      transform: scale(1.1);
    }
    // Buttons Text Hover
    a:hover > p {
      transform: scale(0.9) !important;
    }
  }

  /* ----------- DESKTOP RESPONSIVE ----------- */

  //1624px Window -----------
  @media (max-width: ${breakpoints.window1624}) {
    // Section Introduction Container
    max-height: 850px !important;
    min-height: 800px !important;

    // Logo, title and buttons container
    #logoTitleButtonsContainer {
      max-width: 1200px;
    }
  }

  //1366px Window -----------
  //Estandar
  @media (max-width: ${breakpoints.window1366}) {
    // Section Introduction Container
    max-height: 768px !important;
    min-height: 768px !important;

    // Logo, title and buttons container
    #logoTitleButtonsContainer {
      max-width: 1080px;
    }

    // Eneich logo
    img {
      width: 17%;
    }

    // Title
    h1 {
      font-size: 5.5em;
    }

    // Buttons
    #buttonsContainer a {
      padding: 0.2% 4% 0.2% 4%;
    }

    // Lottie Animation Section
    #lottieAnimationContainer section {
      height: 60px;
      width: 38px;
    }
  }

  //1250px Window -----------
  @media (max-width: ${breakpoints.window1250}) {
    // Section Introduction Container
    max-height: 700px !important;
    min-height: 700px !important;

    // Logo, title and buttons container
    #logoTitleButtonsContainer {
      max-width: 950px;
    }
  }

  /* ----------- TABLET RESPONSIVE ----------- */

  //1024px Tablet -----------
  //iPad Pro
  @media (max-width: ${breakpoints.tablet1024}) {
    // Section Introduction Container
    min-height: 650px !important;
    max-height: 650px !important;

    // Logo, title and buttons container
    #logoTitleButtonsContainer {
      max-width: 700px;
    }

    // Buttons
    #buttonsContainer a {
      padding: 0.1% 5% 0.1% 5%;
      margin-right: 30px;
    }
  }

  //830px Tablet -----------
  @media (max-width: ${breakpoints.tablet830}) {
    // Logo, title and buttons container
    #logoTitleButtonsContainer {
      max-width: 600px;
    }
  }

  //768px Tablet -----------
  //iPad
  @media (max-width: ${breakpoints.tablet768}) {
    // Section Introduction Container
    min-height: 600px !important;
    max-height: 600px !important;

    // Logo, title and buttons container
    #logoTitleButtonsContainer {
      max-width: 500px;
    }

    // Eneich logo
    img {
      width: 28%;
    }

    // Title
    h1 {
      font-size: 4.5em;
    }
  }

  /* ----------- MOBILE RESPONSIVE ----------- */

  //651px Mobile -----------
  @media (max-width: ${breakpoints.mobile651}) {
    // Section Introduction Container
    min-height: 400px !important;
    max-height: none !important;
    background-image: url(${"/images/Background651.png"});

    // Logo, title and buttons container
    #logoTitleButtonsContainer {
      width: 80%;
      display: block;
      max-width: none;
    }

    // Eneich logo
    img {
      width: 37%;
    }

    // Title
    h1 {
      font-size: 4.1em;
      margin: 13% 0% 13% 0%;
      line-height: 130%;
    }

    // Buttons container
    #buttonsContainer {
      justify-content: space-between;
    }

    // Buttons
    #buttonsContainer a {
      margin-right: 0px;
      padding: 1% 0% 1% 0%;
      width: 47%;
    }

    // Buttons Text
    #buttonsContainer a p {
      font-size: 0.8em;
    }

    // Lottie Animation Container
    #lottieAnimationContainer {
      justify-content: center;
      margin: 25% 0% 0% 0%;
    }

    // Lottie Animation Section
    #lottieAnimationContainer section {
      height: 86px;
      width: 55px;
    }
  }

  //550px Mobile -----------
  @media (max-width: ${breakpoints.mobile550}) {
    // Title
    h1 {
      font-size: 3.1em;
    }

    // Lottie Animation Section
    #lottieAnimationContainer section {
      height: 58px;
      width: 37px;
    }
  }

  //414px Mobile -----------
  //iPhone 6 7 8 Plus
  @media (max-width: ${breakpoints.mobile414}) {
    // Title
    h1 {
      font-size: 3em;
    }

    // Buttons Text
    #buttonsContainer a p {
      font-size: 0.7em;
    }
  }

  //403px Mobile -----------
  @media (max-width: ${breakpoints.mobile403}) {
    // Title
    h1 {
      font-size: 2.8em;
    }

    // Buttons Text
    #buttonsContainer a p {
      font-size: 0.7em;
    }
  }

  //375px Mobile -----------
  //iPhone X
  @media (max-width: ${breakpoints.mobile375}) {
    // Title
    h1 {
      font-size: 2.7em;
    }

    // Buttons Text
    #buttonsContainer a p {
      font-size: 0.65em;
    }
  }

  //360px Mobile -----------
  //Moto G4
  @media (max-width: ${breakpoints.mobile375}) {
    // Title
    h1 {
      font-size: 2.4em;
    }

    // Buttons Text
    #buttonsContainer a p {
      font-size: 0.55em;
    }
  }

  //320px Mobile -----------
  //iPhone 5 SE
  @media (max-width: ${breakpoints.mobile320}) {
    // Title
    h1 {
      font-size: 2.1em;
    }
  }

  //280px Mobile -----------
  //Galaxy Fold
  @media (max-width: ${breakpoints.mobile280}) {
    // Buttons Text
    #buttonsContainer a p {
      font-size: 0.5em;
    }
  }
`;

export { IntroductionContainer };
