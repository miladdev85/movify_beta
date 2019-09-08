import React from "react";
import { Link } from "react-router-dom";
import { textFormat } from "./ListItemFns";
import "./KeywordItem.css";

function KeywordItem({ items, type }) {
  const displayItems = type => {
    let linkType = type === "movie" ? "/movies/details/" : "/tv/details/";
    return items.map(item => (
      <div key={item.id} className="row mb-4 fade__in">
        <div className="col-10 offset-1 bg-light keyword__link">
          <Link to={`${linkType}${item.id}`} className="text-decoration-none text-reset ">
            <div className="row shadow-sm">
              <div className="col-4 col-md-3 col-lg-2 p-0">
                <img
                  src={
                    item.poster_path
                      ? `https://image.tmdb.org/t/p/original${item.poster_path}`
                      : "https://static-assets.noovie.com/images/no-poster.png"
                  }
                  alt={`${item.name || item.title} poster`}
                  className="img-fluid"
                />
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
  };

  return <div className="container">{displayItems(type)}</div>;
}

export default KeywordItem;
