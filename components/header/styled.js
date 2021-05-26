import styled from "styled-components";

const HeaderContainer = styled.div`
  // Position and scale
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 55px;
  min-height: 55px;
  backdrop-filter: blur(20px) brightness(1.08);
  -webkit-backdrop-filter: blur(20px) brightness(1.08);
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;


  // Logo and Buttons Container
  #logoShopContainer {
    width: 70%;
    max-width: 1344px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
  }

  #logoContainer,
  #shopLenguajeContainer {
    width: 50% !important;
    display: flex;
    align-content: center;
    align-items: center;
  }

  #logoContainer {
    justify-content: flex-start;
  }

  #shopLenguajeContainer {
    justify-content: flex-end;
  }

  #logoContainer h1, #logoContainer h1 a {
    width: 100%;
  }

  #logoContainer img {
    width: 4.5%;
    max-width: 30.23px;
  }

  //Lenguaje Buttons Container
  #lenguajeContainer {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: flex-end;
  }

  #lenguajeContainer a {
    display: block;
    margin-left: 10px;
    color: #EDEAE2;
    text-rendering: optimizeLegibility;
    font-family: "Pangea", sans-serif;
    font-size: 0.9em;
    font-weight: 700;
  }

  // Shop Button
  button {
    background-color: #141414;
    width: 19%;
    max-width: 127px;
    max-height: 37px!important;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    border-radius: 200px 200px 200px 200px;
    -moz-border-radius: 200px 200px 200px 200px;
    -webkit-border-radius: 200px 200px 200px 200px;
    border: 0px solid #000000;
    margin-left: 35px;
    cursor: pointer;
    transition: 0.2s all;
    display: none;
  }

  button:hover {
    background-color: #6A615A;
  }

  button svg {
    color: #EDEAE2;
    font-size: 1.1em;
    margin-left: 20px;
  }

  button p {
    color: #EDEAE2;
    text-rendering: optimizeLegibility;
    font-family: "Pangea", sans-serif;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 3px;
    display: block;
    margin-right: 20px;
    padding-top: 1px;
  }
`;

export { HeaderContainer };
