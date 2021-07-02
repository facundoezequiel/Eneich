import styled from "styled-components";
import { breakpoints } from "../../constants/media";

// BiographyContainer
const BiographyContainer = styled.div`
  width: 100%;
  border-bottom: 1px #6a615a solid;

  // Text Image Container
  #textImageContainer {
    width: 70%;
    display: flex;
    margin: 0 auto;
    max-width: 1344px;
    justify-content: space-between;
    padding-top: 112px;
  }

  // Text Container
  #textContainer {
    width: 48% !important;
  }

  // Subtitle
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

  // Text
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

  // Button
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

  // Button Text
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

  // Button Image
  #textContainer a img {
    width: 29px;
    max-width: 29px;
    display: block;
    transition: 0.3s all;
    padding-bottom: 2px;
  }

  // Button Hover
  #textContainer a:hover > img {
    transform: translate(23px);
  }

  // Image Container
  #imageContainer {
    width: 48% !important;
    display: flex;
    justify-content: flex-end;
  }

  // Image
  #imageContainer img {
    width: 100%;
    max-width: 475px;
    padding-left: 200px;
    display: block;
  }

  /* ----------- DESKTOP RESPONSIVE ----------- */

  //1860px Window -----------
  @media (max-width: ${breakpoints.window1860}) {
    // Text Image Container
    #textImageContainer {
      width: 71%;
    }

    // Subtitle
    #textContainer span {
      font-size: 0.79em !important;
    }

    // Title
    #textContainer h2 {
      font-size: 48px;
      margin: 22px 0px 34px 0%;
    }
    
    // Text
    #textContainer p {
      letter-spacing: 0.044em;
    }

    // Button
    #textContainer a {
      margin: 56px 0px 0px 0px;
    }

    // Button Text
    #textContainer a p {
      font-size: 0.79em !important;
    }

    // Button Image
    #textContainer a img {
      width: 28px;
    }

    // Image
    #imageContainer img {
      max-width: 450px;
    }
  }

  //1750px Window -----------
  @media (max-width: ${breakpoints.window1750}) {
    // Text Image Container
    #textImageContainer {
      width: 72%;
    }

    // Subtitle
    #textContainer span {
      font-size: 0.77em !important;
    }

    // Title
    #textContainer h2 {
      font-size: 46px;
      margin: 22px 0px 32px 0%;
    }

    // Text
    #textContainer p {
      font-size: 13px;
      line-height: 26px;
      letter-spacing: 0.041em;
    }

    // Button
    #textContainer a {
      margin: 52px 0px 0px 0px;
    }

    // Button Text
    #textContainer a p {
      font-size: 0.77em !important;
    }

    // Button Image
    #textContainer a img {
      width: 27px;
    }

    // Image
    #imageContainer img {
      max-width: 435px;
    }
  }

  //1710px Window -----------
  @media (max-width: ${breakpoints.window1710}) {
    // Text Image Container
    #textImageContainer {
      width: 73%;
    }

    // Subtitle
    #textContainer span {
      font-size: 0.75em !important;
    }

    // Title
    #textContainer h2 {
      font-size: 44px;
      margin: 21px 0px 31px 0%;
    }

    // Text
    #textContainer p {
      letter-spacing: 0.037em;
    }

    // Button
    #textContainer a {
      margin: 49px 0px 0px 0px;
    }

    // Button Text
    #textContainer a p {
      font-size: 0.75em !important;
    }

    // Button Image
    #textContainer a img {
      width: 26px;
    }

    // Image
    #imageContainer img {
      max-width: 415px;
    }
  }

  //1624px Window -----------
  @media (max-width: ${breakpoints.window1624}) {
    // Text Image Container
    #textImageContainer {
      width: 74%;
    }

    // Subtitle
    #textContainer span {
      font-size: 0.74em !important;
      letter-spacing: 2px;
    }

    // Title
    #textContainer h2 {
      font-size: 42px;
      margin: 21px 0px 29px 0%;
    }

    // Text
    #textContainer p {
      line-height: 25px;
      letter-spacing: 0.035em;
    }

    // Button
    #textContainer a {
      margin: 46px 0px 0px 0px;
    }

    // Button Text
    #textContainer a p {
      font-size: 0.74em !important;
      letter-spacing: 2px;
    }

    // Button Image
    #textContainer a img {
      width: 25px;
    }

    // Image
    #imageContainer img {
      max-width: 400px;
    }
  }

  //1440px Window -----------
  @media (max-width: ${breakpoints.window1440}) {
    // Text Image Container
    #textImageContainer {
      width: 75%;
    }

    // Subtitle
    #textContainer span {
      font-size: 0.73em !important;
    }

    // Title
    #textContainer h2 {
      font-size: 40px;
      margin: 21px 0px 27px 0%;
    }

    // Text
    #textContainer p {
      font-size: 12px;
      letter-spacing: 0.033em;
    }

    // Button
    #textContainer a {
      margin: 43px 0px 0px 0px;
    }

    // Button Text
    #textContainer a p {
      font-size: 0.73em !important;
    }

    // Button Image
    #textContainer a img {
      width: 24px;
    }

    // Image
    #imageContainer img {
      max-width: 390px;
    }
  }

  //1366px Window -----------
  @media (max-width: ${breakpoints.window1366}) {
    // Text Image Container
    #textImageContainer {
      width: 76%;
    }

    // Subtitle
    #textContainer span {
      font-size: 0.72em !important;
    }

    // Title
    #textContainer h2 {
      font-size: 37px;
      margin: 20px 0px 25px 0%;
    }

    // Text
    #textContainer p {
      line-height: 24px;
      letter-spacing: 0.03em;
    }

    // Button
    #textContainer a {
      margin: 40px 0px 0px 0px;
    }

    // Button Text
    #textContainer a p {
      font-size: 0.72em !important;
    }

    // Button Image
    #textContainer a img {
      width: 23px;
    }

    // Image
    #imageContainer img {
      max-width: 375px;
    }
  }

  //1250px Window -----------
  @media (max-width: ${breakpoints.window1250}) {
    // Text Image Container
    #textImageContainer {
      width: 77%;
    }

    // Subtitle
    #textContainer span {
      font-size: 0.71em !important;
    }

    // Title
    #textContainer h2 {
      font-size: 34px;
      margin: 18px 0px 23px 0px;
    }

    // Text
    #textContainer p {
      font-size: 11px;
      line-height: 23px;
      letter-spacing: 0.025em;
    }

    // Button
    #textContainer a {
      margin: 37px 0px 0px 0px;
    }

    // Button Text
    #textContainer a p {
      font-size: 0.71em !important;
    }

    // Button Image
    #textContainer a img {
      width: 22px;
    }

    // Image
    #imageContainer img {
      max-width: 355px;
    }
  }

  /* ----------- TABLET RESPONSIVE ----------- */
`;

export { BiographyContainer };