import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import queryString from "query-string";
import "./DiscoverMenu.css";

// parsedQuery will be added as search query on Discover links to maintain chosen genres
// using queryString's stringify method to get a URL query string from the object

const DiscoverMenu = props => {
  const parsedQuery = queryString.parse(props.location.search);

  const linksArr = [
    { url: `/movies/popular`, text: "Most Popular" },
    { url: `/movies/new-releases`, text: "New Releases" },
    { url: `/movies/swedish`, text: "Swedish" },
    { url: `/movies/coming-soon`, text: "Coming Soon" },
    { url: `/movies/top-rated`, text: "Highest Rated" },
    { url: `/movies/old-movies`, text: "Oldies" }
  ];
  return (
    <ul className="list-unstyled list-inline mb-1 text-muted d-flex flex-wrap d-md-inline-block">
      {linksArr.map(link => (
        <li key={link.url}>
          <NavLink
            to={{
              pathname: link.url,
              search: queryString.stringify({ ...parsedQuery })
            }}
            className="discover list-inline-item p-2 p-sm-2 mb-2 btn rounded-pill btn-sm nav-link"
          >
            <span>{link.text}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(DiscoverMenu);
