import React, { Component } from "react";
import MediaListSlider from "./MediaListSlider";
import { withRouter } from "react-router-dom";
import SadFace from "./SadFace";
import Loading from "./Loading";
import { mediaHelper } from "../../Utils/Network";
import axios from "axios";
import Subtitle from "./Subtitle";

class MediaRecs extends Component {
  state = {
    items: [],
    page: 1,
    isDownloading: false,
    moreAvailable: false,
    error: false
  };

  componentDidMount() {
    this.setState({ isDownloading: true }, () => this.getRecommendedItems());
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.items !== nextState.items;
  }

  addPage = () => {
    this.setState(
      prevState => ({ page: prevState.page + 1 }),
      () => this.getRecommendedItems()
    );
  };

  // Fetch items but also determine if there are more available items to fetch later

  getRecommendedItems = async () => {
    const { page } = this.state;
    const { match, type } = this.props;
    try {
      const response = await axios.get(
        mediaHelper.mediaRecommendationsUrl(type, match.params.id, page)
      );

      this.setState({
        moreAvailable: page < response.data.total_pages ? true : false,
        items: [...this.state.items, ...response.data.results],
        isDownloading: false
      });
    } catch (error) {
      this.setState({ error: true, isDownloading: false });
    }
  };

  render() {
    const { isDownloading, error, items, moreAvailable } = this.state;
    const { type, className } = this.props;
    return (
      <>
        <Subtitle text={`Recommended ${type === "movie" ? "Movies" : "Shows"}`} />
        {error && <SadFace />}
        {!isDownloading && items.length === 0 && <SadFace />}
        {isDownloading && <Loading />}
        {!isDownloading && items.length > 0 && (
          <MediaListSlider
            className={`${className} col-6 col-md-3 col-lg-3`}
            type={type}
            items={items}
            fromRecs={true}
            addPage={this.addPage}
            moreAvailable={moreAvailable}
          />
        )}
      </>
    );
  }
}

export default withRouter(MediaRecs);
