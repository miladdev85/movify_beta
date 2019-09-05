import React, { Component } from "react";
import MediaListItem from "./MediaListItem";
import Loading from "./Loading";
import { withRouter } from "react-router-dom";
import SadFace from "./SadFace";
import { mediaHelper, genericBottomScroll } from "./Helpers";
import axios from "axios";
import throttle from "lodash.throttle";

class GetMore extends Component {
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
    console.log("i mountzzz");
    window.addEventListener("scroll", this.throttledScroll);
    this.setState({ isDownloading: true }, () => this.getItems());
  }

  componentWillUnmount() {
    console.log("i unmounted");
    window.removeEventListener("scroll", this.throttledScroll);
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;
    const newUrl = match.params.section;
    const oldUrl = prevProps.match.params.section;

    if (newUrl !== oldUrl) {
      window.addEventListener("scroll", this.throttledScroll);
      this.setState({ items: [], page: 1, isDownloading: true }, () => this.getItems());
    }
  }

  handleScroll = () => {
    const { items, page } = this.state;
    let nearBottom = genericBottomScroll(items, document.documentElement);
    if (nearBottom) {
      this.setState({ page: page + 1 }, () => this.getItems());
    }
  };

  getItems = async () => {
    const { page, items } = this.state;
    const { fetchUrl } = this.props;
    console.log("getting items");
    try {
      const response = await axios.get(mediaHelper.addPagination(fetchUrl, page));

      const filteredResponse = response.data.results.filter(
        item => !items.find(i => i.id === item.id)
      );

      if (response.data.total_pages === page) {
        window.removeEventListener("scroll", this.throttledScroll);
      }

      this.setState({
        error: false,
        isDownloading: false,
        items: [...items, ...filteredResponse]
      });
    } catch (err) {
      this.setState({ isDownloading: false, error: true });
    }
  };

  render() {
    const { items, isDownloading, error } = this.state;
    const { col, match, imgHeight } = this.props;
    const source = match.path.includes("/tv/") ? "tv" : "movie";

    if (error || items.length === 0) return <SadFace />;

    return (
      <>
        {isDownloading ? (
          <Loading />
        ) : (
          <div className="container mt-4">
            <MediaListItem from={source} items={items} col={col} imgHeight={imgHeight} />
          </div>
        )}
      </>
    );
  }
}

export default withRouter(GetMore);
