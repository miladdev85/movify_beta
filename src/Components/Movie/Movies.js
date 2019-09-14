import React from "react";
import Slider from "../Slider/Slider";
import Subtitle from "../Shared/Subtitle";
import DiscoverMenu from "./DiscoverMenu";
import MoviesLandingPageList from "./MoviesLandingPageList";
import Genres from "./Genres";
import AnimatedDiv from "../Shared/AnimatedDiv";

const Movies = () => {
  return (
    <AnimatedDiv>
      <div className="fade__in">
        <Slider type="movie" />
        <div className="container">
          <div className="row">
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
              <MoviesLandingPageList type="movie" />
            </div>
          </div>
        </div>
      </div>
    </AnimatedDiv>
  );
};

export default Movies;
