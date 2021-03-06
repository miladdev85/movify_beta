import React from "react";
import MediaListItem from "../Shared/MediaListItem";

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
              style={{ cursor: "pointer" }}
              className={`custom-control-label small ${
                showMovies ? "text-muted" : "font-weight-normal"
              } p-1`}
              htmlFor="mediaSwitch"
            >
              TV Shows
            </label>
          </div>
        )}
      </div>
      {person.id && (
        <MediaListItem
          type="people"
          source={showMovies ? "movies" : "tv"}
          items={displayItems}
          className="col-6 col-lg-4 col-xl-3 pb-2"
          imgClass="poster__img"
        />
      )}
    </div>
  );
}

export default PeopleMedia;
