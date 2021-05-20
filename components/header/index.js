import React from "react";
import { HeaderContainer } from "./styled";

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
          <a>SHOP</a>
        </div>
        {/* Shop Botton Mobile */}
        <div id="shopLenguajeContainerMobile">
          <a>SHOP</a>
        </div>
      </div>
    </HeaderContainer>
  );
}

export default Header;
