import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { BASE_BACKDROP_URL, NO_BACKDROP_IMG } from "../../Utils/CONSTANTS";
import ParsedLink from "../Shared/ParsedLink";

function Slideshow({ items, showIndex, direction, handleSelect, type }) {
  // items array is mapped through and each item will be a Carousel.Item
  // which is passed to Carousel component as children

  const slideShow = items.map(item => (
    <Carousel.Item key={item.id} className="slider__container fade__in">
      <img
        className="slider__image"
        src={item.backdrop_path ? BASE_BACKDROP_URL + item.backdrop_path : NO_BACKDROP_IMG}
        alt={item.name || item.title}
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
  ));

  return (
    <Carousel
      interval={7000}
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
