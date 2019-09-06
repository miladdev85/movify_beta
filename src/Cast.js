import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CastList from "./CastList";
import Loading from "./Loading";
import SadFace from "./SadFace";
import { mediaHelper } from "./Helpers";
import axios from "axios";

class Cast extends Component {
  state = {
    casts: [],
    isDownloading: false,
    error: false
  };
  source = this.props.match.path.includes("/movies/") ? "movie" : "tv";

  componentDidMount() {
    this.setState({ isDownloading: true }, () => this.getCasts());
  }

  getCasts = async () => {
    const { match } = this.props;
    try {
      let response = await axios.get(mediaHelper.mediaCastsUrl(this.source, match.params.id));
      response.data.cast.sort((a, b) => a.order - b.order);
      response = response.data.cast.splice(0, 6);
      this.setState({ casts: response, isDownloading: false });
    } catch (error) {
      this.setState({ error: true, isDownloading: false });
    }
  };

  render() {
    const { isDownloading, error, casts } = this.state;

    return (
      <>
        {isDownloading && <Loading />}
        {isDownloading === false && error && <SadFace />}
        {isDownloading === false && casts.length > 0 && (
          <div>
            <CastList casts={casts} from={this.source} />
          </div>
        )}
      </>
    );
  }
}

export default withRouter(Cast);
