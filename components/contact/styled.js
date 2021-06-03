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
    padding: 2% 0% 2% 0%;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    font-size: 1.8em;
    color: #6A615A;
    font-size: 1.8em;
    transition: 0.15s all;
  }

  .buttonBorder {
    border-left: 1.5px #6a615a solid;
    border-right: 1.5px #6a615a solid;
  }

  #borderRight {
    border-right: 1.5px #6a615a solid;
  }

  a:hover {
    background-color: #6A615A;
    color: #edeae2;
  }
`;

export { ContactContainer };
