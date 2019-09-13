import React from "react";

function TvSeasonImage({ season, item }) {
  return (
    <img
      src={
        item.poster_path && season.poster_path
          ? `https://image.tmdb.org/t/p/original${season.poster_path}`
          : item.poster_path
          ? `https://image.tmdb.org/t/p/original${item.poster_path}`
          : "https://static-assets.noovie.com/images/no-poster.png"
      }
      alt={item.name}
      className="img-fluid"
    />
  );
}

export default TvSeasonImage;
