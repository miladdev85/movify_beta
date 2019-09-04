import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import queryString from "query-string";

function Slideshow({ type, location, match, items, showIndex, direction, handleSelect }) {
  const getToLink = item => {
    const parsedQuery = queryString.parse(location.search);
    let toLink;
    if (type === "movie") {
      toLink = {
        pathname: match.url,
        search: queryString.stringify({ ...parsedQuery, details: item.id })
      };
    } else {
      toLink = {
        pathname: `/tv/details/${item.id}`
      };
    }
    return toLink;
  };

  const slideShow = items.map(item => {
    return (
      <Carousel.Item key={item.id} className="slider__container">
        <img
          className="slider__image"
          src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
          alt="First slide"
        />
        <Carousel.Caption>
          <Link to={getToLink(item)} className="text-reset text-decoration-none">
            <h3 className="m-0 hvr-wobble-horizontal d-inline-block">{item.title || item.name}</h3>
          </Link>
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
