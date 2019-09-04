import React from "react";
import * as Hero from "./HeroComponents";
import "./MovieHero.css";

const MovieHero = React.memo(({ item }) => {
  return (
    <div style={Hero.backgroundStyle(item)} className="fade__in">
      <div className="container">
        <div className="row py-3">
          <div className="col-12 col-md-4 m-0 p-0">
            <Hero.Image image={item.poster_path} />
          </div>
          <div className="col d-flex flex-column text-white justify-content-center pt-2 pt-lg-0">
            <Hero.Title title={item.title} year={item.release_date} />
            <Hero.Genres genres={item.genres} />
            <Hero.Overview text={item.overview} />
            {item.created_by && <Hero.CreatedBy crew={item.created_by} />}
          </div>
        </div>
      </div>
    </div>
  );
});

export default MovieHero;
