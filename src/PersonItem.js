import React from "react";
import { Link } from "react-router-dom";

function PersonItem({ item }) {
  return (
    <>
      <div className="col-5 p-0">
        <Link to={`/people/${item.id}`}>
          <img
            style={{ minHeight: "298px" }}
            className="img-fluid cast__effect"
            src={
              item.profile_path
                ? `https://image.tmdb.org/t/p/original${item.profile_path}`
                : "https://sprucegrovelandscaping.com/wp-content/uploads/2016/04/Photo-Not-Available.jpg"
            }
            alt={item.name}
          />
        </Link>
      </div>
      <div className="col mt-2">
        <div className="d-flex flex-column" style={{ minHeight: "98%" }}>
          <Link className="text-reset text-decoration-none" to={`/people/${item.id}`}>
            <h5>{item.name}</h5>
          </Link>
          <p className="text-muted small">Known for: {item.known_for_department}</p>
          <p className="mb-1">Known for:</p>
          <ul className="list-unstyled">
            {item.known_for.map(media => (
              <li key={media.id}>
                <Link to={`/movies/details/${media.id}`} className="text-muted small px-0 pb-1">
                  {media.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto">
            <div className="border-top mb-1"></div>
            <Link to={`/people/${item.id}`} className="text-muted small text-decoration-none">
              More info
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonItem;
