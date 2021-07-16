import React from "react";
import { IframeContainer } from "./styled";

function Iframe({ videoURL, ...props }) {
  return (
    <IframeContainer>
      <iframe
        src={videoURL}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; 
        autoplay; 
        clipboard-write; 
        encrypted-media; 
        gyroscope; 
        picture-in-picture"
        allowfullscreen
      ></iframe>
    </IframeContainer>
  );
}

export default Iframe;
