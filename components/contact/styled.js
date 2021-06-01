import styled from "styled-components";

const ContactContainer = styled.div`
  width: 100%;
  background-color: #edeae2;

  #buttonsContainers {
    width: 70%;
    max-width: 1344px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    margin: 0 auto;
  }

  a {
    width: 25%;
    padding: 3% 0% 3% 0%;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
  }

  .buttonBorder {
    border-left: 1.5px #6a615a solid;
    border-right: 1.5px #6a615a solid;
  }

  #borderRight {
    border-right: 1.5px #6a615a solid;
  }
`;

export { ContactContainer };
