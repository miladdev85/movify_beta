import React from "react";
import { Link } from "react-router-dom";
import Image from "../Shared/Image";
import { textFormat } from "../../Utils/SharedFns";

const KeywordItem = React.memo(
  ({ items, type }) => {
    const renderKeywords = items.map(item => (
      <div key={item.id} className="row mb-4">
        <div className="col-10 offset-1 bg-light keyword__link">
          <Link
            to={`${type === "tv" ? `/tv/details/${item.id}` : `/movies/details/${item.id}`}`}
            className="text-decoration-none text-reset"
          >
            <div className="row shadow-sm">
              <div className="col-4 col-md-3 col-lg-2 p-0">
                <Image source={item.poster_path} type="poster" alt={item.name || item.title} />
              </div>
              <div className="col-8 col-md-9 col-lg-10 d-flex flex-column justify-content-around">
                <h6 className="font-weight-bold">{item.name || item.title}</h6>
                <p className="text-secondary">{textFormat(item.overview, 300)}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    ));

    return <div className="container">{renderKeywords}</div>;
  },
  (prevProps, nextProps) => {
    return prevProps.type !== nextProps.type;
  }
);

export default KeywordItem;
