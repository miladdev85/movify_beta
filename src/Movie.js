import React, { useState, useEffect } from "react";
import MovieHero from "./MovieHero";
import Loading from "./Loading";
import MovieDetail from "./MovieDetail";
import Subtitle from "./Subtitle";
import Trailer from "./Trailer";
import SimilarClass from "./SimilarClass";
import Cast from "./Cast";
import MediaRecs from "./MediaRecs";
import SadFace from "./SadFace";
import { getItem } from "./Prova";

const Movie = ({ match }) => {
  const [item, setItem] = useState({});
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    let didCancel = false;
    window.scrollTo(0, 0);
    if (didCancel === false) {
      getItem("movie", match.params.id, setItem, setIsDownloading, setError);
    }
    return () => (didCancel = true);
  }, [match.params.id]);

  return (
    <div>
      {isDownloading && <Loading />}
      {isDownloading === false && error && <SadFace />}
      {isDownloading === false && item.id && (
        <div className="fade__in">
          <MovieHero item={item} />
          <div className="container">
            <Subtitle text="Top Cast" />
            <Cast from="movie" />
            <Subtitle text="Details" />
            <MovieDetail item={item} />
            <div className="row">
              <div className="col-12 col-md-7">
                <SimilarClass from="movie" />
              </div>
              <div className="col">
                <Subtitle text="Trailer" />
                <Trailer />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <MediaRecs from="movie" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movie;
