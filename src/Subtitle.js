import React from "react";
import "./Subtitle.css";

const Subtitle = React.memo(props => {
  return (
    <h6 ref={props.scrollToRef} className="title text-info pt-4">
      <span className="hr">{props.text}</span>
    </h6>
  );
});

export default Subtitle;
