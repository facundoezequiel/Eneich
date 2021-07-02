import styled from "styled-components";

// Platforms Container
const PlatformsContainer = styled.div`
  width: 100%;
  border-bottom: 1.5px #6a615a solid;

  // Title
  p {
    width: 70%;
    margin: 0 auto;
    max-width: 1344px;
    text-align: center;
    padding: 112px 0px 27px 0px;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    color: #141414;
    letter-spacing: 0.425em;
    font-family: "Pangea", sans-serif;
    text-rendering: optimizeLegibility;
  }

  // Buttons Container
  #buttonsContainer {
    width: 70%;
    max-width: 1344px;
    display: flex;
    padding: 0px 0px 112px 0px;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: row;
    flex-wrap: wrap;
  }

  // Buttons
  a {  
    margin: 50px 31px 0px 31px;
  }

  .imgContainer {
    transition: 0.2s;
    display: flex;
  }

  div img {
    width: 100%;
    max-width: 100%;
    height: auto;
    display: block;
    transition: 0.2s;
  }

  // Buttons Hover
  .imgContainer:hover {
    transform: scale(1.1);
    image-rendering: -moz-crisp-edges; /* Firefox */
    image-rendering: -o-crisp-edges; /* Opera */
    image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
    image-rendering: crisp-edges;
    -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
    cursor: pointer;
  }
`;

export { PlatformsContainer };
