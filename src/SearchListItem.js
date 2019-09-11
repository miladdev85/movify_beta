import React from "react";
import TvItem from "./TvItem";
import MovieItem from "./MovieItem";
import PersonItem from "./PersonItem";

function SearchListItem({ item }) {
  if (!item.id) return null;
  return (
    <div className="col-12 offset-lg-1 col-lg-5 shadow-sm my-3">
      <div className="row">
        {item.media_type === "person" && <PersonItem item={item} />}
        {item.media_type === "movie" && <MovieItem item={item} />}
        {item.media_type === "tv" && <TvItem item={item} />}
      </div>
    </div>
  );
}

export default SearchListItem;
