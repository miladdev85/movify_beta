import React from "react";
import { textFormat } from "./ListItemFns";
import "./MediaHero.css";

function MediaHero({ backdrop, image, title, year, genres = [], text, children }) {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(to right, rgb(0, 0, 0), #020202bf),
        url(https://image.tmdb.org/t/p/original${backdrop})`,
    backgroundSize: "cover"
  };

  return (
    <div style={backgroundStyle}>
      <div className="container">
        <div className="row py-3">
          <div className="col-12 col-md-4 m-0 p-0">
            <img
              src={
                image
                  ? `https://image.tmdb.org/t/p/original${image}`
                  : "https://static-assets.noovie.com/images/no-poster.png"
              }
              alt={`${title} poster`}
              className="img-fluid p-2 rounded"
            />
          </div>
          <div className="col d-flex flex-column text-white justify-content-center pt-2 pt-lg-0">
            <h2 className="font-weight-bold">
              {title} {year && <span className="text-muted small">({year.substring(0, 4)})</span>}
            </h2>
            <ul className="list-inline">
              {genres.map(g => (
                <li className="list-inline-item text-muted" key={g.id}>
                  {g.name}
                </li>
              ))}
            </ul>
            <h5 className="font-weight-bold pt-3">Overview</h5>
            <p>{textFormat(text, 1200)}</p>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediaHero;
