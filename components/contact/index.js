import React from "react";
import { default as NextLink } from "next/link";
import { ContactContainer } from "./styled";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  return (
    {
      /* Contact Container */
    },
    <ContactContainer>
      {/* Buttons Container */}
      <div id="buttonsContainers">
        {/* WhatsApp Button */}
        <NextLink href="https://api.whatsapp.com/send?phone=5492326422923">
          <a target="blank" id="whatsappButton">
            {/* Icon */}
            <span>
              <FontAwesomeIcon icon={faWhatsapp} />
            </span>
          </a>
        </NextLink>
        {/* Instagram Button */}
        <NextLink href="https://www.instagram.com/eneichmusic/?hl=es-la">
          <a target="blank" id="instagramButton">
            {/* Icon */}
            <span>
              <FontAwesomeIcon icon={faInstagram} />
            </span>
          </a>
        </NextLink>
        {/* Facebook Button */}
        <NextLink href="https://www.facebook.com/nico.hirschfeld">
          <a target="blank" id="facebookButton">
            {/* Icon */}
            <span id="facebookIcon">
              <FontAwesomeIcon icon={faFacebookF} />
            </span>
          </a>
        </NextLink>
        {/* Mail Button */}
        <NextLink href="mailto:gandinimusic@gmail.com">
          <a target="blank" id="mailButton">
            {/* Icon */}
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
          </a>
        </NextLink>
      </div>
    </ContactContainer>
  );
}

export default Contact;