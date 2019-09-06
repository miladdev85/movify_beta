import React, { useState, useEffect } from "react";
import Cast from "./Cast";
import TvShowFacts from "./TvShowFacts";
import Loading from "./Loading";
import TvShowHero from "./TvShowHero";
import Subtitle from "./Subtitle";
import TvSeasonInfo from "./TvSeasonInfo";
import MediaRecs from "./MediaRecs";
import MoreMediaFetcher from "./MoreMediaFetcher";
import { tvHelper, mediaHelper } from "./Helpers";
import axios from "axios";
import "./TvShow.css";

function TvShow({ match }) {
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [keywords, setKeywords] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (parseInt(match.params.id, 10) !== item.id) {
      setIsLoading(true);
      const getTvShow = async () => {
        try {
          const showResponse = await axios.get(tvHelper.tvShowUrl(match.params.id));

          const keywordResponse = await axios.get(tvHelper.getTvKeywords(match.params.id));
          setItem(showResponse.data);

          setKeywords(keywordResponse.data.results);

          setIsLoading(false);
        } catch (err) {
          setIsLoading(false);
        }
      };
      getTvShow();
    }
  }, [match.params.id, item.id]);

  const source = match.path.includes("/movies/") ? "movie" : "tv";

  if (!item.id && isLoading === false) return null;

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div>
            <TvShowHero tvshow={item} />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-10">
                <Subtitle text="Series Cast" />
                <Cast />
                <Subtitle text="Season Info" />
                <TvSeasonInfo tvshow={item} />
                <Subtitle text="Recommended Shows" />
                <MediaRecs />
                <Subtitle text="Similar Shows" />
                <MoreMediaFetcher
                  fetchUrl={mediaHelper.mediaSimilarUrl(source, match.params.id)}
                  col="col-6 col-md-4 col-lg-3 col-xl-2 pb-2"
                  imgHeight="200px"
                />
              </div>

              <div className="d-none d-md-block col-2 pl-4">
                <Subtitle text="Facts" />
                <TvShowFacts tvshow={item} keywords={keywords} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default TvShow;
