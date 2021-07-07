import React from "react";
import MouseAnimation from "../animations/mouse";
import { IntroductionContainer } from "./styled";

function Introduction() {
  return (
    {
      /* Introduction Container */
    },
    (
      <IntroductionContainer>
        {/* Logo. title and buttons container */}
        <div id="logoTitleButtonsContainer">
          {/* Eneich Logo */}
          <img
            src="images/logos/LogoEneichFont.svg"
            draggable="false"
            alt="Eneich Logo"
            className="animate__animated animate__fadeIn animate__delay-1s"
          />
          {/* Title */}
          <h1 className="animate__animated animate__fadeIn animate__delay-1s">
            House Music<br></br>DJ and Producer
          </h1>
          {/* Buttons */}
          <div
            id="buttonsContainer"
            className="animate__animated animate__fadeIn animate__delay-1s"
          >
            {/* Escuchame button */}
            <button>
              <p>ESCUCHAME</p>
            </button>
            {/* Contacto button */}
            <button>
              <p>CONTACTO</p>
            </button>
          </div>
          {/* Mouse Lottie Animation Container */}
          <div id="lottieAnimationContainer">
            {/* Mouse Lottie Animation */}
            <MouseAnimation></MouseAnimation>
          </div>
        </div>
      </IntroductionContainer>
    )
  );
}

export default Introduction;
