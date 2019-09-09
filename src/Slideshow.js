import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "./Image";
import ParsedLink from "./ParsedLink";

function Slideshow({ items, showIndex, direction, handleSelect, type }) {
  const slideShow = items.map(item => {
    return (
      <Carousel.Item key={item.id} className="slider__container">
        <Image
          source={item.backdrop_path}
          type="backdrop"
          alt={item.name || item.title}
          className="slider__image"
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
