import React from "react";
import Slider from "../Slider/Slider";
import TvNav from "./TvNav";
import MoreMediaFetcher from "../Shared/MoreMediaFetcher";
import { tvHelper } from "../../Utils/Network";

const Tv = ({ match, type }) => {
  return (
    <div className="fade__in">
      <Slider type="tv" />
      <TvNav />
      <div className="container mt-4">
        {/* Using a helper function to determine which URL to send in as props
                MoreMediaFetcher is a shared component and requires URL as props */}
        <MoreMediaFetcher
          fetchUrl={tvHelper.sectionTvUrl(match.params.section)}
          className="col-6 col-md-4 col-lg-3 col-xl-2 pb-2"
          imgClass="tv_main"
          type={type}
        />
      </div>
    </div>
  );
};

export default Tv;
