import React from "react";

function TvSeasonTitle({ season, item }) {
  const displayTitle = () => {
    if (item.in_production === false) {
      return "Last Season";
    } else if (
      item.next_episode_to_air === null ||
      item.next_episode_to_air.air_date > season.air_date
    ) {
      return "Current Season";
    } else if (
      item.status === "Returning Series" &&
      item.next_episode_to_air.air_date === season.air_date
    ) {
      return "Next Season";
    }
  };

  return (
    <>
      <h5 className="font-weight-bold">{displayTitle()}</h5>
      <h6>{season.name}</h6>
      <p className="text-muted small">
        {season.air_date && season.air_date.substring(0, 4)} | {season.episode_count} Ep.
      </p>
    </>
  );
}

export default TvSeasonTitle;
