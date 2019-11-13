import React, { Component } from "react";
import Loading from "../Shared/Loading";
import SadFace from "../Shared/SadFace";
import { peopleHelper } from "../../Utils/Network";
import axios from "axios";
import queryString from "query-string";
import PeopleBiography from "./PeopleBiography";
import PeopleInfo from "./PeopleInfo";
import PeopleMedia from "./PeopleMedia";

class PeopleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {},
      isLoading: false,
      showMovies: true,
      downloadError: false
    };
    this.searchQuery = queryString.parse(this.props.location.search);
  }

  // Determine if source is from movies or tv because we use it in child component to control a switch toggle

  componentDidMount() {
    window.scrollTo(0, 0);
    const showMovies = this.searchQuery.from === "tv" ? false : true;
    this.setState({ isLoading: true, showMovies }, () => this.getPerson());
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { person, showMovies } = this.state;
    if (person !== nextState.person) {
      return true;
    }
    if (showMovies !== nextState.showMovies) {
      return true;
    }
    return false;
  }

  getPerson = async () => {
    const { id } = this.props.match.params;
    try {
      const person = await axios.get(peopleHelper.personUrl(id));
      const movieCredits = await axios.get(peopleHelper.personMovieCredits(id));
      const tvCredits = await axios.get(peopleHelper.personTvCredits(id));
      this.setPerson(tvCredits.data, movieCredits.data, person.data);
    } catch (error) {
      this.setState({ downloadError: true, isLoading: false });
    }
  };

  removeDuplicates = array => {
    const filteredArray = [];

    for (let item of array) {
      if (!filteredArray.find(other => other.id === item.id)) {
        filteredArray.push(item);
      }
    }
    return filteredArray;
  };

  setPerson = (tv, movie, person) => {
    const topTvCredits = [...tv.cast, ...tv.crew];
    const topMovieCredits = [...movie.cast, ...movie.crew];
    topMovieCredits.sort((a, b) => {
      return b.vote_count - a.vote_count;
    });
    topTvCredits.sort((a, b) => {
      return b.episode_count - a.episode_count;
    });

    const filteredMovArr = this.removeDuplicates(topMovieCredits);
    const filteredTvArr = this.removeDuplicates(topTvCredits);

    filteredTvArr.splice(12);
    filteredMovArr.splice(12);

    person.topTvCredits = filteredTvArr;
    person.topMovieCredits = filteredMovArr;

    this.setState({ person, isLoading: false, downloadError: false });
  };

  render() {
    const { person, isLoading, showMovies, error } = this.state;
    const displayItems = showMovies ? person.topMovieCredits : person.topTvCredits;

    if (error) return <SadFace />;

    return (
      <>
        {person.id && !isLoading ? (
          <>
            <PeopleBiography person={person} />
            <div className="container">
              <div className="row">
                <PeopleInfo person={person} />
                <PeopleMedia
                  showMovies={showMovies}
                  displayItems={displayItems}
                  person={person}
                  toggle={() => this.setState({ showMovies: !showMovies })}
                />
              </div>
            </div>
          </>
        ) : (
          <Loading />
        )}
      </>
    );
  }
}

export default PeopleDetail;
