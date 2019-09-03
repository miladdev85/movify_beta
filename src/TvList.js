import React, { Component } from "react";
import TvListItem from "./TvListItem";
import Loading from "./Loading";
import SadFace from "./SadFace";
import { mediaHelper } from "./Helpers";
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
      this.setState({ items: [], page: 1, isDownloading: true }, () => this.getTvShows());
    }
  }

  handleScroll = () => {
    const { page, items } = this.state;
    const element = document.documentElement;
    if (items.length && window.innerHeight + element.scrollTop > element.offsetHeight - 700) {
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
          <div className="container">
            <div className="row mt-5">
              <TvListItem items={items} col="col-6 col-md-4 col-lg-2 p-2" imgHeight="278px" />
            </div>
          </div>
        )}
      </>
    );
  }
}

export default TvList;
