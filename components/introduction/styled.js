import styled from "styled-components";

const IntroductionContainer = styled.div`
  width: 100%;
  height: 100vh !important;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;

  #introductionDivH1 {
    width: 70%;
    max-width: 1344px;
    margin-top: 60px;
  }

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

  h1 {
    color: #141414;
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

  #buttonsContainer {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: flex-start;
    width: 100%;
  }

  #buttonsContainer button {
    background-color: #EDEAE2;
    margin-right: 46px;
    padding: 0.1% 3% 0.1% 3%;
    border-radius: 200px 200px 200px 200px;
    -moz-border-radius: 200px 200px 200px 200px;
    -webkit-border-radius: 200px 200px 200px 200px;
    border: 0px solid #000000;
    cursor: pointer;
  }

  #buttonsContainer button p {
    color: #E52B08;
    font-family: "Pangea", sans-serif;
    font-size: 0.85em;
    letter-spacing: 3px;
    text-align: center;
    font-weight: 800;
    text-rendering: optimizeLegibility;
    width: 100%;
  }
`;

export { IntroductionContainer };
