import React, { Component } from "react";
import Loading from "./Loading";
import { peopleHelper } from "./Network";
import axios from "axios";
import queryString from "query-string";
import PeopleBiography from "./PeopleBiography";
import PeopleInfo from "./PeopleInfo";
import PeopleMedia from "./PeopleMedia";
import "./PeopleDetail.css";

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

  componentDidMount() {
    window.scrollTo(0, 0);
    const showMovies = this.searchQuery.from === "tv" ? false : true;
    this.setState({ isLoading: true, showMovies }, () => this.getPerson());
  }

  setPerson = (tv, movie, person) => {
    const topTvCredits = [...tv.cast, ...tv.crew];
    const topMovieCredits = [...movie.cast, ...movie.crew];
    topMovieCredits.sort((a, b) => {
      return b.vote_count - a.vote_count;
    });
    topTvCredits.sort((a, b) => {
      return b.episode_count - a.episode_count;
    });

    const filteredMovArr = [];
    const filteredTvArr = [];

    for (let item of topMovieCredits) {
      if (!filteredMovArr.find(other => other.id === item.id)) {
        filteredMovArr.push(item);
      }
    }

    for (let item of topTvCredits) {
      if (!filteredTvArr.find(other => other.id === item.id)) {
        filteredTvArr.push(item);
      }
    }
    filteredTvArr.splice(12);
    filteredMovArr.splice(12);

    person.topTvCredits = filteredTvArr;
    person.topMovieCredits = filteredMovArr;

    this.setState({ person, isLoading: false, downloadError: false });
  };

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

  render() {
    const { person, isLoading, showMovies } = this.state;
    const displayItems = showMovies ? person.topMovieCredits : person.topTvCredits;

    if (!isLoading && !person.id) {
      return (
        <div className="d-flex justify-content-center">
          <span className="emoji text-dark">&#9785;</span>
        </div>
      );
    }
    return (
      <div className="detail__container">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <PeopleBiography person={person} />
            <div className="container ">
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
        )}
      </div>
    );
  }
}

export default PeopleDetail;
