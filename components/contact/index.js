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
        <NextLink href="mailto:gandinimusic@gmail.com">
          <a className="buttonBorder">
            <span>
              <FontAwesomeIcon icon={faWhatsapp} />
            </span>
          </a>
        </NextLink>
        <NextLink href="mailto:gandinimusic@gmail.com">
          <a id="borderRight">
            <span>
              <FontAwesomeIcon icon={faInstagram} />
            </span>
          </a>
        </NextLink>
        <NextLink href="mailto:gandinimusic@gmail.com">
          <a>
            <span id="facebookIcon">
              <FontAwesomeIcon icon={faFacebookF} />
            </span>
          </a>
        </NextLink>
        <NextLink href="mailto:gandinimusic@gmail.com">
          <a className="buttonBorder">
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
