import React from "react";
import Image from "./Image";
import ParsedLink from "./ParsedLink";
import ReleaseDate from "./ReleaseDate";

function MediaListSliderItem({ fromRecs, className, mediaArr, startPosition, endPosition, type }) {
  const imgClass = fromRecs
    ? type === "movie"
      ? "movie_recs_poster"
      : "tv_recs_poster"
    : "poster__img";

  return mediaArr
    .filter((item, index) => index >= startPosition && index <= endPosition)
    .map(item => (
      <div key={item.id} className={`${className}`}>
        <ParsedLink className="text-decoration-none brightness" id={item.id} type={type}>
          <Image
            source={item.poster_path}
            type="poster"
            alt={item.title}
            className={`${imgClass} rounded`}
          >
            <p className="item__title">{item.title || item.name}</p>
            <ReleaseDate item={item} />
          </Image>
        </ParsedLink>
      </div>
    ));
}

export default MediaListSliderItem;
