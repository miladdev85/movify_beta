import React, { useState, useEffect } from "react";
import CastList from "./CastList";
import TvShowInfo from "./TvShowInfo";
import Loading from "./Loading";
import TvShowDetail from "./TvShowDetail";
import Subtitle from "./Subtitle";
import TvSeasonInfo from "./TvSeasonInfo";
import TvRecs from "./TvRecs";
import { tvHelper } from "./Helpers";
import axios from "axios";
import "./TvShow.css";

function TvShow({ match }) {
  const [item, setItem] = useState({});
  const [cast, setCast] = useState([]);
  const [recs, setRecs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (parseInt(match.params.id, 10) !== item.id) {
      setIsLoading(true);
      const getTvShow = async () => {
        try {
          const showResponse = await axios.get(tvHelper.tvShowUrl(match.params.id));
          let castResponse = await axios.get(tvHelper.tvShowCast(match.params.id));
          const keywordResponse = await axios.get(tvHelper.getTvKeywords(match.params.id));
          const recsResponse = await axios.get(tvHelper.getTvRecommendations(match.params.id));
          castResponse.data.cast.sort((a, b) => a.order - b.order);
          castResponse = castResponse.data.cast.splice(0, 6);
          setItem(showResponse.data);
          setCast(castResponse);
          setKeywords(keywordResponse.data.results);
          setRecs(recsResponse.data.results);
          setIsLoading(false);
        } catch (err) {
          setIsLoading(false);
        }
      };
      getTvShow();
    }
  }, [match.params.id, item.id]);

  if (!item.id && isLoading === false) return null;

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div>
            <TvShowDetail tvshow={item} />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-10">
                <Subtitle text={"Series Cast"} />
                <CastList casts={cast} from="tv" />
                <Subtitle text={"Season Info"} />
                <TvSeasonInfo tvshow={item} />
                {recs.length > 0 && (
                  <div>
                    <Subtitle text={"Recommendations"} />
                    <TvRecs recs={recs} />
                  </div>
                )}
              </div>

              <div className="d-none d-md-block col-2 pl-4">
                <Subtitle text={"Facts"} />
                <TvShowInfo tvshow={item} keywords={keywords} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default TvShow;
