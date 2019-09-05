import React, { useState, useLayoutEffect } from "react";
import MovieList from "./MovieList";
import { withRouter } from "react-router-dom";
import SadFace from "./SadFace";
import Subtitle from "./Subtitle";
import { getSimilarItems } from "./Prova";
import Loading from "./Loading";

function Similar({ match }) {
  const [items, setItems] = useState([]);
  const [isDownloading, setIsDownloading] = useState(true);
  const [error, setError] = useState(false);

  useLayoutEffect(() => {
    let didCancel = false;
    if (didCancel === false) {
      getSimilarItems("movie", match.params.id, setItems, setIsDownloading, setError);
    }
    return () => (didCancel = true);
  }, [match.params.id]);

  return (
    <>
      {isDownloading === false && error && <SadFace />}
      {isDownloading && <Loading />}
      {isDownloading === false && error === false && (
        <>
          <Subtitle text={"Similar Movies"} />
          <MovieList items={items} fromSimilar={true} isDownloading={isDownloading} />
        </>
      )}
    </>
  );
}

export default withRouter(Similar);
