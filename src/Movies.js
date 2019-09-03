import React, { useState, useRef } from "react";
import { Route } from "react-router-dom";
import Slider from "./Slider";
import Subtitle from "./Subtitle";
import DiscoverMenu from "./DiscoverMenu";
import Trailer from "./Trailer";
import MainList from "./MainList";
import Genres from "./Genres";
import ItemInfo from "./ItemInfo";
import Similar from "./Similar";

const Movies = props => {
  const [item, setItem] = useState({});
  const selectedItem = movieItem => {
    if (item.id !== movieItem.id) {
      setItem(movieItem);
    }
    scrollToCast();
  };

  const scrollToListRef = useRef(null);
  const scrollToList = ref => {
    window.scrollTo({ top: scrollToListRef.current.offsetTop, behavior: "smooth" });
  };

  const scrollToCastRef = useRef(null);
  const scrollToCast = () => {
    window.scrollTo({ top: scrollToCastRef.current.offsetTop, behavior: "smooth" });
  };

  return (
    <div className="fade__in">
      <Slider type="movie" />
      <div className="container">
        <div className="row" ref={scrollToListRef}>
          <div className="col-md-3 py-md-2">
            <div className="row">
              <div className="col-8 offset-2">
                <Subtitle text="Discover" />
                <DiscoverMenu />
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <Genres />
            <MainList />
          </div>
        </div>

        {props.location.search.includes("details=") && (
          <Route
            path={`/:item/:type`}
            render={props => (
              <div ref={scrollToCastRef}>
                <Subtitle text={`Top Casts in ${item.title}`} />
                <ItemInfo {...props} selectedItem={selectedItem} scrollTo={scrollToList} />
                <div className="row">
                  <div className="col-12 col-lg-8">
                    <Subtitle text={`Similar movies`} />
                    <Similar {...props} />
                  </div>
                  <div className="col">
                    <div>
                      <Subtitle text="Trailer" />
                    </div>
                    <Trailer {...props} />
                  </div>
                </div>
              </div>
            )}
          />
        )}
      </div>
    </div>
  );
};

export default Movies;
