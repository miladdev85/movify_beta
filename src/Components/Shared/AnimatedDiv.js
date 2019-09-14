import React from "react";
import { useSpring, animated } from "react-spring";

const AnimatedDiv = ({ children }) => {
  const transition = useSpring({
    from: { opacity: 0, transform: "translate3d(100%, 0, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" }
  });

  return <animated.div style={transition}>{children}</animated.div>;
};

export default AnimatedDiv;
