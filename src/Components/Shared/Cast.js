import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CastList from "./CastList";
import Loading from "./Loading";
import SadFace from "./SadFace";
import Subtitle from "./Subtitle";
import { mediaHelper } from "../../Utils/Network";
import axios from "axios";

class Cast extends Component {
  state = {
    casts: [],
    isDownloading: false,
    error: false
  };

  componentDidMount() {
    this.setState({ isDownloading: true }, () => this.getCasts());
  }

  getCasts = async () => {
    const { match, type } = this.props;
    try {
      let response = await axios.get(mediaHelper.mediaCastsUrl(type, match.params.id));
      response.data.cast.sort((a, b) => a.order - b.order);
      response = response.data.cast.splice(0, 6);
      this.setState({ casts: response, isDownloading: false });
    } catch (error) {
      this.setState({ error: true, isDownloading: false });
    }
  };

  render() {
    const { isDownloading, error, casts } = this.state;
    const { type } = this.props;

    return (
      <>
        {isDownloading && <Loading />}
        {!isDownloading && error && <SadFace />}
        {!isDownloading && casts.length > 0 && (
          <div>
            <Subtitle text={`${type === "movie" ? "Top" : "Series"} Cast`} />
            <CastList casts={casts} source={type} />
          </div>
        )}
      </>
    );
  }
}

export default withRouter(Cast);
