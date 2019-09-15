import React from "react";
import TvItem from "./TvItem";
import MovieItem from "./MovieItem";
import PersonItem from "./PersonItem";

const SearchList = React.memo(({ list }) => {
  return (
    <>
      {list.map(item => {
        let child;
        if (item.media_type === "person") {
          child = <PersonItem item={item} />;
        }
        if (item.media_type === "movie") {
          child = <MovieItem item={item} />;
        }
        if (item.media_type === "tv") {
          child = <TvItem item={item} />;
        }
        return (
          <div
            key={item.id + item.media_type}
            className="col-12 offset-lg-1 col-lg-5 shadow-sm my-3"
          >
            <div className="row">{child}</div>
          </div>
        );
      })}
    </>
  );
});

export default SearchList;
