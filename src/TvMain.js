import React from "react";
import Slider from "./Slider";
import TvNav from "./TvNav";
import TvList from "./TvList";

const TvMain = props => {
  return (
    <div className="fade__in">
      <Slider type="tv" />
      <TvNav />
      <TvList {...props} />
    </div>
  );
};

export default TvMain;
