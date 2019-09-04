import React from "react";
import { Route, Redirect } from "react-router-dom";
import MoviesLandingPage from "./MoviesLandingPage";
import Movie from "./Movie";

function Tv() {
  return (
    <div>
      <Route exact path="/movies" render={() => <Redirect to="/movies/popular" />} />
      <Route exact path="/movies/:section" component={MoviesLandingPage} />
      <Route path="/movies/details/:id" component={Movie} />
    </div>
  );
}

export default Tv;
