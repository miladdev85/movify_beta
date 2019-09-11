import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { genreHelper } from "./Helpers";
import MediaListSlider from "./MediaListSlider";
import SadFace from "./SadFace";
import Loading from "./Loading";
import queryString from "query-string";
import axios from "axios";

class MoviesLandingPageList extends Component {
  state = {
    items: [],
    page: 1,
    isDownloading: false,
    spreadItems: false
  };

  componentDidMount() {
    this.setState({ isDownloading: true }, () => this.getMovies());
  }

  componentDidUpdate(prevProps) {
    const oldGenre = prevProps.location.search;
    const newGenre = this.props.location.search;
    const oldSection = prevProps.match.params.section;
    const newSection = this.props.match.params.section;
    if (newGenre !== oldGenre) {
      this.setState({ isDownloading: true, page: 1 }, () => this.getMovies());
    }
    if (newSection !== oldSection) {
      this.setState({ isDownloading: true, page: 1 }, () => this.getMovies());
    }
  }

  getMovies = async () => {
    const { match } = this.props;
    const { page } = this.state;
    const parsedQuery = queryString.parse(this.props.location.search);
    let url;
    switch (match.params.section) {
      case "new-releases":
        url = genreHelper.newReleasesUrl(page, parsedQuery.genre);
        break;
      case "swedish":
        url = genreHelper.swedishUrl(page, parsedQuery.genre);
        break;
      case "coming-soon":
        url = genreHelper.comingSoonUrl(page, parsedQuery.genre);
        break;
      case "popular":
        url = genreHelper.popularUrl(page, parsedQuery.genre);
        break;
      case "top-rated":
        url = genreHelper.topRatedUrl(page, parsedQuery.genre);
        break;
      case "old-movies":
        url = genreHelper.oldiesUrl(page, parsedQuery.genre);
        break;
      default:
        url = genreHelper.popularUrl(parsedQuery.genre);
    }
    const response = await axios.get(url);
    const responsePage = response.data.page;

    this.setState(prevState => {
      return {
        items:
          responsePage === 1
            ? response.data.results
            : [...prevState.items, ...response.data.results],
        spreadItems: responsePage < response.data.total_pages ? true : false,
        isDownloading: false
      };
    });
  };

  addPage = () => {
    this.setState({ page: this.state.page + 1 }, () => this.getMovies());
  };

  render() {
    const { isDownloading, items, spreadItems } = this.state;
    return (
      <>
        {isDownloading && <Loading />}
        {!isDownloading && items.length === 0 && <SadFace />}
        {items.length > 0 && (
          <MediaListSlider
            className="col-6 col-md-5 offset-md-1 offset-lg-0 col-lg-3 container__mainmovie"
            fromRecs={false}
            type={this.props.type}
            items={items}
            addPage={this.addPage}
            spreadItems={spreadItems}
          />
        )}
      </>
    );
  }
}

export default withRouter(MoviesLandingPageList);
