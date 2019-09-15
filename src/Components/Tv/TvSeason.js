import React from "react";
import Subtitle from "../Shared/Subtitle";
import TvSeasonImage from "./TvSeasonImage";
import TvSeasonTitle from "./TvSeasonTitle";
import TvSeasonOverview from "./TvSeasonOverview";

const TvSeason = React.memo(({ tvshow }) => {
  const filteredSeason =
    tvshow.seasons.length > 0 && tvshow.seasons.filter(season => season.air_date !== null);
  const lastSeason = filteredSeason[filteredSeason.length - 1];
  return (
    <div className="my-4">
      <Subtitle text="Season Info" />
      <div className="container rounded">
        <div className="row shadow-sm ">
          <div className="col-5 col-lg-2 p-0">
            <TvSeasonImage season={lastSeason} item={tvshow} />
          </div>
          <div className="col-7 col-lg-10 d-flex flex-column justify-content-center">
            <TvSeasonTitle season={lastSeason} item={tvshow} />
            <TvSeasonOverview season={lastSeason} title={tvshow.name} />
          </div>
        </div>
      </div>
    </div>
  );
});

export default TvSeason;
