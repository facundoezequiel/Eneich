import styled from "styled-components";
import { breakpoints } from "../../constants/media";

const NewsContainer = styled.div`
  // Ticker
  .ticker {
    position: relative;
    overflow: hidden;
    background-color: #6a615a;
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
    color: #edeae2;
    font-family: "Pangea", sans-serif;
    font-size: 0.9em;
    letter-spacing: 0.5px;
  }

  /* ----------- DESKTOP RESPONSIVE ----------- */

  //1860px Window -----------
  @media (max-width: ${breakpoints.window1860}) {
    // Text
    .ticker__element p {
      font-size: 0.86em;
    }
  }

  //1750px Window -----------
  @media (max-width: ${breakpoints.window1750}) {
    // Text
    .ticker__element p {
      font-size: 0.82em;
    }
  }

  //1710px Window -----------
  @media (max-width: ${breakpoints.window1710}) {
    // Text
    .ticker__element p {
      font-size: 0.8em;
    }
  }
  
   //1624px Window -----------
   @media (max-width: ${breakpoints.window1624}) {
    // Text
    .ticker__element p {
      font-size: 0.77em;
    }
  }

   //1440px Window -----------
   @media (max-width: ${breakpoints.window1440}) {
    // Text
    .ticker__element p {
      font-size: 0.74em;
    }
  }

  //1366px Window -----------
  //Estandar
  @media (max-width: ${breakpoints.window1366}) {
    // Text
    .ticker__element p {
      font-size: 0.72em;
    }
  }

  //1250px Window -----------
  @media (max-width: ${breakpoints.window1250}) {
    // Text
    .ticker__element p {
      font-size: 0.7em;
    }
  }

  /* ----------- TABLET RESPONSIVE ----------- */

  //1024px Tablet -----------
  //iPad Pro
  @media (max-width: ${breakpoints.tablet1024}) {
    // Text
    .ticker__element p {
      font-size: 0.68em;
    }
  }
  
  //934px Tablet -----------
  @media (max-width: ${breakpoints.tablet1024}) {
    // Text
    .ticker__element p {
      font-size: 0.65em;
    }
  }

  /* ----------- MOBILE RESPONSIVE ----------- */

  //651px Mobile -----------
  @media (max-width: ${breakpoints.mobile651}) {
    // Text
    .ticker__element p {
      margin-right: 60px;
      font-size: 0.9em;
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
      font-size: 0.9em;
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
