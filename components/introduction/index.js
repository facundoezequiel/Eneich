import React from "react";
import MouseAnimation from "../animations/mouse";
import { IntroductionContainer } from "./styled";

function Introduction() {
  return (
    <IntroductionContainer
      style={{
        backgroundImage: `url(${"/images/Background1920.jpg"})`,
      }}
    >
      <div id="introductionDivH1">
        <img
          src="images/logos/LogoEneichFont.svg"
          draggable="false"
          alt="Eneich Logo"
        />
        <h1>
          House Music<br></br>DJ and Producer
        </h1>
        <div id="buttonsContainer">
          <button><p>ESCUCHAME</p></button>
          <button><p>CONTACTO</p></button>
        </div>
        <MouseAnimation></MouseAnimation>
      </div>
    </IntroductionContainer>
  );
}

export default Introduction;
