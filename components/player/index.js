import React from "react";
import ReactPlayer from "react-player";

function Player({ link, ...props }) {
  return (
    <ReactPlayer
      autoplay="false"
      playing="false"
      loop="false"
      controls="true"
      width="100%"
      height="100%"
      url={link}
      id="reactPlayer"
    />
  );
}

export default Player;
