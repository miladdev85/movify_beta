import React from "react";
import ParsedLink from "./ParsedLink";
import ReleaseDate from "./ReleaseDate";

function MediaListSliderItem({ fromRecs, col, mediaArr, startPosition, endPosition, source }) {
  return mediaArr
    .filter((item, index) => index >= startPosition && index <= endPosition)
    .map(item => {
      return (
        <div
          key={item.id}
          className={`${col} ${fromRecs ? "container__recs" : "container__slider"}`}
        >
          <ParsedLink className="text-decoration-none brightness" id={item.id} source={source}>
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
            <ReleaseDate item={item} />
          </ParsedLink>
        </div>
      );
    });
}

export default MediaListSliderItem;
