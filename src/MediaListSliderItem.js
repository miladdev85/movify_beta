import React from "react";
import Image from "./Image";
import ParsedLink from "./ParsedLink";
import ReleaseDate from "./ReleaseDate";

function MediaListSliderItem({ fromRecs, col, mediaArr, startPosition, endPosition, type }) {
  return mediaArr
    .filter((item, index) => index >= startPosition && index <= endPosition)
    .map(item => {
      return (
        <div
          key={item.id}
          className={`${col} ${fromRecs ? "container__recs" : "container__slider"}`}
        >
          <ParsedLink className="text-decoration-none brightness" id={item.id} type={type}>
            <Image
              source={item.poster_path}
              type="poster"
              alt={item.title}
              className={`${fromRecs ? "recs_poster__img" : "poster__img"} rounded`}
            >
              <p className="item__title">{item.title || item.name}</p>
              <ReleaseDate item={item} />
            </Image>
          </ParsedLink>
        </div>
      );
    });
}

export default MediaListSliderItem;
