import React from "react";
import { default as NextLink } from "next/link";
import { ContactContainer } from "./styled";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <ContactContainer>
      <div id="buttonsContainers">
        <NextLink href="mailto:gandinimusic@gmail.com">
          <a className="buttonBorder">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </NextLink>
        <NextLink href="mailto:gandinimusic@gmail.com">
          <a id="borderRight">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </NextLink>
        <NextLink href="mailto:gandinimusic@gmail.com">
          <a>
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </NextLink>
        <NextLink href="mailto:gandinimusic@gmail.com">
          <a className="buttonBorder">
            {/*Este icono no levantaba de forma regular utilizando la libreria npm*/}
            <i class="far fa-envelope"></i>
          </a>
        </NextLink>
      </div>
    </ContactContainer>
  );
}

export default Contact;
