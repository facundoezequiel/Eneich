import styled from "styled-components";

const HomeContainer = styled.section`
  width: 100%;

  // Fonts
  @font-face {
    font-family: "PangeaTextTrial";
    src: url("/fonts/pangea/PangeaTextTrial-Light.woff");
    font-style: normal;
    font-weight: 100;
    font-display: swap;
  }

  // Header
  #header {
    backdrop-filter: blur(30px) brightness(1.08);
    -webkit-backdrop-filter: blur(30px) brightness(1.08);
    min-height: 69px;
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // border-bottom: 1px solid #6a615a;

    div {
      width: 33.33%;
    }

    img {
      width: 25%;
      max-width: 134.89px;
      margin-left: 15%;
    }

    .ticker {
      width: 100%;
      display: flex;

      div {
        width: 120%;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
      }

      .telepronterDiv {
        width: 69% !important;
        margin: 0% 7% 0% 7%;
      }
    }

    p {
      color: #141414;
      width: 100%;
      height: 100%;
      text-rendering: optimizeLegibility;
      font-family: 'Pangea', sans-serif;
      font-size: 0.9em;
    }

    #shopDiv {
      display: flex;
      justify-content: flex-end;

      a {
        margin-right: 15%;
      }
    }
  }

  // Introduction
  #introduction {
    width: 100%;
    height: 100vh !important;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export { HomeContainer };
