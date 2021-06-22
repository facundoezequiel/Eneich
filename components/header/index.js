import React from "react";
import { default as NextLink } from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeaderContainer } from "./styled";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

function Header({design}) {
  return (
    <HeaderContainer design={design}>
      <div id="logoShopContainer">
        {/* Logo */}
        <div id="logoContainer">
          <h1>
            <NextLink href="/">
            <a>
              <img src="images/logos/LogoCiervoEneich.svg" draggable="false" alt="Eneich Logo" id="logoBlack"/>
              <img src="images/logos/LogoCiervoEneichWhite.svg" draggable="false" alt="Eneich Logo" id="logoWhite"/>
            </a>
            </NextLink>
          </h1>
        </div>
        {/* Shop Botton Desktop */}
        <div id="shopLenguajeContainer">
          <div id="lenguajeContainer">
            <a>ESP</a>
            <a>ENG</a>
          </div>
          <button>
            <FontAwesomeIcon icon={faShoppingBasket} />
            <p>SHOP</p>
          </button>
        </div>
      </div>
    </HeaderContainer>
  );
}

export default Header;
