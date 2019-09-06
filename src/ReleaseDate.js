import React from "react";
import { withRouter } from "react-router-dom";

function ReleaseDate({ item, match }) {
  const source = match.path.includes("/movies/") ? "movie" : "tv";
  let text;
  if (source === "movie") {
    match.params.section === "coming-soon"
      ? (text = item.release_date)
      : (text = item.release_date.substring(0, 4));
  } else {
    text = item.first_air_date.substring(0, 4);
  }

  return <p className="item__subtitle">{text}</p>;
}

export default withRouter(ReleaseDate);
