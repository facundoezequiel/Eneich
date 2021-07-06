import React from "react";
import { default as NextLink } from "next/link";
import { PlatformsContainer } from "./styled";

function Platforms() {
  return (
    {
      /* PLatforms Container */
    },
    (
      <PlatformsContainer>
        {/* Title */}
        <p>ESCUCHAME EN</p>
        {/* Buttons Container */}
        <div id="buttonsContainer">
        <hr></hr>
          {/* YouTube Button */}
          <NextLink href="https://open.spotify.com/artist/4HcGE8imaEVi1n65PyFNwJ?si=hAIcY84uRteJygH0u9Pjog&dl_branch=1">
            <a target="blank" id="youtubeLogo" className="leftButtonMobile">
              <img
                src="images/logos/YouTubeLogo.svg"
                draggable="false"
                alt="You Tube Logo"
              />
            </a>
          </NextLink>
          {/* Spotify Button */}
          <NextLink href="https://open.spotify.com/artist/4HcGE8imaEVi1n65PyFNwJ?si=hAIcY84uRteJygH0u9Pjog&dl_branch=1">
            <a target="blank" id="spotifyLogo" className="rightButtonMobile">
              <img
                src="images/logos/SpotifyLogo.svg"
                draggable="false"
                alt="Spotify Logo"
              />
            </a>
          </NextLink>
          <hr></hr>
          {/* MixCloud Button */}
          <NextLink href="mailto:gandinimusic@gmail.com">
            <a target="blank" id="mixcloudLogo" className="leftButtonMobile">
              <img
                src="images/logos/MixCloudLogo.svg"
                draggable="false"
                alt="Mix Cloud Logo"
              />
            </a>
          </NextLink>
          {/* Beatport Button */}
          <NextLink href="mailto:gandinimusic@gmail.com">
            <a target="blank" id="beatportLogo" className="rightButtonMobile">
              <img
                src="images/logos/BeatportLogo.svg"
                draggable="false"
                alt="Beatport Logo"
              />
            </a>
          </NextLink>
          <hr></hr>
          {/* Soundcloud Button */}
          <NextLink href="mailto:gandinimusic@gmail.com">
            <a
              target="blank"
              id="soundcloudLogo"
              className="centerButtonMobile"
            >
              <img
                src="images/logos/SoundcloudLogo.svg"
                draggable="false"
                alt="SoundCloud Logo"
              />
            </a>
          </NextLink>
        </div>
      </PlatformsContainer>
    )
  );
}

export default Platforms;
