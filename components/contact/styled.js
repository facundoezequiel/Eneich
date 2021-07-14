import styled from "styled-components";
import { breakpoints } from "../../constants/media";

const ContactContainer = styled.div`
  width: 100%;
  background-color: #edeae2;

  // Buttons Container
  #buttonsContainers {
    width: 100%;
    max-width: 1344px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    margin: 0 auto;
    flex-direction: row;
    flex-wrap: wrap;
  }

  // Buttons
  a {
    width: 24.9%;
    padding: 1.5% 0% 1.5% 0%;
    display: flex;
    position: relative;
    background-color: #6a615a;
    border: none;
    justify-content: center;
    align-content: center;
    align-items: center;
  }

  // Buttons Before
  a::before {
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-color: #edeae2;
    position: absolute;
    content: "";
    transition: 0.2s ease-out;
  }

  // Icon
  span {
    color: #6a615a;
    position: relative;
    display: inline-block;
    font-size: 2em;
    transition: 0.2s;
    display: block;
  }

  // Hover Effects
  @media (hover: hover) {
    a:hover::before {
      height: 0%;
    }

    a:hover > span {
      color: #edeae2;
      display: block;
      transform: scale(1.1);
    }

    a:hover > #facebookIcon {
      transform: scale(1);
    }
  }

  // Buttons Border
  .buttonBorder {
    border-left: 1px #6a615a solid;
    border-right: 1px #6a615a solid;
  }

  // Buttons Border Right
  .borderRight {
    border-right: 1px #6a615a solid;
  }

  // Facebook Icon
  #facebookIcon {
    transform: scale(0.8);
    transition: 0.2s;
  }

  /* ----------- DESKTOP RESPONSIVE ----------- */

  //1624px Window -----------
  @media (max-width: ${breakpoints.window1624}) {
    // Buttons Container
    #buttonsContainers {
      max-width: 1200px;
    }

    // Butons
    a {
      width: 24.89%;
    }
  }

  //1366px Window -----------
  //Estandar
  @media (max-width: ${breakpoints.window1366}) {
    // Buttons Container
    #buttonsContainers {
      max-width: 1080px;
    }

    // Butons
    a {
      width: 24.88%;
    }
  }

  //1250px Window -----------
  @media (max-width: ${breakpoints.window1250}) {
    // Buttons Container
    #buttonsContainers {
      max-width: 950px;
    }

    // Butons
    a {
      width: 24.87%;
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
      width: 24.82%;
      padding: 0% 0% 0% 0%;
    }
  }

  //830px Tablet -----------
  @media (max-width: ${breakpoints.tablet830}) {
    // Buttons Container
    #buttonsContainers {
      max-width: 600px;
    }

    // Butons
    a {
      width: 24.79%;
    }
  }

  //768px Tablet -----------
  //iPad
  @media (max-width: ${breakpoints.tablet768}) {
    // Buttons Container
    #buttonsContainers {
      max-width: 500px;
    }

    // Butons
    a {
      width: 24.75%;
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

    // Buttons Border
    .buttonBorder {
      border-left: 0px #6a615a solid;
      border-right: 0px #6a615a solid;
    }

    // Buttons Border Right
    .borderRight {
      border-right: 0px #6a615a solid;
    }

    #whatsappButton, #facebookButton {
      border-right: 1px #6a615a solid;
    }

    #facebookButton, #mailButton {
      border-top: 1px #6a615a solid;
    }
  }

  //550px Mobile -----------
  @media (max-width: ${breakpoints.mobile651}) {
    // Buttons
    a {
      width: 49.8%;
    }
  }

  //414px Mobile -----------
  //iPhone 6 7 8 Plus
  @media (max-width: ${breakpoints.mobile414}) {
    // Buttons
    a {
      width: 49.88%;
    }
  }

  //403px Mobile -----------
  @media (max-width: ${breakpoints.mobile403}) {
    // Buttons
    a {
      width: 49.8%;
    }
  }
`;

export { ContactContainer };
