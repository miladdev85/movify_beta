import React from "react";
import { Route, Redirect } from "react-router-dom";
import TvMain from "./TvMain";
import TvShow from "./TvShow";

function Tv() {
  return (
    <div>
      <Route exact path="/tv" render={() => <Redirect to="/tv/popular" />} />
      <Route exact path="/tv/:section" component={TvMain} />
      <Route path="/tv/details/:id" component={TvShow} />
    </div>
  );
}

export default Tv;
