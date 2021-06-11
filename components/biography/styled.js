import styled from "styled-components";

const BiographyContainer = styled.div`
  width: 100%;
  border-bottom: 1.5px #6a615a solid;

  #textImageContainer {
    width: 70%;
    display: flex;
    margin: 0 auto;
    max-width: 1344px;
    justify-content: space-between;
    padding-top: 112px;
  }

  #textContainer {
    width: 48% !important;
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
    width: 100%;
    max-width: 614px;
  }

  #textContainer a {
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

  #textContainer a p {
    color: #e52b08;
    font-family: "Pangea", sans-serif;
    font-size: 0.9em !important;
    letter-spacing: 3px;
    text-align: left;
    font-weight: 400;
    text-rendering: optimizeLegibility;
    margin: 0px 18px 0px 0px;
    display: inline;
    width: auto;
  }

  #textContainer a img {
    width: 29px;
    max-width: 29px;
    display: block;
    transition: 0.3s all;
    padding-bottom: 2px;
  }

  #textContainer a:hover > img {
    transform: translate(23px);
  }

  #imageContainer {
    width: 48% !important;
    display: flex;
    justify-content: flex-end;
  }

  #imageContainer img {
    width: 475px;
    height: 592px;
    display: block;
  }
`;

export { BiographyContainer };
