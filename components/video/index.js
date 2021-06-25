import React, { useState } from "react";
import { VideoContainer } from "./styled";
import VideoPlayer from "../../components/player";
import Modal from "../modal";

function Video() {
  const [showModal, setShowModal] = useState(false);

  // Block scroll when the modal is open
  /* if (showModal == true) {
    document.body.style.overflow = "hidden";
  } */

  return (
    {/* Section Video Container */},
    <VideoContainer>
      {/* Modal */}
      <Modal
        onClose={() => setShowModal(false)}
        show={showModal}
        children={<VideoPlayer videoId="dQw4w9WgXcQ" />}
      ></Modal>
      {/* Decoration Element */}
      <div id="secondElement">
        <img src="images/elements/star.svg" draggable="false" alt="" />
      </div>
      {/* Title, text and image container */}
      <div id="textImageContainer">
        {/* Image Container */}
        <div id="playerContainer">
          hola
        </div>
        {/* Title and text Container */}
        <div id="textContainer">
          <span>NEW SINGLE</span>
          <h2>Overspeed</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printe r took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five. It has survived not only five.
          </p>
          {/* Open Modal button */}
          <button onClick={() => setShowModal(true)}>
            <p>ESCUCHAR AHORA</p>
            <img src="images/icons/flecha.svg" draggable="false" alt="" />
          </button>
        </div>
      </div>
    </VideoContainer>
  );
}

export default Video;
