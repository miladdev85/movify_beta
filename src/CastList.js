import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./List.css";

const CastList = React.memo(props => {
  return (
    <div>
      <div className="row pt-2">
        {props.casts.map(cast => {
          return (
            <div key={cast.credit_id} className="text-center col-4 col-md-3 col-lg-2 mb-sm-1">
              <Link
                to={{ pathname: `/people/${cast.id}`, search: `?from=${props.from}` }}
                className="text-decoration-none brightness"
              >
                <img
                  src={
                    cast.profile_path
                      ? `https://image.tmdb.org/t/p/original${cast.profile_path}`
                      : "https://pecb.com/conferences/wp-content/uploads/2017/10/no-profile-picture.jpg"
                  }
                  alt=""
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

export default withRouter(CastList);
