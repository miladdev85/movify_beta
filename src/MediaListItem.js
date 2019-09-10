import React from "react";
import Image from "./Image";
import ParsedLink from "./ParsedLink";

function MediaListItem({ items, col, imgHeight, source, type }) {
  const imgStyle = { height: `${imgHeight}` };
  return (
    <div className="row">
      {items.map(item => {
        return (
          <div key={item.id} className={`${col}`}>
            <ParsedLink
              id={item.id}
              type={type}
              source={source}
              className="text-reset text-decoration-none brightness"
            >
              <Image
                style={imgStyle}
                source={item.poster_path}
                type="poster"
                alt={item.name}
                className="rounded"
              >
                <p className="item__title  text-center">{item.name || item.title}</p>
              </Image>
            </ParsedLink>
          </div>
        );
      })}
    </div>
  );
}

export default MediaListItem;
