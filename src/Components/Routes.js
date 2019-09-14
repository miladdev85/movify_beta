import React from "react";
import Keyword from "./Keyword/Keyword";
import Movies from "./Movie/Movies";
import Movie from "./Movie/Movie";
import People from "./People/People";
import PeopleDetail from "./People/PeopleDetail";
import Tv from "./Tv/Tv";
import TvShow from "./Tv/TvShow";
import Search from "./Search/Search";
import FAQ from "./FAQ";
import { Route, Redirect } from "react-router-dom";

const Routes = () => (
  <>
    <Route exact path={"/"} render={() => <Redirect to="/movies" />} />
    <Route exact path="/movies" render={() => <Redirect to="/movies/popular" />} />
    <Route exact path="/movies/:section" component={Movies} />
    <Route exact path="/movies/details/:id" render={props => <Movie type="movie" {...props} />} />
    <Route exact path="/tv" render={() => <Redirect to="/tv/popular" />} />
    <Route exact path="/tv/:section" render={props => <Tv type="tv" {...props} />} />
    <Route path="/tv/details/:id" render={props => <TvShow type="tv" {...props} />} />
    <Route exact path="/people" component={People} />
    <Route exact path="/people/:id" render={props => <PeopleDetail {...props} />} />
    <Route path="/search" component={Search} />
    <Route path="/keyword/:id" component={Keyword} />
    <Route path="/faq" component={FAQ} />
  </>
);

export default Routes;
