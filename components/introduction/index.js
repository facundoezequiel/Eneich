import React from "react";
import { IntroductionContainer } from "./styled";

function Introduction() {
  return (
    <IntroductionContainer
      style={{
        backgroundImage: `url(${"/images/Background1920.jpg"})`,
      }}
    >
      <div id="introductionDivH1">
        <h1>House Music DJ and Producer</h1>
      </div>
    </IntroductionContainer>
  );
}

export default Introduction;
