import React from "react";

const Subtitle = React.memo(props => {
  const titleStyle = {
    width: "100%",
    borderBottom: "1px solid rgb(214, 214, 214)",
    lineHeight: "0.1em",
    margin: "10px 0 30px"
  };

  const spanStyle = {
    background: "rgb(255, 255, 255)",
    paddingRight: "14px"
  };

  return (
    <h6 ref={props.scrollToRef} className="text-info pt-4" style={titleStyle}>
      <span style={spanStyle}>{props.text}</span>
    </h6>
  );
});

export default Subtitle;
