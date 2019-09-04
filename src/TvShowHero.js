import React from "react";
import { Link } from "react-router-dom";

function TvShowHero({ tvshow }) {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(to right, rgb(0, 0, 0), #020202bf),
    url(https://image.tmdb.org/t/p/original${tvshow.backdrop_path})`,
    backgroundSize: "cover"
  };

  return (
    <div style={backgroundStyle} className="fade__in">
      <div className="container">
        <div className="row py-3">
          <div className="col-12 col-md-4 m-0 p-0">
            <img
              src={
                tvshow.poster_path
                  ? `https://image.tmdb.org/t/p/original${tvshow.poster_path}`
                  : "https://static-assets.noovie.com/images/no-poster.png"
              }
              alt=""
              className="img-fluid p-2 rounded"
            />
          </div>
          <div className="col d-flex flex-column text-white justify-content-center pt-2 pt-lg-0">
            <h2 className="font-weight-bold">
              {tvshow.name}{" "}
              {tvshow.first_air_date && (
                <span className="text-muted small">({tvshow.first_air_date.substring(0, 4)})</span>
              )}
            </h2>
            <ul className="list-inline">
              {tvshow.genres.map(g => (
                <li className="list-inline-item text-muted" key={g.id}>
                  {g.name}
                </li>
              ))}
            </ul>

            <h5 className="font-weight-bold pt-3">Overview</h5>
            <p>{tvshow.overview}</p>
            {tvshow.created_by.length > 0 && (
              <div className="pt-5 mt-5">
                <h5 className="font-weight-bold">Featured Crew</h5>
                <div className="row">
                  {tvshow.created_by.map(c => (
                    <div key={c.id} className="col-4">
                      <Link className="text-reset text-decoration-none" to={`/people/${c.id}`}>
                        <p className="m-0">{c.name}</p>
                      </Link>
                      <p className="text-muted small">Creator</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TvShowHero;
