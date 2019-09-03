import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import queryString from "query-string";
import "./DiscoverMenu.css";

function DiscoverMenu(props) {
  const parsedQuery = queryString.parse(props.location.search);
  const linksArr = [
    { url: `/movies/popular`, text: "Most Popular" },
    { url: `/movies/new-releases`, text: "New Releases" },
    { url: `/movies/coming-soon`, text: "Coming Soon" },
    { url: `/movies/top-rated`, text: "Highest Rated" }
  ];
  return (
    <ul className="list-unstyled list-inline mb-1 text-muted">
      {linksArr.map(link => (
        <li key={link.url}>
          <NavLink
            to={{
              pathname: link.url,
              search: queryString.stringify({ ...parsedQuery, details: undefined })
            }}
            className="discover list-inline-item p-2 p-sm-2 mb-2 btn rounded-pill btn-sm nav-link"
          >
            <span>{link.text}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default withRouter(DiscoverMenu);
