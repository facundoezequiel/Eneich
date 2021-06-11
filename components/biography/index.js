import React from "react";
import { default as NextLink } from "next/link";
import { BiographyContainer } from "./styled";

function Biography() {
  return (
    <BiographyContainer>
      <div id="textImageContainer">
        <div id="textContainer">
          <span>SOBRE MI</span>
          <h2>Nicolás Hirschfeld</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout.
          </p>
          <NextLink href="/biografia">
            <a>
              <p>BIOGRAFÍA COMPLETA</p>
              <img src="images/icons/flecha.svg" draggable="false" alt="" />
            </a>
          </NextLink>
        </div>
        <div id="imageContainer">
          <img
            src="images/Arco.png"
            draggable="false"
            alt="Foto de Nicolas Hirschfeld"
          />
        </div>
      </div>
    </BiographyContainer>
  );
}

export default Biography;
