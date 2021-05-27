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
      <MouseAnimationContainer>
        <Lottie options={animationOptions} height={70} width={45} />
      </MouseAnimationContainer>
    );
  }
}

export default MouseAnimation;