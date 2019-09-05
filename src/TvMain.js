import React from "react";
import Slider from "./Slider";
import TvNav from "./TvNav";
// import TvList from "./TvList";
import GetMore from "./GetMore";
import { mediaHelper } from "./Helpers";

const TvMain = ({ match }) => {
  return (
    <div className="fade__in">
      <Slider type="tv" />
      <TvNav />
      {/* <TvList /> */}
      <GetMore
        fetchUrl={mediaHelper.sectionTvUrlTest(match.params.section)}
        col="col-6 col-md-4 col-lg-3 col-xl-2 p-2"
        imgHeight="278px"
      />
    </div>
  );
};

export default TvMain;
