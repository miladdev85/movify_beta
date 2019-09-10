import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import MediaListSliderItem from "./MediaListSliderItem";
import "./List.css";

const MediaListSlider = ({ location, fromRecs, items, match, addPage, spreadItems, col, type }) => {
  const [startPosition, setStartPosition] = useState(0);
  const [endPosition, setEndPosition] = useState(3);
  const queryObj = queryString.parse(location.search);

  const resetPositionState = () => {
    setStartPosition(0);
    setEndPosition(3);
  };

  useEffect(() => {
    resetPositionState();
  }, [match.params.section, queryObj.genre]);

  useEffect(() => {
    if (spreadItems && endPosition === items.length - 1) {
      addPage();
    }
  }, [endPosition, spreadItems, addPage, items.length]);

  return (
    <>
      <div className="row text-center">
        <MediaListSliderItem
          mediaArr={items}
          type={type}
          startPosition={startPosition}
          endPosition={endPosition}
          col={col}
          fromRecs={fromRecs}
        />
      </div>
      <div className="d-flex justify-content-end">
        {startPosition >= 3 && (
          <i
            className="mr-auto fas fa-chevron-left arrow rounded mr-2"
            onClick={() => {
              setStartPosition(startPosition - 4);
              setEndPosition(endPosition - 4);
            }}
          />
        )}
        {endPosition < items.length - 1 && (
          <i
            className="fas fa-chevron-right rounded arrow"
            onClick={() => {
              setEndPosition(endPosition + 4);
              setStartPosition(startPosition + 4);
            }}
          />
        )}
      </div>
    </>
  );
};

export default withRouter(MediaListSlider);
