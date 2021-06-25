import styled from "styled-components";

// Modal Container
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  // Modal Background
  #modalBackground {
    position: absolute;
    top: 0%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(106, 97, 90, 0.9);
    content: "";
    z-index: 98;
  }

  // Modal Window
  #windowModal {
    width: auto;
    height: auto;
    z-index: 99;
  }

  // Modal Close Botton
  #windowModal a {
    position: absolute;
    top: 0;
    right: 0;
    color: white;
    font-size: 2em;
    margin: 1em 1em 1em 1em;
    cursor: pointer;
    transition: all 0.2s ease-out;
  }

  #windowModal a:hover {
    transform: scale(1.3);
  }

  // Ifram Container
  #videoWrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
  }

  // You Tube Iframe
  .videoWrapper iframe,
  .videoWrapper embed,
  .videoWrapper object {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export { ModalContainer };
