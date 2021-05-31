import styled from "styled-components";

const PlatformsContainer = styled.div`
  width: 100%;
  border-bottom: 1.5px #6a615a solid;

  p {
    width: 70%;
    margin: 0 auto;
    max-width: 1344px;
    text-align: center;
    padding: 112px 0px 77px 0px;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    color: #141414;
    letter-spacing: 0.425em;
    font-family: "Pangea", sans-serif;
    text-rendering: optimizeLegibility;
  }

  div {
    width: 70%;
    max-width: 1344px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 0px 0px 112px 0px;
    align-items: center;
    align-content: center;
  }

  a {
    transition: 0.2s;
    cursor: pointer;
  }

  a:hover {
    transform: scale(1.1);
    image-rendering: -moz-crisp-edges; /* Firefox */
    image-rendering: -o-crisp-edges; /* Opera */
    image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
    image-rendering: crisp-edges;
    -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
  }
`;

export { PlatformsContainer };
