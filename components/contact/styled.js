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
    padding: 1.5% 0% 1.5% 0%;
    display: flex;
    position: relative;
    background-color: #6a615a;
    border: none;
    justify-content: center;
    align-content: center;
    align-items: center;
  }

  a::before {
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-color: #edeae2;
    position: absolute;
    content: "";
    transition: 0.2s ease-out;
  }

  a:hover::before {
    height: 0%;
  }

  span {
    color: #6a615a;
    position: relative;
    display: inline-block;
    font-size: 2em;
    transition: 0.2s;
    height: 100%;
  }

  a:hover > span {
    color: #edeae2;
  }

  .buttonBorder {
    border-left: 1px #6a615a solid;
    border-right: 1px #6a615a solid;
  }

  #borderRight {
    border-right: 1px #6a615a solid;
  }

  #facebookIcon {
    font-size: 1.8em !important;
    padding: 0.1em 0em 0.05em 0em;
  }
`;

export { ContactContainer };
