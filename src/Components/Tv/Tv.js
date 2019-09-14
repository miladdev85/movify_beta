import React from "react";
import Slider from "../Slider/Slider";
import TvNav from "./TvNav";
import MoreMediaFetcher from "../Shared/MoreMediaFetcher";
import AnimatedDiv from "../Shared/AnimatedDiv";
import { tvHelper } from "../../Utils/Network";

const Tv = ({ match, type }) => {
  return (
    <AnimatedDiv>
      <div className="fade__in">
        <Slider type="tv" />
        <TvNav />
        <div className="container mt-4">
          <MoreMediaFetcher
            fetchUrl={tvHelper.sectionTvUrl(match.params.section)}
            className="col-6 col-md-4 col-lg-3 col-xl-2 pb-2"
            imgClass="tv_main"
            type={type}
          />
        </div>
      </div>
    </AnimatedDiv>
  );
};

export default Tv;
