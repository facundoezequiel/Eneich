import React from "react";
import YouTube from 'react-youtube';

function VideoPlayer({ videoId, ...props }) {
  
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <YouTube className="animate__animated animate__fadeIn" videoId={videoId} opts={opts} />
  );
}

export default VideoPlayer;
