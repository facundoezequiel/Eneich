import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  #modalBackground {
    position: absolute;
    top: 0%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    content: "";
    z-index: 98;
  }

  #windowModal {
    width: auto;
    height: auto;
    z-index: 99;
  }

  #window button {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export { ModalContainer };
