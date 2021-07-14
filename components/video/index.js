import React, { useState } from "react";
import { VideoContainer } from "./styled";
import VideoPlayer from "../../components/player";
import Modal from "../modal";

function Video() {
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
          children={<VideoPlayer videoId="-_nupRfjkWw" />}
        ></Modal>
        {/* Decoration Element
        <div id="decorationElement">
          <img src="images/elements/star.svg" draggable="false" alt="" />
        </div> */}
        {/* Title, text and image container */}
        <div id="textImageContainer">
          {/* Image */}
          <div id="imageContainer">
            <img src="images/Overspeed.png" draggable="false" alt="Overspeed art" />
          </div>
          {/* Title and text Container */}
          <div id="textContainer">
            <span>NEW EP</span>
            <h2>Overspeed</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printe r took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five. It has survived not only five.
            </p>
            {/* Open Modal button */}
            <a onClick={() => setShowModal(true)}>
              <p>ESCUCHAR AHORA</p>
              <img src="images/icons/flecha.svg" draggable="false" alt="" />
            </a> 
          </div>
        </div>
      </VideoContainer>
    )
  );
}

export default Video;
