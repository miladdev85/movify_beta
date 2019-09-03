import React, { useState, useEffect } from "react";
import SadFace from "./SadFace";
import { NavLink } from "react-router-dom";
import queryString from "query-string";
import "./List.css";

const ListItem = React.memo(({ location, fromSimilar, items, match, addPage, spreadItems }) => {
  const [startPosition, setStartPosition] = useState(0);
  const [endPosition, setEndPosition] = useState(3);
  const queryObj = queryString.parse(location.search);

  const resetPositionState = () => {
    setStartPosition(0);
    setEndPosition(3);
  };

  useEffect(() => {
    if (fromSimilar) {
      resetPositionState();
    }
  }, [queryObj.details, fromSimilar]);

  useEffect(() => {
    resetPositionState();
  }, [match.params.type, queryObj.genre]);

  const itemsToDisplay = () => {
    const searchQuery = queryString.parse(location.search);
    return items
      .filter((item, index) => index >= startPosition && index <= endPosition)
      .map(item => {
        return (
          <div key={item.id} className="col-6 col-lg-3 list__container">
            <NavLink
              to={{
                pathname: match.url,
                search: queryString.stringify({ ...searchQuery, details: item.id })
              }}
              activeClassName=""
              className="text-decoration-none poster__link"
            >
              <img
                src={
                  item.poster_path
                    ? `https://image.tmdb.org/t/p/original${item.poster_path}`
                    : "https://static-assets.noovie.com/images/no-poster.png"
                }
                alt={`${item.title} poster`}
                className={`img-fluid poster__img rounded ${searchQuery.details ===
                  item.id.toString() && "selected"}`}
              />
              <p className="item__title">{item.title}</p>
              <p className="item__subtitle">
                {match.params.type === "coming-soon"
                  ? item.release_date
                  : item.release_date.substring(0, 4)}
              </p>
            </NavLink>
          </div>
        );
      });
  };

  /*eslint-disable */
  useEffect(() => {
    if (spreadItems && endPosition === items.length - 1) {
      addPage();
    }
  }, [endPosition]);
  /*eslint-enable */

  return (
    <>
      {items.length === 0 ? (
        <SadFace />
      ) : (
        <>
          <div className="row">{itemsToDisplay()}</div>
          <div className="d-flex">
            {startPosition >= 3 && (
              <i
                className="fas fa-chevron-left arrow rounded mr-auto"
                onClick={() => {
                  setStartPosition(startPosition - 4);
                  setEndPosition(endPosition - 4);
                }}
              />
            )}
            {endPosition < items.length - 1 && (
              <i
                className="fas fa-chevron-right rounded arrow ml-auto"
                onClick={() => {
                  setEndPosition(endPosition + 4);
                  setStartPosition(startPosition + 4);
                }}
              />
            )}
          </div>
        </>
      )}
    </>
  );
});

export default ListItem;
