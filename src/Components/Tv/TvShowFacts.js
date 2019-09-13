import React from "react";
import { Link } from "react-router-dom";

function TvShowFacts({ tvshow, keywords }) {
  return (
    <div>
      <h6>Status</h6>
      <p className="text-muted" style={{ fontSize: "0.8rem" }}>
        {tvshow.status}
      </p>
      {tvshow.next_episode_to_air && (
        <>
          <h6>Next Episode Date</h6>
          <p className="text-muted" style={{ fontSize: "0.8rem" }}>
            {tvshow.next_episode_to_air.air_date}
          </p>
        </>
      )}
      {tvshow.last_episode_to_air && (
        <>
          <h6>Last Episode Date</h6>
          <p className="text-muted" style={{ fontSize: "0.8rem" }}>
            {tvshow.last_episode_to_air.air_date}
          </p>
        </>
      )}
      <h6>Type</h6>
      <p className="text-muted" style={{ fontSize: "0.8rem" }}>
        {tvshow.type}
      </p>
      {tvshow.episode_run_time.length > 0 && (
        <>
          <h6>Runtime</h6>
          <p className="text-muted" style={{ fontSize: "0.8rem" }}>
            {`${tvshow.episode_run_time[0]} min`}
          </p>
        </>
      )}
      <h6>Total Seasons</h6>
      <p className="text-muted" style={{ fontSize: "0.8rem" }}>
        {tvshow.number_of_seasons}
      </p>
      <h6>Total Episodes</h6>
      <p className="text-muted" style={{ fontSize: "0.8rem" }}>
        {tvshow.number_of_episodes}
      </p>
      {tvshow.networks.length > 0 && (
        <div className="pb-3">
          <h6>Network</h6>
          <img
            src={`https://image.tmdb.org/t/p/h60${tvshow.networks[0].logo_path}`}
            alt={tvshow.networks[0].name}
            width={50}
          />
        </div>
      )}
      {keywords.length > 0 && (
        <div style={{ width: "180px" }}>
          <h6>Keywords</h6>
          {keywords.map(word => (
            <Link
              to={{ pathname: `/keyword/${word.id}`, search: "?type=tv" }}
              key={word.id}
              className="badge border text-dark p-2 mr-2 mb-2 rounded-sm font-weight-light"
            >
              {word.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default TvShowFacts;
