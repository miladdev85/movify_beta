import React from "react";
import { Link } from "react-router-dom";
import { textFormat } from "./ListItemFns";
import "./KeywordItem.css";

function KeywordItem({ items, type }) {
  const displayItems = type => {
    let linkType = type === "movie" ? "/movies/popular?details=" : "/tv/details/";
    return items.map(item => (
      <div key={item.id} className="row mb-4 fade__in">
        <div className="col-10 offset-1 bg-light keyword__link">
          <Link to={`${linkType}${item.id}`} className="text-decoration-none text-reset ">
            <div className="row shadow-sm">
              <div className="col-4 col-lg-1 p-0">
                <img
                  src={
                    item.poster_path
                      ? `https://image.tmdb.org/t/p/original${item.poster_path}`
                      : "https://static-assets.noovie.com/images/no-poster.png"
                  }
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="col col-lg-11 d-flex flex-column justify-content-around">
                <h6 className="font-weight-bold">{item.name || item.title}</h6>
                <p className="text-secondary">
                  {textFormat(item.overview, item.name || item.title)}
                </p>
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
