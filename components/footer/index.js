import React from "react";
import { default as NextLink } from "next/link";
import { FooterContainer } from "./styled";

function Footer() {
  return (
    <FooterContainer>
      <div id="logoButtonsContainer">
        <div id="logoDiv">
          {/* LOGO BUTTON */}
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
            {/* SPANISH BUTTON */}
            <NextLink href="#">
              <a>
                <span id="esp">ESP</span>
              </a>
            </NextLink>
            {/* ENGLISH BUTTON */}
            <NextLink href="#">
              <a>
                <span>EN</span>
              </a>
            </NextLink>
          </div>
          {/* PRESS KIT BUTTON */}
          <NextLink href="#">
            <a>
              <span>PRESS KIT</span>
            </a>
          </NextLink>
          {/* COPYRIGHT */}
          <p>Eneich 2021. Todos los derechos reservados.©</p>
        </div>
      </div>
      {/* GRADIENT LINE */}
      <div id="gradientLine"> 
      </div>
    </FooterContainer>
  );
}

export default Footer;