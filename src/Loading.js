import React from "react";

function Loading() {
  const ballStyle = {
    backgroundColor: "rgb(175, 175, 175)",
    width: "5rem",
    height: "5rem"
  };
  return (
    <div style={{ minHeight: 600 }} className="d-flex justify-content-center mt-5 pt-5">
      <div style={ballStyle} className="spinner-grow" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div style={ballStyle} className="spinner-grow" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div style={ballStyle} className="spinner-grow" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div style={ballStyle} className="spinner-grow" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
