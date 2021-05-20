import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeaderContainer } from "./styled";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <HeaderContainer>
      <div id="logoShopContainer">
        {/* Logo */}
        <div id="logoContainer">
          <h1>
            <a href="#">
              <img src="images/logos/LogoCiervoEneich.svg" alt="Eneich Logo" />
            </a>
          </h1>
        </div>
        {/* Shop Botton Desktop */}
        <div id="shopLenguajeContainer">
          <div id="lengaujeContainer">
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
