import styled from "styled-components";

const NewsContainer = styled.div`
  .ticker {
    position: relative;
    overflow: hidden;
    background-color: #6A615A;
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
    color: #EDEAE2;
    font-family: "Pangea", sans-serif;
    font-size: 0.9em;
    letter-spacing: 0.5px;
  }
`;

export { NewsContainer };