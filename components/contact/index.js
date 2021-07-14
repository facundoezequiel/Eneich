import React from "react";
import { default as NextLink } from "next/link";
import { ContactContainer } from "./styled";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  return (
    <ContactContainer>
      <div id="buttonsContainers">
        <NextLink href="https://api.whatsapp.com/send?phone=5492326422923">
          <a className="buttonBorder" target="blank" id="whatsappButton">
            <span>
              <FontAwesomeIcon icon={faWhatsapp} />
            </span>
          </a>
        </NextLink>
        <NextLink href="https://www.instagram.com/eneichmusic/?hl=es-la">
          <a className="borderRight" target="blank" id="instagramButton">
            <span>
              <FontAwesomeIcon icon={faInstagram} />
            </span>
          </a>
        </NextLink>
        <NextLink href="https://www.facebook.com/nico.hirschfeld">
          <a target="blank" id="facebookButton">
            <span id="facebookIcon">
              <FontAwesomeIcon icon={faFacebookF} />
            </span>
          </a>
        </NextLink>
        <NextLink href="mailto:gandinimusic@gmail.com">
          <a className="buttonBorder" target="blank" id="mailButton">
            <span>
              {/*Este icono no levantaba de forma regular utilizando la libreria npm*/}
              <i class="far fa-envelope"></i>
            </span>
          </a>
        </NextLink>
      </div>
    </ContactContainer>
  );
}

export default Contact;
