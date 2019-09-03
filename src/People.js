import React, { Component } from "react";
import PopularPeople from "./PopularPeople";
import PeopleDetail from "./PeopleDetail";
import { peopleHelper } from "./Helpers";
import { Route } from "react-router-dom";
import Loading from "./Loading";
import axios from "axios";

class People extends Component {
  state = {
    people: [],
    isDownloading: false
  };

  componentDidMount() {
    this.setState({ isDownloading: true }, () => this.getPopularPeople());
  }

  getPopularPeople = async () => {
    const response = await axios.get(peopleHelper.trendingPeopleUrl);
    response.data.results.map(people => {
      people.known_for_title = [];
      if (people.known_for.length > 0) {
        return people.known_for.map(mov => {
          return people.known_for_title.push(mov.title || mov.original_name);
        });
      } else {
        return people;
      }
    });
    this.setState({ isDownloading: false, people: response.data.results });
  };

  render() {
    return (
      <>
        {this.state.isDownloading ? (
          <Loading />
        ) : (
          <>
            <Route
              exact
              path="/people"
              render={props => <PopularPeople people={this.state.people} {...props} />}
            />
            <Route exact path="/people/:id" render={props => <PeopleDetail {...props} />} />
          </>
        )}
      </>
    );
  }
}

export default People;
