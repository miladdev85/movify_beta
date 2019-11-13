import React, { Component } from "react";
import PeopleList from "./PeopleList";
import { peopleHelper } from "../../Utils/Network";
import Loading from "../Shared/Loading";
import axios from "axios";
import "./People.css";

class People extends Component {
  state = {
    people: [],
    page: 1,
    totalPages: null,
    isDownloading: false
  };

  componentDidMount() {
    this.setState({ isDownloading: true }, () => this.getPopularPeople());
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { people } = this.state;

    return people !== nextState.people;
  }

  getPopularPeople = async () => {
    const { page } = this.state;
    const response = await axios.get(peopleHelper.trendingPeopleUrl(page));

    this.setState(prevState => ({
      isDownloading: false,
      people: [...prevState.people, ...response.data.results],
      totalPages: response.data.total_pages
    }));
  };

  addPage = () => {
    this.setState(
      prevState => ({ page: prevState.page + 1 }),
      () => this.getPopularPeople()
    );
  };

  render() {
    const { people, isDownloading, totalPages, page } = this.state;
    return (
      <>
        {isDownloading ? (
          <Loading />
        ) : (
          <div className="container">
            <h3 className="mt-5 mb-4">Popular People</h3>
            <div className="row text-center">
              {people.length > 0 && <PeopleList people={people} />}
            </div>
            <div className="text-center">
              {page < totalPages && (
                <button
                  onClick={this.addPage}
                  className="btn btn-sm btn-outline-secondary text-center mt-5"
                >
                  Get More
                </button>
              )}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default People;
