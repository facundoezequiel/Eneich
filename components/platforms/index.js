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
          <NextLink href="https://www.youtube.com/watch?v=-_nupRfjkWw">
            <a target="blank" id="youtubeLogo" className="leftButtonMobile">
              <img
                src="images/logos/platforms/YouTubeLogo.svg"
                draggable="false"
                alt="You Tube Logo"
              />
            </a>
          </NextLink>
          {/* Spotify Button */}
          <NextLink href="https://open.spotify.com/artist/4HcGE8imaEVi1n65PyFNwJ?si=hAIcY84uRteJygH0u9Pjog&dl_branch=1">
            <a target="blank" id="spotifyLogo" className="rightButtonMobile">
              <img
                src="images/logos/platforms/SpotifyLogo.svg"
                draggable="false"
                alt="Spotify Logo"
              />
            </a>
          </NextLink>
          {/* Tidal Button */}
          <NextLink href="https://listen.tidal.com/artist/25252737">
            <a target="blank" id="tidalLogo" className="leftButtonMobile">
              <img
                src="images/logos/platforms/TidalLogo.svg"
                draggable="false"
                alt="Tidal Logo"
              />
            </a>
          </NextLink>
          {/* Bandcamp Button */}
          <NextLink href="https://eneichmusic.bandcamp.com/album/overspeed-ep">
            <a target="blank" id="bandcampLogo" className="rightButtonMobile">
              <img
                src="images/logos/platforms/BandcampLogo.svg"
                draggable="false"
                alt="Bandcamp Logo"
              />
            </a>
          </NextLink>
          {/* Soundcloud Button */}
          <NextLink href="https://soundcloud.com/eneichmusic">
            <a
              target="blank"
              id="soundcloudLogo"
              className="centerButtonMobile"
            >
              <img
                src="images/logos/platforms/SoundcloudLogo.svg"
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
