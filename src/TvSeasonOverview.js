import React from "react";
import { today } from "./Helpers";
import { textFormat } from "./ListItemFns";

function TvSeasonOverview({ season, title }) {
  const seasonOverview = () => {
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
    return textFormat(overviewText, "", 300);
  };

  return <p>{seasonOverview()}</p>;
}

export default TvSeasonOverview;
