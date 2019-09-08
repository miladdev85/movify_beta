import React from "react";
import { Link, withRouter } from "react-router-dom";
import queryString from "query-string";

function ParsedLink({ id, className, children, match, location, source }) {
  const queryObj = queryString.parse(location.search);
  // const source = match.path.includes("/movies/") ? "movie" : "tv";

  let toLink;
  switch (source) {
    case "movie":
      toLink = {
        pathname: `/movies/details/${id}`,
        search: `?from=${match.params.section || queryObj.from || "popular"}`
      };
      break;
    case "tv":
      toLink = {
        pathname: `/tv/details/${id}`
      };
      break;
    case "people":
      toLink = {
        pathname: `/people/${id}`
      };
      break;
    default:
      toLink = {
        pathname: "/"
      };
  }

  // if (source === "movie") {
  //   toLink = {
  //     pathname: `/movies/details/${id}`,
  //     search: `?from=${match.params.section || queryObj.from || "popular"}`
  //   };
  // } else {
  //   toLink = {
  //     pathname: `/tv/details/${id}`
  //   };
  // }

  return (
    <Link to={toLink} className={className}>
      {children}
    </Link>
  );
}

export default withRouter(ParsedLink);
