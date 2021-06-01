import React from "react";
import { default as NextLink } from "next/link";
import Player from "../../components/player";
import { VideoContainer } from "./styled";

function Video() {
  return (
    <VideoContainer>
      <div id="secondElement">
        <img src="images/elements/star.svg" draggable="false" alt="" />
      </div>
      <div id="textImageContainer">
        <div id="playerContainer">
          <Player link="https://www.youtube.com/watch?v=pnPfgjTxIZU" />
        </div>
        <div id="textContainer">
          <span>NEW SINGLE</span>
          <h2>Overspeed</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five.
          </p>
          <button>
            <p>ESCUCHAR AHORA</p>
            <img src="images/icons/flecha.svg" draggable="false" alt="" />
          </button>
        </div>
      </div>
    </VideoContainer>
  );
}

export default Video;
