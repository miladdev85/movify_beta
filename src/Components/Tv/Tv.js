import React from "react";
import { Route, Redirect } from "react-router-dom";
import TvMain from "./TvMain";
import TvShow from "./TvShow";

function Tv() {
  return (
    <div>
      <Route exact path="/tv" render={() => <Redirect to="/tv/popular" />} />
      <Route exact path="/tv/:section" render={props => <TvMain type="tv" {...props} />} />
      <Route path="/tv/details/:id" render={props => <TvShow type="tv" {...props} />} />
    </div>
  );
}

export default Tv;
