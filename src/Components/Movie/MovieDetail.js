import React from "react";
import Image from "../Shared/Image";
import { Link, withRouter } from "react-router-dom";
import queryString from "query-string";

function MovieDetail({ item, location }) {
  const queryObj = queryString.parse(location.search);
  return (
    <div className="row detail__container mt-4">
      <div className="col-lg-7 mb-3">
        <Image source={item.backdrop_path} type="backdrop" alt={item.title} className="rounded" />
      </div>
      <div className="col d-flex flex-column text-muted">
        <h4>
          {item.title}
          {item.release_date && (
            <small className="small"> ({item.release_date.substring(0, 4)})</small>
          )}
        </h4>
        <div className="d-flex flex-wrap mt-1 mb-3">
          <span
            className={`mr-auto badge badge-pill badge-${
              item.vote_average < 6.3 ? "secondary" : "success"
            } p-2 rating`}
          >
            Rating: {item.vote_average}
          </span>
          {item.genres.length > 0 &&
            item.genres.map(genre => (
              <Link
                key={genre.id}
                to={{
                  pathname: `/movies/${queryObj.from || "popular"}`,
                  search: `?genre=${genre.id}`
                }}
                className="badge badge-pill badge-light genre__badge p-2 mx-1"
              >
                {genre.name}
              </Link>
            ))}
        </div>

        <h5 className="mt-2">Overview</h5>
        <span className="item__text pt-3">{item.overview}</span>
      </div>
    </div>
  );
}

export default withRouter(MovieDetail);
