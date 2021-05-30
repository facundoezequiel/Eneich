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
              src="images/logos/YouTubeLogo.svg"
              draggable="false"
              alt="You Tube Logo"
            />
          </a>
        </NextLink>
        <NextLink href="mailto:gandinimusic@gmail.com">
          <a>
            <img
              src="images/logos/SpotifyLogo.svg"
              draggable="false"
              alt="Spotify Logo"
            />
          </a>
        </NextLink>
        <NextLink href="mailto:gandinimusic@gmail.com">
          <a>
            <img
              src="images/logos/MixCloudLogo.svg"
              draggable="false"
              alt="Mix Cloud Logo"
            />
          </a>
        </NextLink>
        <NextLink href="mailto:gandinimusic@gmail.com">
          <a>
            <img
              src="images/logos/BeatportLogo.svg"
              draggable="false"
              alt="Beatport Logo"
            />
          </a>
        </NextLink>
        <NextLink href="mailto:gandinimusic@gmail.com">
          <a>
            <img
              src="images/logos/SoundcloudLogo.svg"
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
