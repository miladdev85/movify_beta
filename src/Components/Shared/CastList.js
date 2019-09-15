import React from "react";
import ParsedLink from "./ParsedLink";
import Image from "./Image";

const CastList = ({ casts, source }) => {
  return (
    <div className="row pt-2">
      {casts.map(cast => (
        <div key={cast.credit_id} className="text-center col-4 col-md-3 col-lg-2 mb-sm-1">
          <ParsedLink
            type="cast"
            source={source}
            id={cast.id}
            className="text-decoration-none brightness"
          >
            <Image
              source={cast.profile_path}
              type="cast"
              alt={cast.name}
              className="rounded-circle cast__image"
            >
              <p className="item__title">{cast.name}</p>
              <p className="item__subtitle">{cast.character}</p>
            </Image>
          </ParsedLink>
        </div>
      ))}
    </div>
  );
};

export default CastList;
