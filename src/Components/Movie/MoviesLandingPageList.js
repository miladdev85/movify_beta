import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { movieHelper } from "../../Utils/Network";
import MediaListSlider from "../Shared/MediaListSlider";
import SadFace from "../Shared/SadFace";
import Loading from "../Shared/Loading";
import queryString from "query-string";
import axios from "axios";

// MoreAvailable in state is used in child component to determine if there are more items available or not

class MoviesLandingPageList extends Component {
  state = {
    items: [],
    page: 1,
    isDownloading: false,
    moreAvailable: false
  };

  componentDidMount() {
    this.setState({ isDownloading: true }, () => this.getMovies());
  }

  // Logic to determine if we should download new media and reset page or not
  // Checking for section changes and genre changes

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

  // Determine appropriate API URL to use based on current URL and page in state

  getUrlToFetch = () => {
    const { match } = this.props;
    const { page } = this.state;
    const parsedQuery = queryString.parse(this.props.location.search);
    let url;
    switch (match.params.section) {
      case "new-releases":
        url = movieHelper.newReleasesUrl(page, parsedQuery.genre);
        break;
      case "swedish":
        url = movieHelper.swedishUrl(page, parsedQuery.genre);
        break;
      case "coming-soon":
        url = movieHelper.comingSoonUrl(page, parsedQuery.genre);
        break;
      case "popular":
        url = movieHelper.popularUrl(page, parsedQuery.genre);
        break;
      case "top-rated":
        url = movieHelper.topRatedUrl(page, parsedQuery.genre);
        break;
      case "old-movies":
        url = movieHelper.oldiesUrl(page, parsedQuery.genre);
        break;
      default:
        url = movieHelper.popularUrl(parsedQuery.genre);
    }
    return url;
  };

  getMovies = async () => {
    const url = this.getUrlToFetch();
    const response = await axios.get(url);
    const responsePage = response.data.page;

    this.setState(prevState => {
      return {
        items:
          responsePage === 1
            ? response.data.results
            : [...prevState.items, ...response.data.results],
        moreAvailable: responsePage < response.data.total_pages ? true : false,
        isDownloading: false
      };
    });
  };

  addPage = () => {
    this.setState(
      prevState => ({ page: prevState.page + 1 }),
      () => this.getMovies()
    );
  };

  render() {
    const { isDownloading, items, moreAvailable } = this.state;
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
            moreAvailable={moreAvailable}
          />
        )}
      </>
    );
  }
}

export default withRouter(MoviesLandingPageList);
