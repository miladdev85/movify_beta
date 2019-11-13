import React, { Component } from "react";
import MediaListItem from "./MediaListItem";
import Loading from "./Loading";
import { withRouter } from "react-router-dom";
import SadFace from "./SadFace";
import { genericBottomScroll } from "../../Utils/SharedFns";
import axios from "axios";
import debounce from "lodash.debounce";

// Using debounce function from lodash for infinite scroll - downloading more items when reaching the end of page

class MoreMediaFetcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isDownloading: false,
      page: 1,
      error: false
    };
    this.throttledScroll = debounce(this.handleScroll, 200);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.throttledScroll);
    this.setState({ isDownloading: true }, () => this.getItems());
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.throttledScroll);
  }

  // Logic for reseting items and page in state.
  // Used on TV component because we have a navbar for different sections there

  componentDidUpdate(prevProps) {
    const { match } = this.props;
    const newUrl = match.params.section;
    const oldUrl = prevProps.match.params.section;

    if (newUrl !== oldUrl) {
      window.addEventListener("scroll", this.throttledScroll);
      this.setState({ items: [], page: 1, isDownloading: true }, () => this.getItems());
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { items } = this.state;
    const { section } = this.props.match.params;
    if (items !== nextState.items) {
      return true;
    }
    if (section !== nextProps.section) {
      return true;
    }
    return false;
  }

  // Using helper function to determine if we have scrolled down enough to begin download more items

  handleScroll = () => {
    const { items, isDownloading } = this.state;
    let nearBottom = genericBottomScroll(items, document.documentElement);
    if (nearBottom && !isDownloading) {
      this.setState(
        prevState => ({ page: prevState.page + 1 }),
        () => this.getItems()
      );
    }
  };

  getUrlWithPagination = (url, page) => {
    return `${url}&page=${page}`;
  };

  // The API can return duplicate media object which is why we check if we have the same object
  // already in state or not. Filter the response array and return the item only if we don't already have it
  // We also remove the scroll listener if we have reached the end of available items

  getItems = async () => {
    const { items, page } = this.state;
    const { fetchUrl } = this.props;
    const url = this.getUrlWithPagination(fetchUrl, page);

    try {
      const response = await axios.get(url);
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
    const { className, imgClass, type } = this.props;
    return (
      <>
        {!isDownloading && error && <SadFace />}
        {!isDownloading && items.length === 0 && <SadFace />}
        {isDownloading && <Loading />}
        {!isDownloading && !error && items.length > 0 && (
          <MediaListItem type={type} items={items} className={className} imgClass={imgClass} />
        )}
      </>
    );
  }
}

export default withRouter(MoreMediaFetcher);
