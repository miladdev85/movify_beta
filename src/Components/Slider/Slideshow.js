import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { BASE_BACKDROP_URL, NO_BACKDROP_IMG } from "../../Utils/CONSTANTS";
import ParsedLink from "../Shared/ParsedLink";

function Slideshow({ items, showIndex, direction, handleSelect, type }) {
  const [animate, setAnimate] = useState(false);
  const slideShow = items.map(item => {
    return (
      <Carousel.Item key={item.id} className="slider__container fade__in">
        <img
          className={`${animate ? "fade__in slider__image" : "invisible"}`}
          src={item.backdrop_path ? BASE_BACKDROP_URL + item.backdrop_path : NO_BACKDROP_IMG}
          alt={item.name || item.title}
          onLoad={() => setAnimate(true)}
        />
        <Carousel.Caption>
          <ParsedLink id={item.id} type={type} className="text-reset text-decoration-none">
            <h3 className="m-0 hvr-wobble-horizontal d-inline-block">{item.title || item.name}</h3>
          </ParsedLink>
          <div>
            <span className="small">
              {item.genres.map(genre => (
                <React.Fragment key={genre.id}>
                  {genre.name}
                  <span className="d-inline-block slider__genre" />
                </React.Fragment>
              ))}
            </span>
          </div>
          <p className="m-0">Rating: {item.vote_average}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });

  return (
    <Carousel
      interval={9000}
      activeIndex={showIndex}
      direction={direction}
      onSelect={handleSelect}
      className="mb-4"
    >
      {slideShow}
    </Carousel>
  );
}

export default Slideshow;
