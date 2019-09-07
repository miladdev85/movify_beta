import React from "react";
import MediaListItem from "./MediaListItem";

function PeopleMedia({ showMovies, displayItems, person, toggle }) {
  return (
    <div className="col-12 col-md-9 bg-white px-4 detail__box">
      <div className="d-flex justify-content-between">
        <p className="font-weight-bold mt-3">Known for</p>
        {person.topTvCredits.length > 0 && (
          <div className="custom-control custom-switch align-self-center">
            <input
              type="checkbox"
              className="custom-control-input"
              id="mediaSwitch"
              onChange={toggle}
              checked={!showMovies}
            />
            <label
              className="custom-control-label small text-muted p-1 toggle__link"
              htmlFor="mediaSwitch"
            >
              TV Shows
            </label>
          </div>
        )}
      </div>
      {person.id && (
        <MediaListItem
          source={showMovies ? "movie" : "tv"}
          items={displayItems}
          col="col-6 col-lg-4 col-xl-3 pb-2"
          imgHeight="258px"
        />
      )}
    </div>
  );
}

export default PeopleMedia;
