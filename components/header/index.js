import React from "react";
import { default as NextLink } from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeaderContainer } from "./styled";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

function Header({design}) {
  return (
    {/* Header Container */},
    <HeaderContainer design={design}>
      {/* Logo Shop Container */}
      <div id="logoLenguajeContainer">
        {/* Logo */}
          <h1>
            <NextLink href="/">
            <a>
              <img src="images/logos/LogoCiervoEneich.svg" draggable="false" alt="Eneich Logo" id="logoBlack" className="animate__animated animate__fadeIn"/>
              <img src="images/logos/LogoCiervoEneichWhite.svg" draggable="false" alt="Eneich Logo" id="logoWhite" className="animate__animated animate__fadeIn"/>
            </a>
            </NextLink>
          </h1>
        {/* Shop and Lenguaje Botton Desktop */}
          <div id="lenguajeContainer" className="animate__animated animate__fadeIn">
            <a>ESP</a>
            <a>ENG</a>
          </div>
          {/*
          <button>
            <FontAwesomeIcon icon={faShoppingBasket} />
            <p>SHOP</p>
          </button>
          */}
        </div>
    </HeaderContainer>
  );
}

export default Header;
