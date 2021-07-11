import styled from "styled-components";
import { breakpoints } from "../../constants/media";

// Home Container
const HomeContainer = styled.section`
  width: 100%;
  background-color: #edeae2;

  // Biography and Platforms Container
  #biographyPlatformsSection {
    width: 100%;
  }

  // Image Container
  #fristElement {
    display: flex;
    position: relative;
    justify-content: flex-end;
  }

  // Image
  #fristElement img {
    max-width: 485px;
    min-width: 485px;
    height: auto;
    position: absolute;
    padding-top: 152px;
  }

  /* ----------- DESKTOP RESPONSIVE ----------- */

  //16240px Window -----------
  @media (max-width: ${breakpoints.window1624}) {
    // Image
    #fristElement img {
      max-width: 430px;
      min-width: 430px;
      padding-top: 140px;
    }
  }

  //1366px Window -----------
  @media (max-width: ${breakpoints.window1366}) {
    // Image
    #fristElement img {
      max-width: 370px;
      min-width: 370px;
      padding-top: 105px;
    }
  }

  //1250px Window -----------
  @media (max-width: ${breakpoints.window1250}) {
    // Image
    #fristElement img {
      max-width: 320px;
      min-width: 320px;
      padding-top: 70px;
    }
  }

  /* ----------- TABLET RESPONSIVE ----------- */

  //1024px Tablet -----------
  @media (max-width: ${breakpoints.tablet1024}) {
    // Image
    #fristElement img {
      max-width: 510px;
      min-width: 510px;
      padding-top: 440px;
    }
  }

  //934px Tablet -----------
  @media (max-width: ${breakpoints.tablet934}) {
    // Image
    #fristElement img {
      max-width: 440px;
      min-width: 440px;
      padding-top: 480px;
    }
  }

  //830px Tablet -----------
  @media (max-width: ${breakpoints.tablet830}) {
    // Image
    #fristElement img {
      max-width: 400px;
      min-width: 400px;
      padding-top: 440px;
    }
  }

  /* ----------- MOBILE RESPONSIVE ----------- */

  //651px Mobile -----------
  @media (max-width: ${breakpoints.mobile651}) {
    // Image
    #fristElement img {
      display: none;
    }
  }
`;

export { HomeContainer };