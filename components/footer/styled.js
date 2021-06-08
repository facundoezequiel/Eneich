import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  padding: 1.5% 0% 1.5% 0%;
  background-color: #6A615A;
  border-top: 1.5px #edeae2 solid;

  #logoButtonsContainer {
    width: 70%;
    margin: 0 auto;
    max-width: 1344px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
  }

  #logoDiv {
    width: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
  }

  #logoDiv a img {
    width: 80%;
  }
  
  #buttonsDiv {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
    width: 80%;
  }

  #buttonsDiv a, #buttonsDiv p {
    color: #edeae2;
    margin: 0% 0% 0% 5%;
  }
`;

export { FooterContainer };
