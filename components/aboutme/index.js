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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages.
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
