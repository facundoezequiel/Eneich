import styled from "styled-components";
import { breakpoints } from "../../constants/media";

// Platforms Container
const PlatformsContainer = styled.section`
  width: 100%;
  border-bottom: 1px var(--nhdarkgray) solid;
  padding: 112px 0px 112px 0px;

  // Title
  p {
    text-align: center;
    font-style: normal;
    font-weight: 300;
    font-size: 1em;
    color: var(--nhblack);
    letter-spacing: 0.425em;
    font-family: "Pangea", sans-serif;
    text-rendering: optimizeLegibility;
    margin-bottom: 30px;
  }

  // Border Lines
  hr {
    display: none;
  }

  // Buttons Container
  #buttonsContainer {
    width: 70%;
    max-width: 1344px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    flex-direction: row;
    flex-wrap: wrap;
  }

  // Buttons
  a {
    margin: 4rem 1rem 0rem 1rem;
    height: auto;
    transition: 0.2s;
    cursor: pointer;
  }

  // YouTube Button
  #youtubeLogo {
    margin-left: 0rem !important;
  }

  // Soundcloud Button
  #soundcloudLogo {
    margin-right: 0rem !important;
  }

  // Buttons Logo image
  img {
    width: 11rem;
    height: auto;
    display: block;
  }

  // Spotify and YouTube Logos
  #spotifyLogo img,
  #youtubeLogo img {
    width: 10rem;
  }

  // Soundcloud Logo
  #soundcloudLogo img {
    width: 14rem;
  }

  // Hover Effects
  @media (hover: hover) {
    a:hover {
      transform: scale(1.1);
    }
  }

  /* ----------- DESKTOP RESPONSIVE ----------- */

  //1860px Window -----------
  @media (max-width: ${breakpoints.window1860}) {
    // Title
    p {
      font-size: 0.95em;
    }

    // Buttons Container
    #buttonsContainer {
      width: 71%;
    }
  }

  //1750px Window -----------
  @media (max-width: ${breakpoints.window1750}) {
    // Title
    p {
      font-size: 0.9em;
    }

    // Buttons Container
    #buttonsContainer {
      width: 72%;
    }

    // Buttons Logo image
    img {
      width: 10.8rem;
    }

    // Spotify and YouTube Logos
    #spotifyLogo img,
    #youtubeLogo img {
      width: 9.8rem;
    }

    // Soundcloud Logo
    #soundcloudLogo img {
      width: 13.8rem;
    }
  }

  //1710px Window -----------
  @media (max-width: ${breakpoints.window1710}) {
    // Title
    p {
      font-size: 0.87em;
    }

    // Buttons Container
    #buttonsContainer {
      width: 73%;
    }
  }

  //1624px Window -----------
  @media (max-width: ${breakpoints.window1624}) {
    // Title
    p {
      font-size: 0.84em;
    }

    // Buttons Container
    #buttonsContainer {
      width: 75%;
    }

    // Buttons Logo image
    img {
      width: 10.6rem;
    }

    // Spotify and YouTube Logos
    #spotifyLogo img,
    #youtubeLogo img {
      width: 9.6rem;
    }

    // Soundcloud Logo
    #soundcloudLogo img {
      width: 13.6rem;
    }
  }

  //1440px Window -----------
  @media (max-width: ${breakpoints.window1440}) {
    // Title
    p {
      font-size: 0.81em;
    }

    // Buttons Container
    #buttonsContainer {
      width: 78%;
    }

    // Buttons Logo image
    img {
      width: 10.4rem;
    }

    // Spotify and YouTube Logos
    #spotifyLogo img,
    #youtubeLogo img {
      width: 9.4rem;
    }

    // Soundcloud Logo
    #soundcloudLogo img {
      width: 13.4rem;
    }
  }

  //1366px Window -----------
  //Estandar
  @media (max-width: ${breakpoints.window1366}) {
    // Title
    p {
      font-size: 0.79em;
    }

    // Buttons Container
    #buttonsContainer {
      width: 81%;
    }

    // Buttons Logo image
    img {
      width: 10.2rem;
    }

    // Spotify and YouTube Logos
    #spotifyLogo img,
    #youtubeLogo img {
      width: 9.2rem;
    }

    // Soundcloud Logo
    #soundcloudLogo img {
      width: 13.2rem;
    }
  }

  //1250px Window -----------
  @media (max-width: ${breakpoints.window1250}) {
    // Title
    p {
      font-size: 0.77em;
    }

    // Buttons Container
    #buttonsContainer {
      width: 83%;
    }

    // Buttons Logo image
    img {
      width: 10rem;
    }

    // Spotify and YouTube Logos
    #spotifyLogo img,
    #youtubeLogo img {
      width: 9rem;
    }

    // Soundcloud Logo
    #soundcloudLogo img {
      width: 13rem;
    }
  }

  /* ----------- TABLET RESPONSIVE ----------- */

  //1024px Tablet -----------
  //iPad Pro
  @media (max-width: ${breakpoints.tablet1024}) {
    // Title
    p {
      font-size: 0.77em;
    }

    // Buttons Container
    #buttonsContainer {
      width: 87%;
    }

    // Buttons Logo image
    img {
      width: 9rem;
    }

    // Spotify and YouTube Logos
    #spotifyLogo img,
    #youtubeLogo img {
      width: 8rem;
    }

    // Soundcloud Logo
    #soundcloudLogo img {
      width: 12rem;
    }
  }

  //934px Tablet -----------
  @media (max-width: ${breakpoints.tablet934}) {
    // Platforms Container
    padding: 60px 0px 0px 0px;

    // Title
    p {
      font-size: 0.875em;
      margin-bottom: 60px;
    }

    // Border Lines
    hr {
      display: inline;
      width: 100vw;
      min-width: 100vw;
      margin: 0px 0px 0px 0px;
      border-top: 1px solid var(--nhdarkgray);
    }

    // Buttons Container
    #buttonsContainer {
      width: 60%;
      justify-content: center;
    }

    // Buttons
    a {
      width: 49.7%;
      height: 60px;
      transition: 0.2s;
      cursor: pointer;
      margin: 0rem 0rem 0rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      padding: 1.5% 0% 1.5% 0%;
    }

    // Left Buttons Mobile
    .leftButtonMobile {
      border-right: 1px var(--nhdarkgray) solid;
      border-left: 1px var(--nhdarkgray) solid;
    }

    // Right Buttons Mobile
    .rightButtonMobile {
      border-right: 1px var(--nhdarkgray) solid;
    }

    // Center Buttons Mobile
    .centerButtonMobile {
      border-right: 1px var(--nhdarkgray) solid;
      border-left: 1px var(--nhdarkgray) solid;
      width: 99.8%;
    }

    // Buttons Logo image
    img {
      width: 8rem;
    }

    // Spotify and YouTube Logos
    #spotifyLogo img,
    #youtubeLogo img {
      width: 7rem;
    }

    // Soundcloud Logo
    #soundcloudLogo img {
      width: 11rem;
    }
  }

  /* ----------- MOBILE RESPONSIVE ----------- */

  //651px Mobile -----------
  @media (max-width: ${breakpoints.mobile651}) {
    // Title
    p {
      font-size: 1em;
    }

    // Buttons Container
    #buttonsContainer {
      width: 100%;
    }

    // Left Buttons Mobile
    .leftButtonMobile {
      border-right: 1px var(--nhdarkgray) solid;
      border-left: 0px var(--nhdarkgray) solid;
    }

    // Right Buttons Mobile
    .rightButtonMobile {
      border-right: 0px var(--nhdarkgray) solid;
    }

    // Center Buttons Mobile
    .centerButtonMobile {
      border-right: 0px var(--nhdarkgray) solid;
      border-left: 0px var(--nhdarkgray) solid;
      width: 100%;
    }
  }

  //550px Mobile -----------
  @media (max-width: ${breakpoints.mobile550}) {
    // Title
    p {
      font-size: 0.95em;
    }
  }

  //414px Mobile -----------
  //iPhone 6 7 8 Plus
  @media (max-width: ${breakpoints.mobile414}) {
    // Title
    p {
      font-size: 0.9em;
    }

    // Buttons Logo image
    img {
      width: 7.5rem;
    }

    // Spotify and YouTube Logos
    #spotifyLogo img,
    #youtubeLogo img {
      width: 6.5rem;
    }

    // Soundcloud Logo
    #soundcloudLogo img {
      width: 10.5rem;
    }
  }

  //375px Mobile -----------
  //iPhone X
  @media (max-width: ${breakpoints.mobile375}) {
    // Title
    p {
      font-size: 0.8em;
    }

    // Buttons Logo image
    img {
      width: 7rem;
    }

    // Spotify and YouTube Logos
    #spotifyLogo img,
    #youtubeLogo img {
      width: 6rem;
    }

    // Soundcloud Logo
    #soundcloudLogo img {
      width: 10rem;
    }
  }

  //360px Mobile -----------
  //Moto G4
  @media (max-width: ${breakpoints.mobile360}) {
    // Title
    p {
      font-size: 0.77em;
    }
  }

  //320px Mobile -----------
  //iPhone 5 SE
  @media (max-width: ${breakpoints.mobile320}) {
    // Title
    p {
      font-size: 0.75em;
    }

    // Buttons Logo image
    img {
      width: 6rem;
    }

    // Spotify and YouTube Logos
    #spotifyLogo img,
    #youtubeLogo img {
      width: 5rem;
    }

    // Soundcloud Logo
    #soundcloudLogo img {
      width: 9rem;
    }
  }

  //280px Mobile -----------
  //Galaxy Fold
  @media (max-width: ${breakpoints.mobile280}) {
    // Title
    p {
      font-size: 0.7em;
    }
  }
`;

export { PlatformsContainer };
