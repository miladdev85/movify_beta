import React from "react";
import { Link } from "react-router-dom";
import no_pic from "./not_ava.png";

function TvListItem({ items, col, imgHeight }) {
  const displayItems = (items, col, height) => {
    return items.map(item => {
      return (
        <div key={item.id} className={`${col}`}>
          <Link to={`/tv/details/${item.id}`} className="text-reset poster__link">
            <img
              style={{ maxHeight: `${height}` }}
              src={
                item.backdrop_path
                  ? `https://image.tmdb.org/t/p/original${item.backdrop_path}`
                  : no_pic
              }
              alt={item.name}
              className="img-fluid rounded fade__in"
            />
            <p className="">{item.name}</p>
          </Link>
        </div>
      );
    });
  };

  return <>{displayItems(items, col, imgHeight)}</>;
}

export default TvListItem;
