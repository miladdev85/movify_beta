import React, { useState, useEffect } from "react";
import Cast from "./Cast";
import TvShowFacts from "./TvShowFacts";
import Loading from "./Loading";
import TvShowHero from "./TvShowHero";
import Subtitle from "./Subtitle";
import TvSeason from "./TvSeason";
import MediaRecs from "./MediaRecs";
import MoreMediaFetcher from "./MoreMediaFetcher";
import { mediaHelper } from "./Network";
import axios from "axios";

function TvShow({ match, type }) {
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [keywords, setKeywords] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (parseInt(match.params.id, 10) !== item.id) {
      setIsLoading(true);
      const getTvShow = async () => {
        try {
          const showResponse = await axios.get(mediaHelper.mediaUrl(type, match.params.id));
          const keywordResponse = await axios.get(mediaHelper.keywordsUrl(type, match.params.id));
          setItem(showResponse.data);
          setKeywords(keywordResponse.data.results);
          setIsLoading(false);
        } catch (err) {
          setIsLoading(false);
        }
      };
      getTvShow();
    }
  }, [match.params.id, item.id, type]);

  if (!item.id && !isLoading) return null;

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="fade__in">
            <TvShowHero tvshow={item} />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-10">
                <Cast type={type} />
                <TvSeason tvshow={item} />
                <MediaRecs type={type} className="container__tv" />
                <Subtitle text="Similar Shows" />
                <MoreMediaFetcher
                  fetchUrl={mediaHelper.mediaSimilarUrl(type, match.params.id)}
                  type={type}
                  className="col-6 col-md-4 col-lg-2 pb-3"
                  imgClass="tv_similar"
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
