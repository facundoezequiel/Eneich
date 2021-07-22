import React from "react";
import { default as NextLink } from "next/link";
import { AboutMeContainer } from "./styled";

function AboutMe({ active, link }) {
  return (
    {
      /* AboutMe Container */
    },
    (
      <AboutMeContainer>
        {/* Text and Image Container */}
        <div id="textImageContainer">
          {/* Text Container */}
          <article id="textContainer">
            {/* Subtitle */}
            {active === "esp" ? <span>SOBRE MÍ</span> : <span>ABOUT ME</span>}
            {/* Title */}
            <h2>Nicolás Hirschfeld</h2>
            {/* Text */}
            <p>
              Nicolás Hirschfeld, nació en San Antonio de Areco en 1993. A los
              11 años comenzó a estudiar piano, y a los 14 se volcó al mundo del
              DJ. A los 22, comenzó sus estudios en producción musical en Sonar
              Pro School y en artes digitales en la Universidad Nacional de
              Quilmes. En 2020, debido a la pandemia y la imposibilidad de tocar
              en vivo en eventos, decide abocarse formalmente a la producción
              musical.
            </p>
            {/* Button */}
            <NextLink href={link}>
              <a>
                {active === "esp" ? (
                  <p>BIOGRAFÍA COMPLETA</p>
                ) : (
                  <p>FULL BIOGRAPHY</p>
                )}
                <img src="images/icons/flecha.svg" draggable="false" alt="" />
              </a>
            </NextLink>
          </article>
          {/* Image */}
          <img
            src="images/Arco.png"
            id="nhimage"
            draggable="false"
            alt="Foto de Nicolás Hirschfeld"
          />
        </div>
      </AboutMeContainer>
    )
  );
}

export default AboutMe;
