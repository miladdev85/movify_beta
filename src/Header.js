import React from "react";
import { NavLink } from "react-router-dom";
import SearchNav from "./SearchNav";
import "./Header.css";

function Header() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light font-weight-bold border-bottom px-2">
      <ul className="container navbar-nav justify-content-around">
        <li className="nav-item">
          <NavLink activeClassName="text-info" to="/movies" className="nav-link">
            Movies
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/tv" activeClassName="text-info" className="nav-link">
            TV Shows
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/people" activeClassName="text-info" className="nav-link ">
            Actors
          </NavLink>
        </li>
        <li className="nav-item d-lg-none">
          <NavLink to="/search" activeClassName="text-info" className="nav-link ">
            Search
          </NavLink>
        </li>
        <SearchNav className="d-none d-lg-inline-block" />
      </ul>
    </nav>
  );
}

export default Header;
