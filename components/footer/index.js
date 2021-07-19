import React from "react";
import { default as NextLink } from "next/link";
import { FooterContainer } from "./styled";

function Footer({ active, linkeng, linkesp, logolink }) {
  return (
    <FooterContainer active={active}>
      {/* Logo and Buttons Container */}
      <div id="logoButtonsContainer">
        {/* Logo Button */}
        <NextLink href={logolink}>
          <a id="logoButton">
            {/* Logo Image */}
            <img
              src="images/logos/LogoEneich.svg"
              draggable="false"
              alt="Foto de Nicolas Hirschfeld"
            />
          </a>
        </NextLink>
        {/* Buttons and Copyright Container */}
        <div id="buttonsCopyrightContainer">
          {/* Buttons Container */}
          <div id="buttonsContainer">
            {/* Spanish Button */}
            <NextLink href={linkesp}>
              <a>
                <span id="esp">ESP</span>
              </a>
            </NextLink>
            {/* English Button */}
            <NextLink href={linkeng}>
              <a>
                <span id="eng">ENG</span>
              </a>
            </NextLink>
            {/* Press Kit Button */}
            <NextLink href="#">
              <a>
                <span>PRESS KIT</span>
              </a>
            </NextLink>
          </div>
          {/* Copyright */}
          {active === "esp" ? (
            <p>Eneich 2021. Todos los derechos reservados.©</p>
          ) : (
            <p>Eneich 2021. All rights reserved.©</p>
          )}
        </div>
      </div>
      {/* Gradient Line*/}
      <div id="gradientLine"></div>
    </FooterContainer>
  );
}

export default Footer;
