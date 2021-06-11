import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  background-color: #6a615a;
  border-top: 1.5px #edeae2 solid;

  #logoButtonsContainer {
    width: 70%;
    margin: 0 auto;
    max-width: 1344px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    padding: 1.5% 0% 1.5% 0%;
  }

  #logoDiv {
    width: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
  }

  #logoDiv a img {
    width: 80%;
  }

  #buttonsDiv {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
    width: 80%;
  }

  #buttonsDiv a,
  #buttonsDiv p {
    color: #edeae2;
    margin: 0% 0% 0% 5%;
  }

  #buttonsDiv a {
    font-size: 12px !important;
    position: relative;
    letter-spacing: 0.065em !important;
    background-color: #edeae2;
  }

  #buttonsDiv p,
  #buttonsDiv a span,
  #lenguajeButtonsDiv a span {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    letter-spacing: 0.045em;
    font-family: "Pangea", sans-serif;
    text-align: right;
    text-rendering: optimizeLegibility;
  }

  #lenguajeButtonsDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin: 0% 0% 0% 5%;
  }

  #lenguajeButtonsDiv a {
    margin: 0% 0% 0% 30% !important;
  }

  #buttonsDiv span {
    color: #edeae2;
    position: relative;
    display: inline-block;
    transition: 0.2s;
    height: 100%;
  }

  #buttonsDiv a:hover > span {
    color: #6a615a;
    display: block;
  }

  #buttonsDiv a::before {
    top: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-color: #6a615a;
    position: absolute;
    content: "";
    transition: 0.4s ease-out;
  }

  #buttonsDiv a:hover::before {
    width: 0%;
  }

  #esp {
    font-weight: 800 !important;
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

export { FooterContainer };
