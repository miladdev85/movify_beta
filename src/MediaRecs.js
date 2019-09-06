import React, { Component } from "react";
import MediaListSlider from "./MediaListSlider";
import { withRouter } from "react-router-dom";
import SadFace from "./SadFace";
import Loading from "./Loading";
import { mediaHelper } from "./Helpers";
import axios from "axios";

class MediaRecs extends Component {
  state = {
    items: [],
    isDownloading: false,
    error: false
  };
  source = this.props.match.path.includes("/movies/") ? "movie" : "tv";

  componentDidMount() {
    this.setState({ isDownloading: true }, () => this.getRecommendedItems());
  }

  getRecommendedItems = async () => {
    const { match } = this.props;
    try {
      const response = await axios.get(
        mediaHelper.mediaRecommendationsUrl(this.source, match.params.id)
      );
      this.setState({ items: response.data.results, isDownloading: false });
    } catch (error) {
      this.setState({ error: true, isDownloading: false });
    }
  };

  render() {
    const { isDownloading, error, items } = this.state;
    return (
      <>
        {!isDownloading && error && <SadFace />}
        {!isDownloading && items.length === 0 && <SadFace />}
        {isDownloading && <Loading />}
        {!isDownloading && !error && (
          <MediaListSlider
            col="col-6 col-md-3 col-lg-3"
            items={items}
            fromRecs={true}
            isDownloading={isDownloading}
          />
        )}
      </>
    );
  }
}

export default withRouter(MediaRecs);
