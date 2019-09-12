import React from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import { textFormat } from "./SharedFns";

function TvItem({ item }) {
  return (
    <>
      <div className="col-5 p-0">
        <Link to={`/tv/details/${item.id}`}>
          <Image
            source={item.poster_path}
            type="poster"
            alt={item.name}
            className="brightness search__image"
          />
        </Link>
      </div>
      <div className="col mt-2">
        <div className="d-flex flex-column justify-content-between" style={{ minHeight: "98%" }}>
          <Link className="text-decoration-none text-reset" to={`/tv/details/${item.id}`}>
            <h5>{item.name}</h5>
          </Link>
          <p className="text-muted small">First air date: {item.first_air_date}</p>
          <p className="small">{textFormat(item.overview, 100)}</p>
          <div className="">
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
