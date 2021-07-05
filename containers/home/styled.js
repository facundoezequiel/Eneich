import styled from "styled-components";
import { breakpoints } from "../../constants/media";

const HomeContainer = styled.section`
  width: 100%;
  background-color: #edeae2;

  #bioraphyPlatformsSection {
    width: 100%;
  }

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

  //651px Tablet -----------
  @media (max-width: ${breakpoints.mobile651}) {
    // Image
    #fristElement img {
      max-width: 800px;
      width: 530px;
      padding-top: 940px;
    }
  }
`;

export { HomeContainer };
