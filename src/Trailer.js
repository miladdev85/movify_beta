import React, { Component } from "react";
import { mediaHelper } from "./Helpers";
import SadFace from "./SadFace";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Subtitle from "./Subtitle";
import "./Trailer.css";

class Trailer extends Component {
  state = {
    trailer: {},
    isDownloading: false
  };

  componentDidMount() {
    this.setState({ isDownloading: true }, () => this.getTrailer());
  }

  getTrailer = async () => {
    const { match } = this.props;
    const response = await axios.get(mediaHelper.trailerUrl(match.params.id));
    this.setState({ isDownload: false, trailer: response.data.results[0] });
  };

  render() {
    const { trailer } = this.state;
    return (
      <>
        <Subtitle text="Trailer" />
        {trailer ? (
          <>
            <div
              className="embed-responsive embed-responsive-4by3 mb-3"
              style={{ height: "225px" }}
            >
              <iframe
                title={trailer.key}
                className="embed-responsive-item rounded"
                allowFullScreen="allowfullscreen"
                src={`https://www.youtube.com/embed/${trailer.key}`}
              />
            </div>
            <div className="d-flex ">
              <span className="badge p-2 bg-light text-secondary font-weight-light ">
                {trailer.size > 720 ? "Full HD" : "HD"}
              </span>
              <span className="badge p-2 bg-light text-secondary font-weight-light  mx-1">
                {trailer.iso_3166_1}
              </span>
              <span className="badge p-2 bg-light text-secondary font-weight-light  ml-auto">
                {trailer.site}
              </span>
            </div>
          </>
        ) : (
          <SadFace />
        )}
      </>
    );
  }
}

export default withRouter(Trailer);
