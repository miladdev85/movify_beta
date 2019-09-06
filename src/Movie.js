import React, { useState, useEffect } from "react";
import MovieHero from "./MovieHero";
import Loading from "./Loading";
import MovieDetail from "./MovieDetail";
import Subtitle from "./Subtitle";
import Trailer from "./Trailer";
import Similar from "./Similar";
import Cast from "./Cast";
import MoreMediaFetcher from "./MoreMediaFetcher";
import { mediaHelper } from "./Helpers";
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
              <div className="col-12 col-xl-7">
                <Similar from="movie" />
              </div>
              <div className="col">
                <Subtitle text="Trailer" />
                <Trailer />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Subtitle text={"Recommendations"} />
                <MoreMediaFetcher
                  fetchUrl={mediaHelper.mediaRecommendationsUrl("movie", match.params.id)}
                  col="col-6 col-md-4 col-lg-3 col-xl-2 pb-2"
                  imgHeight="235px"
                />
                {/* <MediaRecs from="movie" /> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movie;
