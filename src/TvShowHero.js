import React from "react";
import { Link } from "react-router-dom";
import MediaHero from "./MediaHero";

function TvShowHero({ tvshow }) {
  console.log(tvshow);
  return (
    <MediaHero
      backdrop={tvshow.backdrop_path}
      image={tvshow.poster_path}
      title={tvshow.name}
      year={tvshow.first_air_date}
      genres={tvshow.genres}
      text={tvshow.overview}
      createdBy={tvshow.created_by}
    >
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
    </MediaHero>
  );
}

export default TvShowHero;
