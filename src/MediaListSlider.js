import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import queryString from "query-string";
import "./List.css";

const MediaListSlider = ({ location, fromRecs, items, match, addPage, spreadItems, col }) => {
  const [startPosition, setStartPosition] = useState(0);
  const [endPosition, setEndPosition] = useState(3);
  const queryObj = queryString.parse(location.search);
  const source = match.path.includes("/movies/") ? "movie" : "tv";
  const resetPositionState = () => {
    setStartPosition(0);
    setEndPosition(3);
  };
  console.log(items);
  useEffect(() => {
    if (fromRecs) {
      resetPositionState();
    }
  }, [fromRecs]);

  useEffect(() => {
    resetPositionState();
  }, [match.params.section, queryObj.genre]);

  const defineLinkPath = id => {
    if (source === "movie") {
      return {
        pathname: `/movies/details/${id}`,
        search: `?from=${match.params.section || queryObj.from || "popular"}`
      };
    } else {
      return {
        pathname: `/tv/details/${id}`
      };
    }
  };

  const defineReleaseDate = item => {
    if (source === "movie") {
      return match.params.type === "coming-soon"
        ? item.release_date
        : item.release_date.substring(0, 4);
    } else {
      return item.first_air_date.substring(0, 4);
    }
  };

  const itemsToDisplay = () => {
    return items
      .filter((item, index) => index >= startPosition && index <= endPosition)
      .map(item => {
        return (
          <div
            key={item.id}
            className={`${col} ${fromRecs ? "container__recs" : "container__slider"}`}
          >
            <Link to={defineLinkPath(item.id)} className="text-decoration-none poster__link">
              <img
                src={
                  item.poster_path
                    ? `https://image.tmdb.org/t/p/original${item.poster_path}`
                    : "https://static-assets.noovie.com/images/no-poster.png"
                }
                alt={`${item.title} poster`}
                className={`img-fluid ${fromRecs ? "recs_poster__img" : "poster__img"} rounded`}
              />
              <p className="item__title">{item.title || item.name}</p>
              <p className="item__subtitle">{defineReleaseDate(item)}</p>
            </Link>
          </div>
        );
      });
  };

  useEffect(() => {
    if (spreadItems && endPosition === items.length - 1) {
      addPage();
    }
  }, [endPosition, spreadItems, addPage, items.length]);

  return (
    <>
      <div className="row">{itemsToDisplay()}</div>
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
