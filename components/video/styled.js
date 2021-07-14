import styled from "styled-components";
import { breakpoints } from "../../constants/media";

// Section Video Container
const VideoContainer = styled.div`
  width: 100%;
  border-bottom: 1px var(--nhdarkgray) solid;
  padding: 112px 0px 112px 0px;
  position: relative;

  // Decoration Element
  #decorationElement {
    position: absolute;
    display: flex;
    justify-content: flex-start;
    top: 18.4%;
    left: 0px;
    z-index: 98;
  }

  // Text, Title and Video Container
  #textImageContainer {
    width: 100%;
    max-width: 1344px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    flex-wrap: wrap-reverse;
    flex-direction: row;
  }

  // Image Container
  #imageContainer {
    width: 43%;
    z-index: 99 !important;
  }

  // Image
  #imageContainer img {
    width: 100%;
    height: auto;
    display: block;
  }

  // Text Container
  #textContainer {
    width: auto;
  }

  // Subtitle
  #textContainer span {
    color: var(--nhdarkgray);
    font-family: "Pangea", sans-serif;
    font-size: 0.875em;
    letter-spacing: 3px;
    text-align: left;
    font-weight: 400;
    text-rendering: optimizeLegibility;
    width: 100%;
  }

  // Title
  #textContainer h2 {
    color: var(--nhorange);
    text-rendering: optimizeLegibility;
    font-family: "MT Dalat Sans", serif;
    font-style: normal;
    font-weight: normal;
    font-size: 3em;
    letter-spacing: 0.05em;
    text-align: left;
    margin: 23px 0px 35px 0px;
  }

  // Text
  #textContainer p {
    color: var(--nhblack);
    font-style: normal;
    font-weight: 300;
    font-size: 0.938em;
    line-height: 180%;
    font-family: "Pangea", sans-serif;
    text-align: left;
    text-rendering: optimizeLegibility;
    width: 100%;
    max-width: 480px;
  }

  // Open Modal Button
  #textContainer a {
    background-color: var(--transparent);
    border: 0px solid;
    padding: 0 !important;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    margin: 52px 0px 0px 0px;
    cursor: pointer;
    display: flex;
    width: fit-content;
  }

  // Button Text
  #textContainer a p {
    color: var(--nhorange);
    font-family: "Pangea", sans-serif;
    font-size: 0.875em;
    letter-spacing: 3px;
    text-align: left;
    font-weight: 400;
    text-rendering: optimizeLegibility;
    margin: 0px 18px 0px 0px;
    display: inline;
  }

  // Button Image
  #textContainer a img {
    width: 29px;
    max-width: 29px;
    display: block;
    transition: 0.3s all;
    padding-bottom: 2px;
  }

  // Hover Effects
  @media (hover: hover) {
    #textContainer a:hover > img  {
      transform: translate(23px);
    }
  }

  /* ----------- DESKTOP RESPONSIVE ----------- */

  //1624px Window -----------
  @media (max-width: ${breakpoints.window1624}) {
    // Text, Title and Image Container
    #textImageContainer {
      max-width: 1200px;
    }

    // Image Container
    #imageContainer {
      width: 51%;
      z-index: 99 !important;
    }
  }

  //1366px Window -----------
  //Estandar
  @media (max-width: ${breakpoints.window1366}) {
    // Text, Title and Image Container
    #textImageContainer {
      max-width: 1080px;
    }

    // Image Container
    #imageContainer {
      width: 47%;
      z-index: 99 !important;
    }
  }

  //1250px Window -----------
  @media (max-width: ${breakpoints.window1250}) {
    // Text, Title and Image Container
    #textImageContainer {
      max-width: 950px;
    }

    // Image Container
    #imageContainer {
      width: 47%;
      z-index: 99 !important;
      margin-right: 2%;
    }
  }

  /* ----------- TABLET RESPONSIVE ----------- */

  //1024px Tablet -----------
  //iPad Pro
  @media (max-width: ${breakpoints.tablet1024}) {
    // Text, Title and Image Container
    #textImageContainer {
      max-width: 700px;
    }

    // Text Container
    #textContainer {
      width: 100%;
    }

    // Text
    #textContainer p {
      max-width: 100%;
    }

    #imageContainer {
      width: 100%;
      z-index: 99 !important;
      margin: 80px 0px 0px 0px; 
    }
  }

  //830px Tablet -----------
  @media (max-width: ${breakpoints.tablet830}) {
    // Text, Title and Image Container
    #textImageContainer {
      max-width: 600px;
    }
  }

  //768px Tablet -----------
  //iPad
  @media (max-width: ${breakpoints.tablet768}) {
    // Text, Title and Image Container
    #textImageContainer {
      max-width: 500px;
    }
  }

  /* ----------- MOBILE RESPONSIVE ----------- */

  //651px Mobile -----------
  @media (max-width: ${breakpoints.mobile651}) {
    // Text, Title and Image Container
    #textImageContainer {
      width: 80%;
    }

    // Text Container
    #textContainer {
      width: 100%;
    }

    // Subtitle
    #textContainer span {
      font-size: 1em;
    }

    // Text
    #textContainer p {
      font-size: 1em;
      line-height: 35px;
    }

    // Button Text
    #textContainer a p {
      font-size: 1em;
    }
  }

  //414px Mobile -----------
  //iPhone 6 7 8 Plus
  @media (max-width: ${breakpoints.mobile414}) {
    // Title
    #textContainer h2 {
      font-size: 2.35em;
    }
  }

  //375px Mobile -----------
  //iPhone X
  @media (max-width: ${breakpoints.mobile375}) {
    // Subtitle
    #textContainer span {
      font-size: 0.8em;
    }

    // Title
    #textContainer h2 {
      font-size: 2em;
    }

    // Text
    #textContainer p {
      font-size: 0.85em;
    }

    // Button
    #textContainer a {
      margin: 35px 0px 0px 0px;
    }

    // Button Text
    #textContainer a p {
      font-size: 0.8em;
    }
  }

  //280px Mobile -----------
  //Galaxy Fold
  @media (max-width: ${breakpoints.mobile280}) {
    // Subtitle
    #textContainer span {
      font-size: 0.7em;
    }

    // Title
    #textContainer h2 {
      font-size: 1.625em;
    }

    // Text
    #textContainer p {
      font-size: 0.75em;
      line-height: 26px;
    }

    // Button
    #textContainer a {
      margin: 30px 0px 0px 0px;
    }

    // Button Text
    #textContainer a p {
      font-size: 0.7em;
    }

    // Button Image
    #textContainer a img {
      width: 24px;
      max-width: 24px;
    }
  }
`;

export { VideoContainer };