import React from "react";
import Slider from "./Slider";
import Subtitle from "./Subtitle";
import DiscoverMenu from "./DiscoverMenu";
import MoviesLandingPageList from "./MoviesLandingPageList";
import Genres from "./Genres";

const MoviesLandingPage = () => {
  return (
    <div className="fade__in">
      <Slider type="movie" />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3 py-md-2">
            <div className="col">
              <Subtitle text="Discover" />
              <div className="text-center">
                <DiscoverMenu />
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <Genres />
            <MoviesLandingPageList source="movie" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesLandingPage;
