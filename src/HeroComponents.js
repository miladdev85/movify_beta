import React from "react";
import { Link } from "react-router-dom";

export const backgroundStyle = item => {
  return {
    backgroundImage: `linear-gradient(to right, rgb(0, 0, 0), #020202bf),
    url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
    backgroundSize: "cover"
  };
};

export const Image = ({ image }) => {
  return (
    <img
      src={
        image
          ? `https://image.tmdb.org/t/p/original${image}`
          : "https://static-assets.noovie.com/images/no-poster.png"
      }
      alt=""
      className="img-fluid p-2 rounded"
    />
  );
};

export const Title = ({ title, year }) => {
  return (
    <h2 className="font-weight-bold">
      {title} <span className="text-muted small">({year.substring(0, 4)})</span>
    </h2>
  );
};

export const Genres = ({ genres }) => {
  if (genres.length === 0) return null;
  return (
    <ul className="list-inline">
      {genres.map(g => (
        <li className="list-inline-item text-muted" key={g.id}>
          {g.name}
        </li>
      ))}
    </ul>
  );
};

export const Overview = ({ text }) => {
  return (
    <>
      <h5 className="font-weight-bold pt-3">Overview</h5>
      <p>{text}</p>
    </>
  );
};

export const CreatedBy = ({ crew }) => {
  if (crew.length === 0) return null;
  return (
    <div className="pt-5 mt-5">
      <h5 className="font-weight-bold">Featured Crew</h5>
      <div className="row">
        {crew.map(c => (
          <div key={c.id} className="col-4">
            <Link className="text-reset text-decoration-none" to={`/people/${c.id}`}>
              <p className="m-0">{c.name}</p>
            </Link>
            <p className="text-muted small">Creator</p>
          </div>
        ))}
      </div>
    </div>
  );
};
