import React from "react";
import { default as NextLink } from "next/link";
import { ContactContainer } from "./styled";

function Contact() {
  return (
    <ContactContainer>
      <div id="buttonsContainers">
        <NextLink href="mailto:gandinimusic@gmail.com">
          <a className="buttonBorder">
            <img
              src="images/logos/social/WhatsAppLogo.svg"
              draggable="false"
              alt="WhatsApp Logo"
            />
          </a>
        </NextLink>
        <NextLink href="mailto:gandinimusic@gmail.com">
          <a id="borderRight">
            <img
              src="images/logos/social/InstagramLogo.svg"
              draggable="false"
              alt="WhatsApp Logo"
            />
          </a>
        </NextLink>
        <NextLink href="mailto:gandinimusic@gmail.com">
          <a>
            <img
              src="images/logos/social/FacebookLogo.svg"
              draggable="false"
              alt="WhatsApp Logo"
            />
          </a>
        </NextLink>
        <NextLink href="mailto:gandinimusic@gmail.com">
          <a className="buttonBorder">
            <img
              src="images/logos/social/MailLogo.svg"
              draggable="false"
              alt="WhatsApp Logo"
            />
          </a>
        </NextLink>
      </div>
    </ContactContainer>
  );
}

export default Contact;
