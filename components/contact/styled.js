import styled from "styled-components";
import { breakpoints } from "../../constants/media";

const ContactContainer = styled.div`
  width: 100%;
  background-color: var(--nhwhite);

  // Buttons Container
  #buttonsContainers {
    width: 100%;
    max-width: 1344px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
  }

  // Buttons
  a {
    position: relative;
    width: calc(25% - 1px);
    padding: 1.5% 0% 1.5% 0%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    background-color: var(--nhdarkgray);
    border: none;
  }

  // Buttons Before
  a::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    background-color: var(--nhwhite);
    transition: 0.2s ease-out;
  }

  // Icon
  span {
    position: relative;
    display: block;
    font-size: 2em;
    color: var(--nhdarkgray);
    transition: 0.2s;
  }

  // Border Right and Left Buttons
  #whatsappButton {
    width: calc(25% - 2px); 
    border-left: 1px var(--nhdarkgray) solid;
    border-right: 1px var(--nhdarkgray) solid;
  }

  // Border Right Buttons
  #facebookButton, #instagramButton, #mailButton {
    border-right: 1px var(--nhdarkgray) solid;
  }

  // Facebook Icon
  #facebookIcon {
    transform: scale(0.8);
    transition: 0.2s;
  }

  // Hover Effects
  @media (hover: hover) {
    a:hover::before {
      height: 0%;
    }

    a:hover > span {
      color: var(--nhwhite);
      transform: scale(1.1);
    }

    a:hover > #facebookIcon {
      transform: scale(1);
    }
  }

  /* ----------- DESKTOP RESPONSIVE ----------- */

  //1624px Window -----------
  @media (max-width: ${breakpoints.window1624}) {
    // Buttons Container
    #buttonsContainers {
      max-width: 1200px;
    }
  }

  //1366px Window -----------
  //Estandar
  @media (max-width: ${breakpoints.window1366}) {
    // Buttons Container
    #buttonsContainers {
      max-width: 1080px;
    }
  }

  //1250px Window -----------
  @media (max-width: ${breakpoints.window1250}) {
    // Buttons Container
    #buttonsContainers {
      max-width: 950px;
    }
  }

  /* ----------- TABLET RESPONSIVE ----------- */

  //1024px Tablet -----------
  //iPad Pro
  @media (max-width: ${breakpoints.tablet1024}) {
    // Buttons Container
    #buttonsContainers {
      max-width: 700px;
    }

    // BUtons
    a {
      height: 80px;
      padding: 0% 0% 0% 0%;
    }
  }

  //830px Tablet -----------
  @media (max-width: ${breakpoints.tablet830}) {
    // Buttons Container
    #buttonsContainers {
      max-width: 600px;
    }
  }

  //768px Tablet -----------
  //iPad
  @media (max-width: ${breakpoints.tablet768}) {
    // Buttons Container
    #buttonsContainers {
      max-width: 500px;
    }
  }

  /* ----------- MOBILE RESPONSIVE ----------- */

  //651px Mobile -----------
  @media (max-width: ${breakpoints.mobile651}) {
    // Buttons Container
    #buttonsContainers {
      width: 100%;
      max-width: none;
    }

    // Buttons
    a {
      width: 50%;
    }

    // Border Right Buttons
    #whatsappButton, #facebookButton {
      width: calc(50% - 1px);
      border-right: 1px var(--nhdarkgray) solid;
      border-left: 0px var(--nhdarkgray) solid;
    }

    // None Border Butttons
    #instagramButton, #mailButton {
      border-right: 0px var(--nhdarkgray) solid;
      border-left: 0px var(--nhdarkgray) solid;
    }

    // Border Top Buttons
    #facebookButton, #mailButton {
      border-top: 1px var(--nhdarkgray) solid;
    }
  }
`;

export { ContactContainer };