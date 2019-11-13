import React from "react";
import Image from "./Image";
import ParsedLink from "./ParsedLink";
import ReleaseDate from "./ReleaseDate";

function MediaListSliderItem({ fromRecs, className, mediaArr, startPosition, endPosition, type }) {
  // Set classname based on source. Wow, should re-factor to a if or switch statement instead of this double ternary...

  const imgClass = fromRecs
    ? type === "movie"
      ? "movie_recs_poster"
      : "tv_recs_poster"
    : "poster__img";

  // Passing type to ParsedLink which will determine what links to use based on type

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
