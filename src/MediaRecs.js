import React, { Component } from "react";
import { mediaHelper } from "./Helpers";
import MediaListItem from "./MediaListItem";
import { withRouter } from "react-router-dom";
import Subtitle from "./Subtitle";
import axios from "axios";

class MediaRecs extends Component {
  state = {
    items: [],
    error: false,
    isDownloading: false
  };

  componentDidMount() {
    this.setState({ isDownloading: true }, () => this.getRecommendations());
  }

  getRecommendations = async () => {
    const { match, from } = this.props;
    try {
      const response = await axios.get(mediaHelper.mediaRecommendationsUrl(from, match.params.id));
      this.setState({ items: response.data.results, isDownloading: false });
    } catch (error) {
      this.setState({ error: true, isDownloading: false });
    }
  };

  render() {
    const { items } = this.state;
    const { from } = this.props;
    return (
      <>
        <Subtitle text={"Recommendations"} />
        <MediaListItem
          from={from}
          items={items}
          col="col-6 col-md-4 col-lg-3 col-xl-2 pb-2"
          imgHeight="200px"
        />
      </>
    );
  }
}

export default withRouter(MediaRecs);
