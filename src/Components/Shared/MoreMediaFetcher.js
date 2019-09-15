import React, { Component } from "react";
import MediaListItem from "./MediaListItem";
import Loading from "./Loading";
import { withRouter } from "react-router-dom";
import SadFace from "./SadFace";
import { genericBottomScroll } from "../../Utils/SharedFns";
import axios from "axios";
import debounce from "lodash.debounce";

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

  componentDidUpdate(prevProps) {
    const { match } = this.props;
    const newUrl = match.params.section;
    const oldUrl = prevProps.match.params.section;

    if (newUrl !== oldUrl) {
      window.addEventListener("scroll", this.throttledScroll);
      this.setState({ items: [], page: 1, isDownloading: true }, () => this.getItems());
    }
  }

  shouldComponentUpdate(prevProps, nextState) {
    return this.state.items !== nextState.items;
  }

  handleScroll = () => {
    const { items, isDownloading } = this.state;
    let nearBottom = genericBottomScroll(items, document.documentElement);
    if (nearBottom && !isDownloading) {
      this.setState(prevState => ({ page: prevState.page + 1 }), () => this.getItems());
    }
  };

  urlWithPagination = (url, page) => {
    return `${url}&page=${page}`;
  };

  getItems = async () => {
    const { items, page } = this.state;
    const { fetchUrl } = this.props;
    try {
      const response = await axios.get(this.urlWithPagination(fetchUrl, page));

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
