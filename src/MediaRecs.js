import React, { Component } from "react";
import MediaListSlider from "./MediaListSlider";
import { withRouter } from "react-router-dom";
import SadFace from "./SadFace";
import Loading from "./Loading";
import { mediaHelper } from "./Helpers";
import axios from "axios";
import Subtitle from "./Subtitle";

class MediaRecs extends Component {
  state = {
    items: [],
    page: 1,
    isDownloading: false,
    spreadItems: false,
    error: false
  };

  componentDidMount() {
    this.setState({ isDownloading: true }, () => this.getRecommendedItems());
  }

  addPage = () => {
    this.setState({ page: this.state.page + 1 }, () => this.getRecommendedItems());
  };

  getRecommendedItems = async () => {
    const { page } = this.state;
    const { match, source } = this.props;
    try {
      const response = await axios.get(
        mediaHelper.mediaRecommendationsUrl(source, match.params.id, page)
      );

      const shouldSpread = page < response.data.total_pages ? true : false;

      this.setState({
        spreadItems: shouldSpread,
        items: [...this.state.items, ...response.data.results],
        isDownloading: false
      });
    } catch (error) {
      this.setState({ error: true, isDownloading: false });
    }
  };

  render() {
    const { isDownloading, error, items, spreadItems } = this.state;
    const { source } = this.props;
    return (
      <>
        <Subtitle text={`Recommended ${source === "movie" ? "Movies" : "Shows"}`} />
        {!isDownloading && error && <SadFace />}
        {!isDownloading && items.length === 0 && <SadFace />}
        {isDownloading && <Loading />}
        {!isDownloading && !error && items.length > 0 && (
          <MediaListSlider
            col="col-6 col-md-3 col-lg-3"
            items={items}
            fromRecs={true}
            addPage={this.addPage}
            spreadItems={spreadItems}
          />
        )}
      </>
    );
  }
}

export default withRouter(MediaRecs);
