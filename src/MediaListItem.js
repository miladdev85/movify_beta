import React from "react";
import { Link } from "react-router-dom";

function MediaListItem({ items, col, imgHeight, from }) {
  const displayItems = (items, col, height) => {
    return items.map(item => {
      return (
        <div key={item.id} className={`${col}`}>
          <Link
            to={`${from === "tv" ? `/tv/details/${item.id}` : `/movie/details/${item.id}`}`}
            className="text-reset poster__link"
          >
            <img
              style={{ minHeight: `${height}` }}
              src={
                item.poster_path
                  ? `https://image.tmdb.org/t/p/original${item.poster_path}`
                  : "https://static-assets.noovie.com/images/no-poster.png"
              }
              alt={item.name}
              className="img-fluid rounded fade__in"
            />
            <p className="item__title">{item.name || item.title}</p>
          </Link>
        </div>
      );
    });
  };

  return <div className="row">{displayItems(items, col, imgHeight)}</div>;
}

export default MediaListItem;
