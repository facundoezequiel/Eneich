import React from "react";
import { default as NextLink } from "next/link";
import { PlatformsContainer } from "./styled";

function Platforms() {
  return (
    <PlatformsContainer>
      <p>ESCUCHAME EN</p>
      <div>
        <NextLink href="mailto:gandinimusic@gmail.com">
          <a>
            <img
              src="images/logos/YouTubeLogo.png"
              draggable="false"
              alt="You Tube Logo"
            />
          </a>
        </NextLink>
        <NextLink href="mailto:gandinimusic@gmail.com">
          <a>
            <img
              src="images/logos/SpotifyLogo.png"
              draggable="false"
              alt="Spotify Logo"
            />
          </a>
        </NextLink>
        <NextLink href="mailto:gandinimusic@gmail.com">
          <a>
            <img
              src="images/logos/MixCloudLogo.png"
              draggable="false"
              alt="Mix Cloud Logo"
            />
          </a>
        </NextLink>
        <NextLink href="mailto:gandinimusic@gmail.com">
          <a>
            <img
              src="images/logos/BeatportLogo.png"
              draggable="false"
              alt="Beatport Logo"
            />
          </a>
        </NextLink>
        <NextLink href="mailto:gandinimusic@gmail.com">
          <a>
            <img
              src="images/logos/SoundcloudLogo.png"
              draggable="false"
              alt="SoundCloud Logo"
            />
          </a>
        </NextLink>
      </div>
    </PlatformsContainer>
  );
}

export default Platforms;
