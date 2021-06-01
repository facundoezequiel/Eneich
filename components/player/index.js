import React from "react";
import ReactPlayer from "react-player";

function Player({ link, ...props }) {
  return (
    <ReactPlayer
      playing="false"
      loop="false"
      controls="true"
      playing="false"
      width="100%"
      height="100%"
      url={link}
      id="reactPlayer"
    />
  );
}

export default Player;
