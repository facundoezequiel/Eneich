import styled from "styled-components";
import { breakpoints } from "../../constants/media";

// Section Video Container
const VideoContainer = styled.div`
  width: 100%;
  border-bottom: 1.5px #6a615a solid;
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
  #textVideoContainer {
    width: 100%;
    max-width: 1344px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
  }

  // Video Container
  #videoContainer {
    width: 50%;
    z-index: 99 !important;
    margin-right: 19% !important;
  }

  // Text Container
  #textContainer {
    display: inline;
  }

  #textContainer span {
    color: #6a615a;
    font-family: "Pangea", sans-serif;
    font-size: 0.8em;
    letter-spacing: 3px;
    text-align: left;
    font-weight: 400;
    text-rendering: optimizeLegibility;
    width: 100%;
  }

  // Title
  #textContainer h2 {
    color: #e52b08;
    text-rendering: optimizeLegibility;
    font-family: "MT Dalat Sans", serif;
    font-style: normal;
    font-weight: normal;
    font-size: 50px;
    letter-spacing: 0.05em;
    text-align: left;
    margin: 23px 0px 35px 0%;
  }

  // Paragraph
  #textContainer p {
    color: #141414;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 27px;
    letter-spacing: 0.045em;
    font-family: "Pangea", sans-serif;
    text-align: left;
    text-rendering: optimizeLegibility;
    max-width: 480px;
  }

  // Open Modal Button
  /* #textContainer button {
    background-color: transparent;
    border: 0px solid;
    padding: 0 !important;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    margin: 52px 0px 0px 0px;
    cursor: pointer;
  }

  #textContainer button p {
    color: #e52b08;
    font-family: "Pangea", sans-serif;
    font-size: 1em;
    letter-spacing: 3px;
    text-align: left;
    font-weight: 400;
    text-rendering: optimizeLegibility;
    margin-right: 18px;
  }

  #textContainer button img {
    width: 29px;
    max-width: 29px;
    display: block;
    transition: 0.3s all;
    padding-bottom: 2px;
  }

  // Hover Effects
  @media (hover: hover) {
    #textContainer button:hover > img {
      transform: translate(23px);
    }
  } */

  /* ----------- DESKTOP RESPONSIVE ----------- */

  //1624px Window -----------
  @media (max-width: ${breakpoints.window1624}) {
    // Text, Title and Image Container
    #textVideoContainer {
      max-width: 1200px;
    }
  }

  //1366px Window -----------
  //Estandar
  @media (max-width: ${breakpoints.window1366}) {
    // Text, Title and Image Container
    #textVideoContainer {
      max-width: 1080px;
    }
  }

  //1250px Window -----------
  @media (max-width: ${breakpoints.window1250}) {
    // Text, Title and Image Container
    #textVideoContainer {
      max-width: 950px;
    }
  }

  /* ----------- TABLET RESPONSIVE ----------- */
`;

export { VideoContainer };