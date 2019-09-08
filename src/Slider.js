import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { mediaHelper } from "./Helpers";
import axios from "axios";
import Slideshow from "./Slideshow";
import Loading from "./Loading";
import "./Slider.css";

class Slider extends Component {
  state = {
    media: [],
    showIndex: 0,
    direction: null,
    isDownloading: false
  };

  componentDidMount() {
    this.setState({ isDownloading: true }, () => this.getMovies());
  }

  // Fetch most popular media and store them. Use their IDs to fetch more details. Store more detailed media object in state.

  getMovies = async () => {
    const { source } = this.props;
    let discoverUrl = source === "movie" ? mediaHelper.discoverMovieUrl : mediaHelper.discoverTvUrl;
    let response = await axios.get(discoverUrl);
    response = response.data.results.splice(0, 8);

    const media = await Promise.all(
      response.map(async m => {
        const response = await axios.get(mediaHelper.mediaUrl(source, m.id));
        return response.data;
      })
    );
    this.setState({ isDownloading: false, media });
  };

  handleSelect = (selectedIndex, e) => {
    this.setState({ showIndex: selectedIndex, direction: e.direction });
  };

  render() {
    const { media, showIndex, direction, isDownloading } = this.state;

    return (
      <>
        {isDownloading ? (
          <Loading />
        ) : (
          <Slideshow
            {...this.props}
            direction={direction}
            activeIndex={showIndex}
            items={media}
            handleSelect={this.handleSelect}
          />
        )}
      </>
    );
  }
}

export default withRouter(Slider);
