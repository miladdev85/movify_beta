import React from "react";
import ParsedLink from "./ParsedLink";

function MediaListItem({ items, col, imgHeight }) {
  return (
    <div className="row">
      {items.map(item => {
        return (
          <div key={item.id} className={`${col}`}>
            <ParsedLink id={item.id} className="text-reset poster__link">
              <img
                style={{ height: `${imgHeight}` }}
                src={
                  item.poster_path
                    ? `https://image.tmdb.org/t/p/original${item.poster_path}`
                    : "https://static-assets.noovie.com/images/no-poster.png"
                }
                alt={item.name}
                className="img-fluid rounded fade__in"
              />
              <p className="item__title">{item.name || item.title}</p>
            </ParsedLink>
          </div>
        );
      })}
    </div>
  );
}

export default MediaListItem;
