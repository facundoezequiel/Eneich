import React from "react";
import MouseAnimation from "../animations/mouse";
import { IntroductionContainer } from "./styled";

function Introduction() {
  return (
    <IntroductionContainer
      style={{
        backgroundImage: `url(${"/images/Background2560.jpg"})`,
      }}
    >
      <div id="introductionDivH1">
        <img
          src="images/logos/LogoEneichFont.svg"
          draggable="false"
          alt="Eneich Logo"
          className="animate__animated animate__fadeIn animate__delay-1s"
        />
        <h1 className="animate__animated animate__fadeIn animate__delay-1s">
          House Music<br></br>DJ and Producer
        </h1>
        <div id="buttonsContainer" className="animate__animated animate__fadeIn animate__delay-1s">
          <button><p>ESCUCHAME</p></button>
          <button><p>CONTACTO</p></button>
        </div>
        <MouseAnimation></MouseAnimation>
      </div>
    </IntroductionContainer>
  );
}

export default Introduction;
