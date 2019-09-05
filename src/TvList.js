import React, { Component } from "react";
import MediaListItem from "./MediaListItem";
import Loading from "./Loading";
import SadFace from "./SadFace";
import { mediaHelper, genericBottomScroll } from "./Helpers";
import axios from "axios";
import throttle from "lodash.throttle";

class TvList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isDownloading: false,
      page: 1,
      error: false
    };
    this.throttledScroll = throttle(this.handleScroll, 300);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.throttledScroll);
    this.setState({ isDownloading: true }, () => this.getTvShows());
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.throttledScroll);
  }

  componentDidUpdate(prevProps, nextProps) {
    const { match } = this.props;
    const newUrl = match.params.section;
    const oldUrl = prevProps.match.params.section;

    if (newUrl !== oldUrl) {
      window.addEventListener("scroll", this.throttledScroll);
      this.setState({ items: [], page: 1, isDownloading: true }, () => this.getTvShows());
    }
  }

  handleScroll = () => {
    const { items, page } = this.state;
    let nearBottom = genericBottomScroll(items, document.documentElement);
    if (nearBottom) {
      this.setState({ page: page + 1 }, () => this.getTvShows());
    }
  };

  getTvShows = async () => {
    const { page, items } = this.state;
    const { match } = this.props;
    try {
      const response = await axios.get(mediaHelper.sectionTvUrl(match.params.section, page));
      if (response.data.results.length < 20) {
        window.removeEventListener("scroll", this.throttledScroll);
      }

      this.setState({
        error: false,
        isDownloading: false,
        items: [...items, ...response.data.results]
      });
    } catch (err) {
      this.setState({ isDownloading: false, error: true });
    }
  };

  render() {
    const { items, isDownloading, error } = this.state;

    if (error) return <SadFace />;

    return (
      <>
        {isDownloading ? (
          <Loading />
        ) : (
          <div className="container mt-4">
            <MediaListItem
              from="tv"
              items={items}
              col="col-6 col-md-4 col-lg-3 col-xl-2 p-2"
              imgHeight="278px"
            />
          </div>
        )}
      </>
    );
  }
}

export default TvList;
