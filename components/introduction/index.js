import React from "react";
import { Link } from "react-scroll";
import * as Scroll from "react-scroll";
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
            <Link to="platforms" smooth={true} spy={true} offset={-150} duration={500}>
              <p>ESCUCHAME</p>
            </Link>
            {/* Contacto button */}
            <Link to="contact" smooth={true} spy={true} duration={700}>
              <p>CONTACTO</p>
            </Link>
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
