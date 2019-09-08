import React from "react";
import {
  BASE_IMAGE_URL,
  NO_POSTER_IMG,
  NO_BACKDROP_IMG,
  NO_CAST_IMG,
  NO_PEOPLE_IMG
} from "./CONSTANTS";

function Image({ source, alt, className, type, style }) {
  let noImage;

  switch (type) {
    case "poster":
      noImage = NO_POSTER_IMG;
      break;
    case "cast":
      noImage = NO_CAST_IMG;
      break;
    case "backdrop":
      noImage = NO_BACKDROP_IMG;
      break;
    case "person":
      noImage = NO_PEOPLE_IMG;
      break;
    default:
      noImage = "";
  }

  return (
    <img
      src={source ? BASE_IMAGE_URL + source : noImage}
      className={`img-fluid ${className}`}
      alt={alt}
      style={{ ...style }}
    />
  );
}

export default Image;
