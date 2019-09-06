import React, { useState, useEffect } from "react";
import MediaHero from "./MediaHero";
import Loading from "./Loading";
import MovieDetail from "./MovieDetail";
import Subtitle from "./Subtitle";
import Trailer from "./Trailer";
import MediaRecs from "./MediaRecs";
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

  const source = match.path.includes("/movies/") ? "movie" : "tv";

  return (
    <div>
      {isDownloading && <Loading />}
      {isDownloading === false && error && <SadFace />}
      {isDownloading === false && item.id && (
        <div className="fade__in">
          <MediaHero
            backdrop={item.backdrop_path}
            image={item.poster_path}
            title={item.title}
            year={item.release_date}
            genres={item.genres}
            text={item.overview}
          />
          <div className="container">
            <Subtitle text="Top Cast" />
            <Cast />
            <Subtitle text="Details" />
            <MovieDetail item={item} />
            <div className="row">
              <div className="col-12 col-xl-7">
                <Subtitle text="Recommended Movies" />
                <MediaRecs />
              </div>
              <div className="col">
                <Subtitle text="Trailer" />
                <Trailer />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Subtitle text="Similar Movies" />
                <MoreMediaFetcher
                  fetchUrl={mediaHelper.mediaSimilarUrl(source, match.params.id)}
                  col="col-6 col-md-4 col-lg-3 col-xl-2 pb-2"
                  imgHeight="235px"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movie;
