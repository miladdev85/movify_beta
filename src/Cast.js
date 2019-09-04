import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import CastList from "./CastList";
import Loading from "./Loading";
import SadFace from "./SadFace";
import { getCasts } from "./Prova";

function Cast({ match, from }) {
  const [casts, setCasts] = useState([]);
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsDownloading(true);
    getCasts(from, match.params.id, setCasts, setIsDownloading, setError);
  }, [match.params.id, from]);

  return (
    <>
      {isDownloading && <Loading />}
      {isDownloading === false && error && <SadFace />}
      {isDownloading === false && casts.length > 0 && (
        <div className="">
          <CastList casts={casts} from={from} />
        </div>
      )}
    </>
  );
}

export default withRouter(Cast);
