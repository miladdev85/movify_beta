import React from "react";
import { Link } from "react-router-dom";
import "./List.css";

const CastList = React.memo(({ casts, from }) => {
  return (
    <div>
      <div className="row pt-2">
        {casts.map(cast => {
          return (
            <div key={cast.credit_id} className="text-center col-4 col-md-3 col-lg-2 mb-sm-1">
              <Link
                to={{ pathname: `/people/${cast.id}`, search: `?from=${from}` }}
                className="text-decoration-none brightness"
              >
                <img
                  src={
                    cast.profile_path
                      ? `https://image.tmdb.org/t/p/original${cast.profile_path}`
                      : "https://pecb.com/conferences/wp-content/uploads/2017/10/no-profile-picture.jpg"
                  }
                  alt={`${cast.name} poster`}
                  className="img-fluid rounded-circle cast__image"
                />
                <p className="item__title">{cast.name}</p>
                <p className="item__subtitle">{cast.character}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default CastList;
