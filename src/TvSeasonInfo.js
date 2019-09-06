import React from "react";
import { today } from "./Helpers";

function TvSeasonInfo({ tvshow }) {
  const filteredSeason = tvshow.seasons.filter(season => season.air_date !== null);
  const lastSeason = filteredSeason[filteredSeason.length - 1];

  const seasonOverview = (season, title) => {
    let overviewText;
    if (!season.overview) {
      if (today >= season.air_date) {
        overviewText = `${season.name} of ${title} premiered on ${season.air_date}.`;
      } else {
        overviewText = `${season.name} of ${title} is set to premiere on ${season.air_date}.`;
      }
    } else {
      overviewText = season.overview;
    }
    return overviewText;
  };

  const displaySeasonCard = (season, item) => {
    return (
      <div className="container rounded">
        <div className="row shadow-sm">
          <div className="col-5 col-lg-2 p-0">
            <img
              src={
                item.poster_path && season.poster_path
                  ? `https://image.tmdb.org/t/p/original${season.poster_path}`
                  : item.poster_path
                  ? `https://image.tmdb.org/t/p/original${item.poster_path}`
                  : "https://static-assets.noovie.com/images/no-poster.png"
              }
              alt={item.name}
              className="img-fluid"
            />
          </div>
          <div className="col-7 col-lg-10 d-flex flex-column justify-content-center">
            <h5 className="font-weight-bold">{displayTitle(tvshow, lastSeason)}</h5>
            <h6>{season.name}</h6>
            <p className="text-muted small">
              {season.air_date && season.air_date.substring(0, 4)} | {season.episode_count} Ep.
            </p>
            <p>{seasonOverview(season, item.name)}</p>
          </div>
        </div>
      </div>
    );
  };

  const displayTitle = (item, season) => {
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

  return <div className="my-4">{lastSeason && displaySeasonCard(lastSeason, tvshow)}</div>;
}

export default TvSeasonInfo;
