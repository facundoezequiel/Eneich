import React from "react";
import { default as NextLink } from "next/link";
import { FooterContainer } from "./styled";

function Footer() {
  return (
    <FooterContainer>
      <div id="logoButtonsContainer">
        <div id="logoDiv">
          <NextLink href="#">
            <a>
              <img
                src="images/logos/LogoEneich.svg"
                draggable="false"
                alt="Foto de Nicolas Hirschfeld"
              />
            </a>
          </NextLink>
        </div>
        <div id="buttonsDiv">
          <div id="lenguajeButtonsDiv">
            <NextLink href="#">
              <a>
                <span id="esp">ESP</span>
              </a>
            </NextLink>
            <NextLink href="#">
              <a>
                <span>EN</span>
              </a>
            </NextLink>
          </div>
          <NextLink href="#">
            <a>
              <span>PRESS KIT</span>
            </a>
          </NextLink>
          <p>Eneich 2021. Todos los derechos reservados.©</p>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;
