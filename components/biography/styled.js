import styled from "styled-components";
import { breakpoints } from "../../constants/media";

// BiographyContainer
const BiographyContainer = styled.section`
  width: 100%;
  border-bottom: 1px var(--nhdarkgray) solid;

  // Text Image Container
  #textImageContainer {
    width: 70%;
    max-width: 1344px;
    padding-top: 112px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  // Text Container
  #textContainer {
    width: 48%;
  }

  // Subtitle
  #textContainer span {
    color: var(--nhdarkgray);
    font-family: "Pangea", sans-serif;
    font-size: 0.875em;
    letter-spacing: 3px;
    text-align: left;
    font-weight: 400;
    text-rendering: optimizeLegibility;
    width: 100%;
  }

  // Title
  #textContainer h2 {
    color: var(--nhorange);
    text-rendering: optimizeLegibility;
    font-family: "MT Dalat Sans", serif;
    font-style: normal;
    font-weight: normal;
    font-size: 3.125em;
    letter-spacing: 0.05em;
    text-align: left;
    margin: 23px 0px 35px 0px;
  }

  // Text
  #textContainer p {
    color: var(--nhblack);
    font-style: normal;
    font-weight: 300;
    font-size: 0.875em;
    line-height: 27px;
    font-family: "Pangea", sans-serif;
    text-align: left;
    text-rendering: optimizeLegibility;
    width: 100%;
    max-width: 614px;
  }

  // Button
  #textContainer a {
    background-color: var(--transparent);
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
    color: var(--nhorange);
    font-family: "Pangea", sans-serif;
    font-size: 0.875em;
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

  // Image
  #nhimage {
    width: 33%;
    height: auto;
  }

  // Hover Effects
  @media (hover: hover) {
    // Button Hover
    #textContainer a:hover > img {
      transform: translate(23px);
    }
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
      font-size: 0.85em;
    }

    // Title
    #textContainer h2 {
      margin: 22px 0px 34px 0px;
      font-size: 3em;
    }

    // Text
    #textContainer p {
      font-size: 0.85em;
      line-height: 26.5px;
    }

    // Button
    #textContainer a {
      margin: 56px 0px 0px 0px;
    }

    // Button Text
    #textContainer a p {
      font-size: 0.85em;
    }

    // Button Image
    #textContainer a img {
      width: 28px;
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
      font-size: 0.825em;
    }

    // Title
    #textContainer h2 {
      margin: 22px 0px 32px 0%;
      font-size: 2.875em;
    }

    // Text
    #textContainer p {
      font-size: 0.825em;
      line-height: 26px;
    }

    // Button
    #textContainer a {
      margin: 52px 0px 0px 0px;
    }

    // Button Text
    #textContainer a p {
      font-size: 0.825em;
    }

    // Button Image
    #textContainer a img {
      width: 27px;
    }
  }

  //1710px Window -----------
  @media (max-width: ${breakpoints.window1710}) {
    // Text Image Container
    #textImageContainer {
      width: 73%;
    }

    // Text Container
    #textContainer {
      width: 50%;
    }

    // Subtitle
    #textContainer span {
      font-size: 0.806em;
    }

    // Title
    #textContainer h2 {
      margin: 21px 0px 31px 0%;
      font-size: 2.75em;
    }

    // Text
    #textContainer p {
      font-size: 0.806em;
      line-height: 25px;
    }

    // Button
    #textContainer a {
      margin: 49px 0px 0px 0px;
    }

    // Button Text
    #textContainer a p {
      font-size: 0.806em;
    }

    // Button Image
    #textContainer a img {
      width: 26px;
    }
  }

  //1624px Window -----------
  @media (max-width: ${breakpoints.window1624}) {
    // Text Image Container
    #textImageContainer {
      width: 75%;
    }

    // Subtitle
    #textContainer span {
      font-size: 0.788em;
      letter-spacing: 2px;
    }

    // Title
    #textContainer h2 {
      margin: 21px 0px 29px 0%;
      font-size: 2.625em;
    }

    // Text
    #textContainer p {
      font-size: 0.788em;
      line-height: 24px;
    }

    // Button
    #textContainer a {
      margin: 46px 0px 0px 0px;
    }

    // Button Text
    #textContainer a p {
      font-size: 0.788em;
      letter-spacing: 2px;
    }

    // Button Image
    #textContainer a img {
      width: 25px;
    }
  }

  //1440px Window -----------
  @media (max-width: ${breakpoints.window1440}) {
    // Text Image Container
    #textImageContainer {
      width: 78%;
    }

    // Subtitle
    #textContainer span {
      font-size: 0.769em;
    }

    // Title
    #textContainer h2 {
      margin: 21px 0px 27px 0%;
      font-size: 2.5em;
    }

    // Text
    #textContainer p {
      font-size: 0.769em;
      line-height: 23px;
    }

    // Button
    #textContainer a {
      margin: 43px 0px 0px 0px;
    }

    // Button Text
    #textContainer a p {
      font-size: 0.769em;
    }

    // Button Image
    #textContainer a img {
      width: 24px;
    }
  }

  //1366px Window -----------
  //Estandar
  @media (max-width: ${breakpoints.window1366}) {
    // Text Image Container
    #textImageContainer {
      width: 81%;
    }

    // Text Container
    #textContainer {
      width: 52%;
    }

    // Subtitle
    #textContainer span {
      font-size: 0.75em;
    }

    // Title
    #textContainer h2 {
      margin: 20px 0px 25px 0%;
      font-size: 2.375em;
    }

    // Text
    #textContainer p {
      font-size: 0.75em;
      line-height: 22px;
    }

    // Button
    #textContainer a {
      margin: 40px 0px 0px 0px;
    }

    // Button Text
    #textContainer a p {
      font-size: 0.75em;
    }

    // Button Image
    #textContainer a img {
      width: 23px;
    }
  }

  //1250px Window -----------
  @media (max-width: ${breakpoints.window1250}) {
    // Text Image Container
    #textImageContainer {
      width: 83%;
    }

    // Subtitle
    #textContainer span {
      font-size: 0.688em;
    }

    // Title
    #textContainer h2 {
      margin: 18px 0px 23px 0px;
      font-size: 2.25em;
    }

    // Text
    #textContainer p {
      font-size: 0.688em;
      line-height: 21px;
    }

    // Button
    #textContainer a {
      margin: 37px 0px 0px 0px;
    }

    // Button Text
    #textContainer a p {
      font-size: 0.688em;
    }

    // Button Image
    #textContainer a img {
      width: 22px;
    }
  }

  /* ----------- TABLET RESPONSIVE ----------- */

  //1024px Tablet -----------
  //iPad Pro
  @media (max-width: ${breakpoints.tablet1024}) {
    // Text Image Container
    #textImageContainer {
      width: 87%;
      padding-top: 70px;
    }

    // Text Container
    #textContainer {
      width: 54%;
    }

    // Subtitle
    #textContainer span {
      font-size: 0.688em;
    }

    // Title
    #textContainer h2 {
      margin: 16px 0px 21px 0px;
      font-size: 2.25em;
    }

    // Text
    #textContainer p {
      font-size: 0.688em;
      line-height: 21px;
    }

    // Button
    #textContainer a {
      margin: 35px 0px 0px 0px;
    }

    // Button Text
    #textContainer a p {
      font-size: 0.688em;
    }

    // Button Image
    #textContainer a img {
      width: 22px;
    }
  }

  //934px Tablet -----------
  @media (max-width: ${breakpoints.tablet934}) {
    // Text Image Container
    #textImageContainer {
      width: 60%;
      padding-top: 70px;
      display: block;
    }

    // Text Container
    #textContainer {
      width: 100%;
    }

    // Subtitle
    #textContainer span {
      font-size: 0.875em;
    }

    // Title
    #textContainer h2 {
      margin: 16px 0px 21px 0px;
      font-size: 3.125em;
    }

    // Text
    #textContainer p {
      font-size: 0.875em;
      line-height: 27px;
      text-align: justify;
    }

    // Button
    #textContainer a {
      margin: 35px 0px 0px 0px;
    }

    // Button Text
    #textContainer a p {
      font-size: 0.875em;
    }

    // Button Image
    #textContainer a img {
      width: 29px;
    }

    // Image
    #nhimage {
      padding-top: 80px;
      display: block;
      width: 90%;
      margin: 0 auto;
    }
  }

  /* ----------- MOBILE RESPONSIVE ----------- */

  //651px Mobile -----------
  @media (max-width: ${breakpoints.mobile651}) {
    // Text Image Container
    #textImageContainer {
      width: 80%;
      padding-top: 82px;
      display: block;
    }

    // Text Container
    #textContainer {
      width: 100%;
    }

    // Subtitle
    #textContainer span {
      font-size: 1em;
      letter-spacing: 0.225em;
    }

    // Title
    #textContainer h2 {
      margin: 23px 0px 36px 0px;
      font-size: 40px;
      line-height: 54px;
      letter-spacing: 0.05em;
    }

    // Text
    #textContainer p {
      font-size: 1em;
      line-height: 35px;
      letter-spacing: 0.025em;
      text-align: left;
    }

    // Button
    #textContainer a {
      margin: 58px 0px 0px 0px;
    }

    // Button Text
    #textContainer a p {
      font-size: 16px;
      letter-spacing: 0.225em;
    }

    // Button Image
    #textContainer a img {
      width: 35px;
      max-width: 35px;
    }

    // Image
    #nhimage {
      padding-top: 100px;
      display: block;
      width: 100%;
    }
  }

  //414px Mobile -----------
  //iPhone 6 7 8 Plus
  @media (max-width: ${breakpoints.mobile414}) {
    // Text Image Container
    #textImageContainer {
      padding-top: 60px;
    }

    // Subtitle
    #textContainer span {
      font-size: 0.9em;
    }

    // Title
    #textContainer h2 {
      margin: 23px 0px 23px 0px;
      font-size: 37px;
    }

    // Text
    #textContainer p {
      font-size: 0.9em;
      line-height: 28px;
    }

    // Button
    #textContainer a {
      margin: 40px 0px 0px 0px;
    }

    // Button Text
    #textContainer a p {
      font-size: 0.9em;
    }

    // Button Image
    #textContainer a img {
      width: 32px;
      max-width: 32px;
    }

    // Image
    #nhimage {
      padding-top: 80px;
    }
  }

  //375px Mobile -----------
  //iPhone X
  @media (max-width: ${breakpoints.mobile375}) {
    // Subtitle
    #textContainer span {
      font-size: 0.8em;
    }

    // Title
    #textContainer h2 {
      font-size: 34px;
    }

    // Text
    #textContainer p {
      font-size: 0.85em;
    }

    // Button Text
    #textContainer a p {
      font-size: 0.8em;
    }

    // Button Image
    #textContainer a img {
      width: 30px;
      max-width: 30px;
    }

    // Image
    #nhimage {
      padding-top: 75px;
    }
  }

  //320px Mobile -----------
  //iPhone 5 SE
  @media (max-width: ${breakpoints.mobile320}) {
    // Text Image Container
    #textImageContainer {
      padding-top: 50px;
    }

    // Subtitle
    #textContainer span {
      font-size: 0.75em;
    }

    // Title
    #textContainer h2 {
      font-size: 28px;
      margin: 15px 0px 15px 0px;
    }

    // Text
    #textContainer p {
      font-size: 0.8em;
    }

    // Button
    #textContainer a {
      margin: 30px 0px 0px 0px;
    }

    // Button Text
    #textContainer a p {
      font-size: 0.75em;
    }

    // Button Image
    #textContainer a img {
      width: 27px;
      max-width: 27px;
    }

    // Image
    #nhimage {
      padding-top: 55px;
    }
  }

  //280px Mobile -----------
  //Galaxy Fold
  @media (max-width: ${breakpoints.mobile280}) {
    // Text Image Container
    #textImageContainer {
      padding-top: 40px;
    }

    // Subtitle
    #textContainer span {
      font-size: 0.7em;
    }

    // Title
    #textContainer h2 {
      font-size: 26px;
      margin: 10px 0px 10px 0px;
    }

    // Text
    #textContainer p {
      font-size: 0.75em;
      line-height: 24px;
    }

    // Button
    #textContainer a {
      margin: 30px 0px 0px 0px;
    }

    // Button Text
    #textContainer a p {
      font-size: 0.7em;
    }

    // Button Image
    #textContainer a img {
      width: 24px;
      max-width: 24px;
    }

    // Image
    #nhimage {
      padding-top: 50px;
    }
  }
`;

export { BiographyContainer };
