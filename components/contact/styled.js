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

  span {
    color: #6a615a;
    position: relative;
    display: inline-block;
    font-size: 2em;
    transition: 0.2s;
    height: 100%;
  }

  // Hover Effects
  @media (hover: hover) {
    a:hover::before {
      height: 0%;
    }

    a:hover > span {
      color: #edeae2;
      display: block;
      transform: scale(1.1);
    }

    a:hover > #facebookIcon {
      transform: scale(1);
    }
  }

  .buttonBorder {
    border-left: 1px #6a615a solid;
    border-right: 1px #6a615a solid;
  }

  #borderRight {
    border-right: 1px #6a615a solid;
  }

  #facebookIcon {
    transform: scale(0.8);
    transition: 0.2s;
  }
`;

export { ContactContainer };