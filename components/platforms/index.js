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
          {/* YouTube Button */}
          <NextLink href="https://open.spotify.com/artist/4HcGE8imaEVi1n65PyFNwJ?si=hAIcY84uRteJygH0u9Pjog&dl_branch=1">
            <a target="blank">
              <div className="imgContainer">
                <img
                  src="images/logos/YouTubeLogo.svg"
                  draggable="false"
                  alt="You Tube Logo"
                />
              </div>
            </a>
          </NextLink>
          {/* Spotify Button */}
          <NextLink href="https://open.spotify.com/artist/4HcGE8imaEVi1n65PyFNwJ?si=hAIcY84uRteJygH0u9Pjog&dl_branch=1">
            <a target="blank">
              <div className="imgContainer">
                <img
                  src="images/logos/SpotifyLogo.svg"
                  draggable="false"
                  alt="Spotify Logo"
                />
              </div>
            </a>
          </NextLink>
          {/* MixCloud Button */}
          <NextLink href="mailto:gandinimusic@gmail.com">
            <a target="blank">
              <div className="imgContainer">
                <img
                  src="images/logos/MixCloudLogo.svg"
                  draggable="false"
                  alt="Mix Cloud Logo"
                />
              </div>
            </a>
          </NextLink>
          {/* Beatport Button */}
          <NextLink href="mailto:gandinimusic@gmail.com">
            <a target="blank">
              <div className="imgContainer">
                <img
                  src="images/logos/BeatportLogo.svg"
                  draggable="false"
                  alt="Beatport Logo"
                />
              </div>
            </a>
          </NextLink>
          {/* Soundcloud Button */}
          <NextLink href="mailto:gandinimusic@gmail.com">
            <a target="blank">
              <div className="imgContainer">
                <img
                  src="images/logos/SoundcloudLogo.svg"
                  draggable="false"
                  alt="SoundCloud Logo"
                />
              </div>
            </a>
          </NextLink>
        </div>
      </PlatformsContainer>
    )
  );
}

export default Platforms;
