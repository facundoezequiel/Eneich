import React, { useState } from "react";
import { VideoContainer } from "./styled";
import Player from "../../components/player";
import Modal from "../modal";

function Video() {
  const [showModal, setShowModal] = useState(false);

  // Block scroll when the modal is open
  if (showModal == true) {
    document.body.style.overflow = "hidden";
  }

  return (
    <VideoContainer>
      <Modal
        onClose={() => setShowModal(false)}
        show={showModal}
        children={<Player link="https://youtu.be/dQw4w9WgXcQ" />}
      ></Modal>
      <div id="secondElement">
        <img src="images/elements/star.svg" draggable="false" alt="" />
      </div>
      <div id="textImageContainer">
        <div id="playerContainer">
          <Player link="https://youtu.be/dQw4w9WgXcQ" />
        </div>
        <div id="textContainer">
          <span>NEW SINGLE</span>
          <h2>Overspeed</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five. It has survived not only five.
          </p>
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
