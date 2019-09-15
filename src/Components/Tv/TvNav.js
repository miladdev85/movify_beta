import React from "react";
import { NavLink } from "react-router-dom";

const TvNav = React.memo(() => {
  return (
    <div className="container mt-5">
      <ul className="nav justify-content-center">
        <li className="nav-item px-2">
          <NavLink to="/tv/popular" className="btn rounded-pill btn-sm">
            Popular
          </NavLink>
        </li>
        <li className="nav-item px-2">
          <NavLink to="/tv/top-rated" className="btn rounded-pill btn-sm">
            Top Rated
          </NavLink>
        </li>
        <li className="nav-item px-2">
          <NavLink to="/tv/on-the-air" className="btn rounded-pill btn-sm">
            On TV
          </NavLink>
        </li>
        <li className="nav-item px-2">
          <NavLink to="/tv/airing-today" className="btn rounded-pill btn-sm">
            Airing Today
          </NavLink>
        </li>
      </ul>
    </div>
  );
});

export default TvNav;
