import styled from "styled-components";
import { breakpoints } from "../../constants/media";

// Platforms Container
const PlatformsContainer = styled.section`
  width: 100%;
  padding: 112px 0px 112px 0px;
  border-bottom: 1px var(--nhdarkgray) solid;

  // Title
  p {
    margin-bottom: 30px;
    font-family: "Pangea", sans-serif;
    font-size: 1em;
    font-weight: 300;
    font-style: normal;
    letter-spacing: 0.425em;
    text-align: center;
    color: var(--nhblack);
    text-rendering: optimizeLegibility; 
  }

  // Buttons Container
  #buttonsContainer {
    width: 100%;
    max-width: 1344px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    flex-direction: row;
    flex-wrap: wrap;
  }

  // Buttons
  a {
    height: auto;
    margin: 4rem 1rem 0rem 1rem;
    cursor: pointer;
    transition: 0.2s;
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
    width: 11.5rem;
    height: auto;
    display: block;
    transition: 0.2s;
  }

  // Spotify and YouTube Logos
  #spotifyLogo img,
  #youtubeLogo img {
    width: 10rem;
  }

  #bandcampLogo img {
    padding-top: 5px;
  }

  // Soundcloud Logo
  #soundcloudLogo img {
    width: 14rem;
  }

  // Hover Effects
  @media (hover: hover) {
    a:hover > img {
      transform: scale(1.1);
    }
  }

  /* ----------- DESKTOP RESPONSIVE ----------- */

  //1750px Window -----------
  @media (max-width: ${breakpoints.window1750}) {
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

  //1624px Window -----------
  @media (max-width: ${breakpoints.window1624}) {
    // Buttons Container
    #buttonsContainer {
      max-width: 1200px;
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
    // Buttons Container
    #buttonsContainer {
      max-width: 1080px;
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
      font-size: 0.875em;
    }

    // Buttons Container
    #buttonsContainer {
      max-width: 950px;
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
    // Platforms Container
    padding: 60px 0px 0px 0px;

    // Title
    p {
      margin-bottom: 0px;
      padding-bottom: 60px;
      border-bottom: 1px var(--nhdarkgray) solid;
    }

    // Buttons Container
    #buttonsContainer {
      max-width: 700px;
      justify-content: center;
    }

    // Buttons
    a {
      width: 50%;
      height: 80px;
      margin: 0rem 0rem 0rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      cursor: pointer;
      transition: 0.2s;
    }

    // Left Buttons Mobile
    .leftButtonMobile {
      width: calc(50% - 2px);
      border-right: 1px var(--nhdarkgray) solid;
      border-left: 1px var(--nhdarkgray) solid;
    }

    // Right Buttons Mobile
    .rightButtonMobile {
      width: calc(50% - 1px);
      border-right: 1px var(--nhdarkgray) solid;
    }

    // Center Buttons Mobile
    .centerButtonMobile {
      width: calc(100% - 2px);
      border-right: 1px var(--nhdarkgray) solid;
      border-left: 1px var(--nhdarkgray) solid;
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

    #tidalLogo, #bandcampLogo, #soundcloudLogo {
      border-top: 1px var(--nhdarkgray) solid;
    }

    // Soundcloud Logo
    #soundcloudLogo img {
      width: 11rem;
    }
  }

   //830px Tablet -----------
   @media (max-width: ${breakpoints.tablet830}) {
    // Buttons Container
    #buttonsContainer {
      max-width: 600px;
    }
  }

  //768px Tablet -----------
  //iPad
  @media (max-width: ${breakpoints.tablet768}) {
    // Buttons Container
    #buttonsContainer {
      max-width: 500px;
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
      max-width: none;
    }

    // Left Buttons Mobile
    .leftButtonMobile {
      width: calc(50% - 1px);
      border-right: 1px var(--nhdarkgray) solid;
      border-left: 0px var(--nhdarkgray) solid;
    }

    // Right Buttons Mobile
    .rightButtonMobile {
      width: 50%;
      border-right: 0px var(--nhdarkgray) solid;
    }

    // Center Buttons Mobile
    .centerButtonMobile {
      width: 100%;
      border-right: 0px var(--nhdarkgray) solid;
      border-left: 0px var(--nhdarkgray) solid;
    }
    
    // Hover Effects
    a:hover > img {
      transform: scale(1);
    }
  }

  //414px Mobile -----------
  //iPhone 6 7 8 Plus
  @media (max-width: ${breakpoints.mobile414}) {
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

  //280px Mobile -----------
  //Galaxy Fold
  @media (max-width: ${breakpoints.mobile280}) {
    // Title
    p {
      font-size: 0.7em;
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
`;

export { PlatformsContainer };
