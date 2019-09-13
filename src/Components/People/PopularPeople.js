import React, { Component } from "react";
import { peopleHelper } from "../../Utils/Network";
import Loading from "../Shared/Loading";
import axios from "axios";
import { Link } from "react-router-dom";
import Image from "../Shared/Image";
import "./People.css";

class PopularPeople extends Component {
  state = {
    people: [],
    page: 1,
    totalPages: null,
    isDownloading: false,
    gettingMore: false
  };

  componentDidMount() {
    this.setState({ isDownloading: true }, () => this.getPopularPeople());
  }

  getPopularPeople = async () => {
    const { page } = this.state;
    const response = await axios.get(peopleHelper.trendingPeopleUrl(page));
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
    this.setState(prevState => ({
      isDownloading: false,
      people: [...prevState.people, ...response.data.results],
      totalPages: response.data.total_pages,
      gettingMore: false
    }));
  };

  addPage = () => {
    this.setState(
      prevState => ({ gettingMore: true, page: prevState.page + 1 }),
      () => this.getPopularPeople()
    );
  };

  render() {
    const { people, isDownloading, gettingMore, totalPages, page } = this.state;
    return (
      <>
        {isDownloading ? (
          <Loading />
        ) : (
          <div className="container">
            <h3 className="mt-5 mb-4">Popular People</h3>
            <div className="row text-center">
              {people.map(person => (
                <div key={person.id} className="col-6 col-md-4 col-lg-3 col-xl-2 pb-3">
                  <div className="">
                    <Link
                      className="people__link text-reset brightness"
                      to={`/people/${person.id}`}
                    >
                      <Image
                        source={person.profile_path}
                        type="popular"
                        alt={person.name}
                        className="rounded people__image"
                      >
                        <span className="m-0">{person.name}</span>
                      </Image>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              {gettingMore && <Loading />}
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

export default PopularPeople;
