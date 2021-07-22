import React, { useState } from "react";
import { default as NextLink } from "next/link";
import { VideoContainer } from "./styled";
import Iframe from "../../components/iframe";
import Modal from "../modal";

function Video({ active }) {
  // Modal States
  const [showModal, setShowModal] = useState(false);

  // Block scroll when the modal is open
  if (showModal == true) {
    document.body.style.overflow = "hidden";
  }

  return (
    {
      /* Section Video Container */
    },
    (
      <VideoContainer>
        {/* Modal */}
        <Modal
          onClose={() => setShowModal(false)}
          show={showModal}
          children={
            <Iframe videoURL="https://www.youtube-nocookie.com/embed/-_nupRfjkWw" />
          }
        ></Modal>
        {/* Decoration Element */}
        <div id="decorationElement">
          <img src="images/elements/star.svg" draggable="false" alt="" />
        </div>
        {/* Title, text and image container */}
        <div id="textImageContainer">
          {/* Image */}
          <div id="imageContainer">
            <img
              src="images/Overspeed.png"
              draggable="false"
              alt="Overspeed art"
            />
          </div>
          {/* Title and text Container */}
          <div id="textContainer">
            {active === "esp" ? <span>NUEVO EP</span> : <span>NEW EP</span>}
            <h2>Overspeed</h2>
            <p>
              Este EP nace de la idea y la necesidad de crear un sonido propio.
              En principio, quería realizar un remix de la canción “Keep on
              Moving”, de la artista noruega Hanne Leland, pero Gandini me
              impulsa a crear un track propio. Es así como durante el 2020 nace
              la colaboración entre ambos y surge el EP lanzado en 2021 en todas
              las plataformas. ¡Espero que les guste!
            </p>
            {/* Open Modal button */}
            <a onClick={() => setShowModal(true)} id="modalButton">
              {active === "esp" ? <p>ESCUCHAR AHORA</p> : <p>LISTEN NOW</p>}
              <img src="images/icons/flecha.svg" draggable="false" alt="" />
            </a>
            {/* Open YouTube button mobile */}
            <NextLink href="https://www.youtube.com/watch?v=-_nupRfjkWw">
              <a id="youtubeButton" target="blank">
                {active === "esp" ? <p>ESCUCHAR AHORA</p> : <p>LISTEN NOW</p>}
                <img src="images/icons/flecha.svg" draggable="false" alt="" />
              </a>
            </NextLink>
          </div>
        </div>
      </VideoContainer>
    )
  );
}

export default Video;
