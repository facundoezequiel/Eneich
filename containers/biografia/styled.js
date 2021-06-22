import styled from "styled-components";

const BioespengContainer = styled.div`
  width: 100%;
  background-color: #edeae2;

  @import url("https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap");
  
  #bioContainer {
    width: 100%;
    border-bottom: 1.5px #6a615a solid;
  }

  #titleContainer {
    width: 100%;
    background-color: #6a615a;
    padding: 3% 0% 2% 0%;
  }

  #titleContainer div {
    width: 30%;
    margin: 0 auto;
    max-width: 1344px;
  }

  #titleContainer h2 {
    color: #edeae2;
    text-rendering: optimizeLegibility;
    font-family: "MT Dalat Sans", serif;
    font-style: normal;
    font-weight: normal;
    font-size: 50px;
    letter-spacing: 0.05em;
    text-align: left;
    padding: 30px 0px 0px 0px;
    margin: 0px 0px 0px 0px !important;
  }
  
  #pContainer {
    width: 100%;
    padding: 5% 0% 5% 0%;
    background-color: #edeae2;
    z-index: 98;
  }

  #pContainer p {
    width: 30%;
    margin: 0 auto;
    max-width: 1344px;
  }

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

  #backButton img {
    transition: 0.2s;
    display: block;
    transform: rotate(180deg);
  }

  #backButton span {
    color: #edeae2;
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

  #pContainer p {
    font-size: 1.2em;
    line-height: 35px;
    font-family: "Lora", serif;
    text-align: left;
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
`;

export { BioespengContainer };
