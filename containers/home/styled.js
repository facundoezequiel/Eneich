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

  @font-face {
    font-family: "MTDalatSansCap";
    src: url("/fonts/mtdalatsans/MTDalatSans.otf") format('truetype');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  // Introduction
  #introduction {
    width: 100%;
    height: 100vh !important;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  #introductionDivH1 {
    width: 100%;
    text-align: center;
  }

  // News
  .ticker {
    position: relative;
    overflow: hidden;
    background-color: #cdccc7;
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer */
    -khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */
    -webkit-user-select: none; /* Chrome, Safari, and Opera */
    -webkit-touch-callout: none; /* Disable Android and iOS callouts*/
  }

  .ticker__element {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  .ticker__element p {
    margin-right: 70px;
    color: #e52b08;
    font-family: "Pangea", sans-serif;
    font-size: 0.9em;
    letter-spacing: 0.5px;
  }
`;

export { HomeContainer };
