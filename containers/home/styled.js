import styled from "styled-components";

const HomeContainer = styled.section`
  width: 100%;
  background-color: #edeae2;

  // Fonts
  @font-face {
    font-family: "PangeaTextTrial";
    src: url("/fonts/pangea/PangeaTextTrial-Light.woff") format('truetype');
    font-style: normal;
    font-weight: 100;
    font-display: swap;
  }

  @font-face {
    font-family: "MTDalatSans";
    src: url("/fonts/mtdalatsans/MTDalatSans.woff") format('truetype');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  #bioraphyPlatformsSection {
    width: 100%;
  }

  #fristElement {
    display: flex;
    position: relative;
    justify-content: flex-end;
  }

  #fristElement img {
    position: absolute;
    padding-top: 152px;
  }
`;

export { HomeContainer };
