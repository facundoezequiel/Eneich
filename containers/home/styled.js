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
    max-width: 492px;
    position: absolute;
    padding-top: 152px;
  }

  /* ----------- DESKTOP RESPONSIVE ----------- */

  //1860px Window -----------
  @media (max-width: ${breakpoints.window1860}) {
    // Image
    #fristElement img {
      max-width: 465px;
    }
  }

  //1750px Window -----------
  @media (max-width: ${breakpoints.window1750}) {
    // Image
    #fristElement img {
      max-width: 450px;
    }
  }

  //1710px Window -----------
  @media (max-width: ${breakpoints.window1710}) {
    // Image
    #fristElement img {
      max-width: 440px;
    }
  }

  //16240px Window -----------
  @media (max-width: ${breakpoints.window1624}) {
    // Image
    #fristElement img {
      max-width: 430px;
    }
  }

  //1440px Window -----------
  @media (max-width: ${breakpoints.window1440}) {
    // Image
    #fristElement img {
      max-width: 410px;
    }
  }

  //1366px Window -----------
  @media (max-width: ${breakpoints.window1366}) {
    // Image
    #fristElement img {
      max-width: 390px;
    }
  }

  //1250px Window -----------
  @media (max-width: ${breakpoints.window1250}) {
    // Image
    #fristElement img {
      max-width: 360px;
    }
  }

  //1120px Window -----------
  @media (max-width: ${breakpoints.window1120}) {
    // Image
    #fristElement img {
      max-width: 320px;
    }
  }

  /* ----------- TABLET RESPONSIVE ----------- */

  //1024px Tablet -----------
  @media (max-width: ${breakpoints.tablet1024}) {
    // Image
    #fristElement img {
      max-width: 280px;
    }
  }

  //934px Tablet -----------
  @media (max-width: ${breakpoints.tablet934}) {
    // Image
    #fristElement img {
      max-width: 480px;
      padding-top: 600px;
    }
  }

  /* ----------- MOBILE RESPONSIVE ----------- */

  //651px Mobile -----------
  @media (max-width: ${breakpoints.mobile651}) {
    // Image
    #fristElement img {
      max-width: 530px;
      width: 530px;
      padding-top: 800px;
    }
  }

  //550px Mobile -----------
  @media (max-width: ${breakpoints.mobile550}) {
    // Image
    #fristElement img {
      max-width: 450px;
      width: 450px;
      padding-top: 870px;
    }
  }

  //414px Mobile -----------
  // iPhone 6 7 8 Plus
  @media (max-width: ${breakpoints.mobile414}) {
    // Image
    #fristElement img {
      max-width: 360px;
      width: 360px;
      padding-top: 760px;
    }
  }

  //375px Mobile -----------
  // iPhone x
  @media (max-width: ${breakpoints.mobile375}) {
    // Image
    #fristElement img {
      max-width: 330px;
      width: 330px;
    }
  }

  //360px Mobile -----------
  // Moto G4
  @media (max-width: ${breakpoints.mobile360}) {
    // Image
    #fristElement img {
      max-width: 320px;
      width: 320px;
      padding-top: 780px;
    }
  }

  //320px Mobile -----------
  // IPhone 5 SE
  @media (max-width: ${breakpoints.mobile320}) {
    // Image
    #fristElement img {
      max-width: 270px;
      width: 270px;
    }
  }

  //280px Mobile -----------
  // Galaxy Fold
  @media (max-width: ${breakpoints.mobile280}) {
    // Image
    #fristElement img {
      max-width: 240px;
      width: 240px;
      padding-top: 690px;
    }
  }
`;

export { HomeContainer };
