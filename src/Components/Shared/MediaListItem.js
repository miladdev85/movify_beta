import React from "react";
import Image from "./Image";
import ParsedLink from "./ParsedLink";

function MediaListItem({ items, className, imgClass, source, type }) {
  return (
    <div className="row">
      {items.map(item => (
        <div key={item.id} className={`${className}`}>
          <ParsedLink
            id={item.id}
            type={type}
            source={source}
            className="text-reset text-decoration-none brightness"
          >
            <Image
              source={item.poster_path}
              type="poster"
              alt={item.name}
              className={`${imgClass} rounded`}
            >
              <p className="item__title text-center">{item.name || item.title}</p>
            </Image>
          </ParsedLink>
        </div>
      ))}
    </div>
  );
}

export default MediaListItem;
