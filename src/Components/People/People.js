import React from "react";
import PopularPeople from "./PopularPeople";
import PeopleDetail from "./PeopleDetail";
import { Route } from "react-router-dom";

function People() {
  return (
    <>
      <Route exact path="/people" component={PopularPeople} />
      <Route exact path="/people/:id" render={props => <PeopleDetail {...props} />} />
    </>
  );
}

export default People;
