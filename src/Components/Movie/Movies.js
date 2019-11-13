import React from "react";
import Slider from "../Slider/Slider";
import Subtitle from "../Shared/Subtitle";
import DiscoverMenu from "./DiscoverMenu";
import MoviesLandingPageList from "./MoviesLandingPageList";
import Genres from "./Genres";

// Passing type to Slider component because it uses that props to fetch either movies or tv shows
// Also passing type to MoviesLandingPageList which sends it to its child component. Props drilling...

const Movies = React.memo(
  () => {
    return (
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
    );
  },
  (prevProps, nextProps) => {
    return prevProps !== nextProps;
  }
);

export default Movies;
