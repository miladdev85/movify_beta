import React from "react";
import { Link } from "react-router-dom";
import { textFormat } from "./ListItemFns";

function TvItem({ item }) {
  return (
    <>
      <div className="col-5 p-0">
        <Link to={`/tv/details/${item.id}`}>
          <img
            style={{ minHeight: "298px" }}
            className="img-fluid brightness"
            src={
              item.poster_path
                ? `https://image.tmdb.org/t/p/original${item.poster_path}`
                : "https://static-assets.noovie.com/images/no-poster.png"
            }
            alt={item.name}
          />
        </Link>
      </div>
      <div className="col mt-2">
        <div className="d-flex flex-column" style={{ minHeight: "98%" }}>
          <Link className="text-decoration-none text-reset" to={`/tv/details/${item.id}`}>
            <h5>{item.name}</h5>
          </Link>
          <p className="text-muted small">First air date: {item.first_air_date}</p>
          <p className="small">{textFormat(item.overview, item.name, 300)}</p>
          <div className="mt-auto">
            <div className="border-top mb-1"></div>
            <Link to={`/tv/details/${item.id}`} className="text-muted small text-decoration-none">
              More info
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default TvItem;
