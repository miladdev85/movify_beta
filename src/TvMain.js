import React from "react";
import Slider from "./Slider";
import TvNav from "./TvNav";
import MoreMediaFetcher from "./MoreMediaFetcher";
import { mediaHelper } from "./Helpers";

const TvMain = ({ match, source }) => {
  return (
    <div className="fade__in">
      <Slider source="tv" />
      <TvNav />
      <div className="container mt-4">
        <MoreMediaFetcher
          fetchUrl={mediaHelper.sectionTvUrlTest(match.params.section)}
          col="col-6 col-md-4 col-lg-3 col-xl-2 p-2"
          imgHeight="278px"
          source={source}
        />
      </div>
    </div>
  );
};

export default TvMain;
