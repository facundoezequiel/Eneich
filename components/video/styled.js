import styled from "styled-components";

const VideoContainer = styled.div`
  width: 100%;
  border-bottom: 1.5px #6a615a solid;
  max-height: 581px;
  padding: 112px 0px 112px 0px;
  position: relative;

  #secondElement {
    position: absolute;
    display: flex;
    justify-content: flex-start;
    top: 16%;
    left: 0px;
  }

  #textImageContainer {
    width: 70%;
    display: flex;
    margin: 0 auto;
    max-width: 1344px;
    justify-content: space-between;
  }

  #playerContainer {
    width: 50%;
    max-width: 634px;
    height: 356.56px;
    display: flex;
    justify-content: flex-end;
  }

  #textContainer {
    width: 42% !important;
  }

  #textContainer span {
    color: #6a615a;
    font-family: "Pangea", sans-serif;
    font-size: 1em;
    letter-spacing: 3px;
    text-align: left;
    font-weight: 400;
    text-rendering: optimizeLegibility;
    width: 100%;
  }

  #textContainer h2 {
    color: #e52b08;
    text-rendering: optimizeLegibility;
    font-family: "MT Dalat Sans", serif;
    font-style: normal;
    font-weight: normal;
    font-size: 55px;
    letter-spacing: 0.05em;
    text-align: left;
    margin: 23px 0px 35px 0%;
  }

  #textContainer p {
    color: #141414;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 27px;
    letter-spacing: 0.045em;
    font-family: "Pangea", sans-serif;
    text-align: left;
    text-rendering: optimizeLegibility;
    width: 100%;
    max-width: 614px;
  }

  #textContainer button {
    background-color: transparent;
    border: 0px solid;
    padding: 0 !important;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    margin: 58px 0px 0px 0px;
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

  #textContainer button:hover > img {
    transform: translate(23px);
  }
`;

export { VideoContainer };
