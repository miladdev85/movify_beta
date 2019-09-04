import React, { useState, useEffect } from "react";
import { genreHelper } from "./Helpers";
import SadFace from "./SadFace";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "./Trailer.css";

function Trailer({ match }) {
  const [trailer, setTrailer] = useState({});

  useEffect(() => {
    const getTrailer = async () => {
      const response = await axios.get(genreHelper.trailerUrl(match.params.id));
      setTrailer(response.data.results[0]);
    };
    getTrailer();
  }, [match.params.id]);

  if (!trailer) return <SadFace />;

  return (
    <div>
      {trailer.key && (
        <>
          <div className="embed-responsive embed-responsive-4by3 mb-3" style={{ height: "205px" }}>
            <iframe
              title={trailer.key}
              className="embed-responsive-item rounded"
              allowFullScreen="allowfullscreen"
              src={`https://www.youtube.com/embed/${trailer.key}`}
            />
          </div>
          <div className="d-flex">
            <span className="badge genre__badge p-2 ">{trailer.size > 720 ? "Full HD" : "HD"}</span>
            <span className="badge genre__badge p-2 mx-1">{trailer.iso_3166_1}</span>
            <span className="badge genre__badge p-2 ml-auto">{trailer.site}</span>
          </div>
        </>
      )}
    </div>
  );
}

export default withRouter(Trailer);
