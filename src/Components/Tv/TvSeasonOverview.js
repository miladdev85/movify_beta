import React from "react";
import { TODAY } from "../../Utils/CONSTANTS";
import { textFormat } from "../../Utils/SharedFns";

// Logic for overview text based on todays date and information received regardin show
// Use textFormat helper function to trim down text

function TvSeasonOverview({ season, title }) {
  const seasonOverview = () => {
    let overviewText;
    if (!season.overview) {
      if (TODAY >= season.air_date) {
        overviewText = `${season.name} of ${title} premiered on ${season.air_date}.`;
      } else {
        overviewText = `${season.name} of ${title} is set to premiere on ${season.air_date}.`;
      }
    } else {
      overviewText = season.overview;
    }
    return textFormat(overviewText, 300);
  };

  return <p>{seasonOverview()}</p>;
}

export default TvSeasonOverview;
