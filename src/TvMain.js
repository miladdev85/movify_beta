import React from "react";
import Slider from "./Slider";
import TvNav from "./TvNav";
import MoreMediaFetcher from "./MoreMediaFetcher";
import { mediaHelper } from "./Helpers";

const TvMain = ({ match, type }) => {
  return (
    <div className="fade__in">
      <Slider type="tv" />
      <TvNav />
      <div className="container mt-4">
        <MoreMediaFetcher
          fetchUrl={mediaHelper.sectionTvUrl(match.params.section)}
          col="col-6 col-md-4 col-lg-3 col-xl-2 p-2"
          imgHeight="278px"
          type={type}
        />
      </div>
    </div>
  );
};

export default TvMain;
