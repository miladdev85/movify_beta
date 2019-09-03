import React from "react";

function Loading() {
  return (
    <div className="d-flex justify-content-center ball__container mt-5 pt-5">
      <div className="spinner-grow ball" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow ball" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow ball" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow ball" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
