import React, { useState, useEffect } from "react";
import MovieList from "./MoviesLandingPageList";
import { withRouter } from "react-router-dom";
import SadFace from "./SadFace";
import Subtitle from "./Subtitle";
import { getSimilarItems } from "./Prova";
import queryString from "query-string";
import Loading from "./Loading";
import axios from "axios";

function Similar({ match }) {
  const [items, setItems] = useState([]);
  const [isDownloading, setIsDownloading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getSimilarItems("movie", match.params.id, setItems, setIsDownloading, setError);
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
