import React, { useState, useEffect } from "react";
import MediaHero from "./MediaHero";
import Loading from "./Loading";
import MovieDetail from "./MovieDetail";
import Subtitle from "./Subtitle";
import Trailer from "./Trailer";
import MediaRecs from "./MediaRecs";
import Cast from "./Cast";
import MoreMediaFetcher from "./MoreMediaFetcher";
import { mediaHelper } from "./Network";
import SadFace from "./SadFace";
import axios from "axios";

const Movie = ({ match, type }) => {
  const [item, setItem] = useState({});
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let didCancel = false;
    window.scrollTo(0, 0);

    const getItem = async () => {
      setIsDownloading(true);
      try {
        const response = await axios.get(mediaHelper.mediaUrl(type, match.params.id));
        setItem(response.data);
      } catch (error) {
        setError(error);
      }
      setIsDownloading(false);
    };
    if (didCancel === false) {
      getItem();
    }
    return () => (didCancel = true);
  }, [match.params.id, type]);

  return (
    <div>
      {isDownloading && <Loading />}
      {!isDownloading && error && <SadFace />}
      {!isDownloading && item.id && (
        <div>
          <MediaHero
            backdrop={item.backdrop_path}
            image={item.poster_path}
            title={item.title}
            year={item.release_date}
            genres={item.genres}
            text={item.overview}
          />
          <div className="container">
            <Cast type="movie" />
            <Subtitle text="Details" />
            <MovieDetail item={item} />
            <div className="row">
              <div className="col-12 col-xl-7">
                <MediaRecs type="movie" className="container__movie" />
              </div>
              <div className="col">
                <Trailer />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Subtitle text="Similar Movies" />
                <MoreMediaFetcher
                  fetchUrl={mediaHelper.mediaSimilarUrl(type, match.params.id)}
                  type={type}
                  className="col-6 col-md-4 col-lg-3 col-xl-2 pb-2"
                  imgClass="movie_similar"
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
