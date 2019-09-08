import React from "react";
import { Route, Redirect } from "react-router-dom";
import MoviesLandingPage from "./MoviesLandingPage";
import Movie from "./Movie";

function Movies() {
  return (
    <div>
      <Route exact path="/movies" render={() => <Redirect to="/movies/popular" />} />
      <Route exact path="/movies/:section" component={MoviesLandingPage} />
      <Route
        exact
        path="/movies/details/:id"
        render={props => <Movie source="movie" {...props} />}
      />
    </div>
  );
}

export default Movies;
