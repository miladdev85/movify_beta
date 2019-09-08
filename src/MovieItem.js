import React from "react";
import { BASE_IMAGE_URL, NO_POSTER_IMG } from "./CONSTANTS";
import { Link } from "react-router-dom";
import { textFormat } from "./ListItemFns";

function MovieItem({ item }) {
  return (
    <>
      <div className="col-5 p-0">
        <Link to={`/movies/details/${item.id}`}>
          <img
            style={{ minHeight: "298px" }}
            className="img-fluid brightness"
            src={item.poster_path ? BASE_IMAGE_URL + item.poster_path : NO_POSTER_IMG}
            alt={item.title}
          />
        </Link>
      </div>
      <div className="col mt-2">
        <div className="d-flex flex-column justify-content-between" style={{ minHeight: "98%" }}>
          <Link className="text-decoration-none text-reset" to={`/movies/details/${item.id}`}>
            <h5>{item.title}</h5>
          </Link>
          <p className="text-muted small">Release date: {item.release_date}</p>
          <p className="small">{textFormat(item.overview, 100)}</p>
          <div className="">
            <div className="border-top mb-1"></div>
            <Link
              to={`/movies/details/${item.id}`}
              className="text-muted small text-decoration-none"
            >
              More info
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieItem;
