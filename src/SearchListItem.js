import React from "react";
import TvItem from "./TvItem";
import MovieItem from "./MovieItem";
import PersonItem from "./PersonItem";

function SearchListItem({ item }) {
  const mediaType = object => {
    if (object.media_type === "person") {
      return <PersonItem item={object} />;
    } else if (object.media_type === "movie") {
      return <MovieItem item={object} />;
    } else {
      return <TvItem item={object} />;
    }
  };

  if (!item.id) return null;
  return (
    <div className="col-12 offset-lg-1 col-lg-5 shadow-sm my-3">
      <div className="row">{mediaType(item)}</div>
    </div>
  );
}

export default SearchListItem;
