import React from "react";
import { Link } from "react-router-dom";

function PeopleMedia({ showMovies, displayItems, person, toggle }) {
  return (
    <div className="col-9 bg-white px-4 detail__box">
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
      <div className="row">
        {person.id &&
          displayItems.map(item => {
            return (
              <Link
                key={item.credit_id}
                className="col-6 col-lg-3 text-decoration-none text-reset poster__link2"
                to={showMovies ? `/movies/popular/?details=${item.id}` : `/tv/details/${item.id}`}
              >
                <img
                  src={
                    item.poster_path
                      ? `https://image.tmdb.org/t/p/original${item.poster_path}`
                      : "https://static-assets.noovie.com/images/no-poster.png"
                  }
                  alt={`${item.title} poster`}
                  className={`img-fluid poster__img2 rounded`}
                />
                <p className="py-1 font-weight-light">{item.title || item.name}</p>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default PeopleMedia;
