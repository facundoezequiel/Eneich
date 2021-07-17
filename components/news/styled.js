import styled from "styled-components";
import { breakpoints } from "../../constants/media";

const NewsContainer = styled.div`
  // Ticker
  .ticker {
    position: relative;
    overflow: hidden;
    background-color: var(--nhdarkgray);
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer */
    -khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */
    -webkit-user-select: none; /* Chrome, Safari, and Opera */
    -webkit-touch-callout: none; /* Disable Android and iOS callouts*/
  }

  // Ticker Element
  .ticker__element {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  // Text
  .ticker__element p {
    margin-right: 70px;
    color: var(--nhwhite);
    font-family: "Pangea", sans-serif;
    font-size: 0.9em;
    letter-spacing: 0.5px;
  }

  /* ----------- MOBILE RESPONSIVE ----------- */

  //651px Mobile -----------
  @media (max-width: ${breakpoints.mobile651}) {
    // Text
    .ticker__element p {
      margin-right: 60px;
    }
  }

  //550px Mobile -----------
  @media (max-width: ${breakpoints.mobile550}) {
    // Text
    .ticker__element p {
      margin-right: 55px;
    }
  }

  //414px Mobile -----------
  //iPhone 6 7 8 Plus
  @media (max-width: ${breakpoints.mobile414}) {
    // Text
    .ticker__element p {
      margin-right: 50px;
    }
  }

  //375px Mobile -----------
  //iPhone X
  @media (max-width: ${breakpoints.mobile375}) {
    // Text
    .ticker__element p {
      margin-right: 45px;
      font-size: 0.8em;
    }
  }

  //360px Mobile -----------
  //Moto G4
  @media (max-width: ${breakpoints.mobile360}) {
    // Text
    .ticker__element p {
      margin-right: 40px;
      font-size: 0.75em;
    }
  }

  //320px Mobile -----------
  //iPhone 5 SE
  @media (max-width: ${breakpoints.mobile320}) {
    // Text
    .ticker__element p {
      margin-right: 35px;
      font-size: 0.7em;
    }
  }

  //280px Mobile -----------
  //Galaxy Fold
  @media (max-width: ${breakpoints.mobile280}) {
    // Text
    .ticker__element p {
      margin-right: 30px;
      font-size: 0.6em;
    }
  }
`;

export { NewsContainer };
