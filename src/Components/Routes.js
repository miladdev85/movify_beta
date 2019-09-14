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
import { useTransition, animated } from "react-spring";
import { Route, Redirect, withRouter, Switch } from "react-router-dom";

const Routes = ({ location }) => {
  const routeTransitions = useTransition(location, location => location.key, {
    from: { opacity: 0, transform: "translate3d(100%, 0, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(-50%, 0, 0)" }
  });

  return (
    <>
      <Route exact path={"/"} render={() => <Redirect to="/movies" />} />
      <Route exact path="/movies" render={() => <Redirect to="/movies/popular" />} />
      <Route exact path="/movies/:section" component={Movies} />
      <Route exact path="/tv/:section" render={props => <Tv type="tv" {...props} />} />
      <Route exact path="/tv" render={() => <Redirect to="/tv/popular" />} />

      {/* Below routes should NOT use search queries  */}

      {routeTransitions.map(({ item, props: transition, key }) => (
        <animated.div key={key} style={transition}>
          <Switch location={item}>
            <Route
              exact
              path="/movies/details/:id"
              render={props => <Movie type="movie" {...props} />}
            />
            <Route path="/tv/details/:id" render={props => <TvShow type="tv" {...props} />} />
            <Route exact path="/people" component={People} />
            <Route exact path="/people/:id" render={props => <PeopleDetail {...props} />} />
            <Route path="/search" component={Search} />
            <Route path="/keyword/:id" component={Keyword} />
            <Route path="/faq" component={FAQ} />
          </Switch>
        </animated.div>
      ))}
    </>
  );
};

export default withRouter(Routes);
