import React, { useState } from "react";
import {
  BASE_POSTER_URL,
  BASE_BACKDROP_URL,
  BASE_PERSON_URL,
  BASE_CAST_URL,
  NO_POSTER_IMG,
  NO_BACKDROP_IMG,
  NO_CAST_IMG,
  NO_PEOPLE_IMG
} from "../../Utils/CONSTANTS";
import NO_POP_IMG from "../../Assets/Popular_People_Image.png";

function Image({ source, alt, className, type, style, children }) {
  const [animate, setAnimate] = useState(false);
  let noImage;
  let url;

  switch (type) {
    case "poster":
      url = BASE_POSTER_URL;
      noImage = NO_POSTER_IMG;
      break;
    case "cast":
      url = BASE_CAST_URL;
      noImage = NO_CAST_IMG;
      break;
    case "backdrop":
      url = BASE_BACKDROP_URL;
      noImage = NO_BACKDROP_IMG;
      break;
    case "person":
      url = BASE_PERSON_URL;
      noImage = NO_PEOPLE_IMG;
      break;
    case "popular":
      url = BASE_PERSON_URL;
      noImage = NO_POP_IMG;
      break;
    default:
      noImage = "";
  }

  return (
    <div className={`${animate ? "fade__in" : "invisible"}`}>
      <img
        src={source ? url + source : noImage}
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
