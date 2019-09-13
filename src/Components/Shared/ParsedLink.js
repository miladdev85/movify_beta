import React from "react";
import { Link, withRouter } from "react-router-dom";
import queryString from "query-string";

function ParsedLink({ id, className, children, match, location, type, source }) {
  const queryObj = queryString.parse(location.search);
  let toLink;
  switch (type) {
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
      toLink = { pathname: `/${source}/details/${id}` };
      break;
    case "cast":
      toLink = { pathname: `/people/${id}`, search: `?from=${source}` };
      break;
    default:
      toLink = {
        pathname: "/"
      };
  }

  return (
    <Link to={toLink} className={className}>
      {children}
    </Link>
  );
}

export default withRouter(ParsedLink);
