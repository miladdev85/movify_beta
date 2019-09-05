import React, { Component } from "react";
import MovieList from "./MovieList";
import { withRouter } from "react-router-dom";
import SadFace from "./SadFace";
import Subtitle from "./Subtitle";
import Loading from "./Loading";
import { mediaHelper } from "./Helpers";
import axios from "axios";

class Similar extends Component {
  state = {
    items: [],
    isDownloading: false,
    error: false
  };

  componentDidMount() {
    this.setState({ isDownloading: true }, () => this.getSimilarItems());
  }

  getSimilarItems = async () => {
    const { match, from } = this.props;
    try {
      const response = await axios.get(mediaHelper.mediaSimilarUrl(from, match.params.id));
      this.setState({ items: response.data.results, isDownloading: false });
    } catch (error) {
      this.setState({ error: true, isDownloading: false });
    }
  };

  render() {
    const { isDownloading, error, items } = this.state;
    return (
      <>
        {isDownloading === false && error && <SadFace />}
        {isDownloading && <Loading />}
        {isDownloading === false && error === false && (
          <>
            <Subtitle text={"Similar Movies"} />
            <MovieList
              col="col-6 col-md-3 col-lg-3"
              items={items}
              fromSimilar={true}
              isDownloading={isDownloading}
            />
          </>
        )}
      </>
    );
  }
}

export default withRouter(Similar);
