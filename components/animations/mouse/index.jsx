import React, { Component } from "react";
import Lottie from "react-lottie";
import { MouseAnimationContainer } from "./styled";
import * as animationData from "./mouseanimation.json";

class MouseAnimation extends Component {
  render() {
    const animationOptions = {
      loop: true,
      autoplay: true,
      renderer: "svg",
      animationData: animationData.default,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    return (
      <MouseAnimationContainer className="animate__animated animate__fadeIn animate__delay-1s">
        <Lottie options={animationOptions} height={70} width={45} />
      </MouseAnimationContainer>
    );
  }
}

export default MouseAnimation;