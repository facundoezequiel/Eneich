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
          <NextLink href="#">
            <a>PRESS KIT</a>
          </NextLink>
          <p>
            Todos los derechos reservados. Eneich 2021©
          </p>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;
