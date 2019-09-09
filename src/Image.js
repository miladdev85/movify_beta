import React, { useState } from "react";
import {
  BASE_IMAGE_URL,
  NO_POSTER_IMG,
  NO_BACKDROP_IMG,
  NO_CAST_IMG,
  NO_PEOPLE_IMG
} from "./CONSTANTS";
import NO_POP_IMG from "./pop_img_no.png";
import "./Link.css";

function Image({ source, alt, className, type, style, children }) {
  const [animate, setAnimate] = useState(false);
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
    case "popular":
      noImage = NO_POP_IMG;
      break;
    default:
      noImage = "";
  }

  return (
    <div className={`${animate ? "fade__in" : "invisible"}`}>
      <img
        src={source ? BASE_IMAGE_URL + source : noImage}
        className={`img-fluid ${className}`}
        alt={alt}
        style={{ ...style }}
        onLoad={() => setAnimate(true)}
      />
      {children}
    </div>
  );
}

export default Image;
