import React, { useState, useEffect, useRef, useCallback } from "react";
import { withRouter } from "react-router-dom";
import { genreHelper } from "./Helpers";
import MediaListSlider from "./MediaListSlider";
import SadFace from "./SadFace";
import queryString from "query-string";
import axios from "axios";

const MoviesLandingPageList = props => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [spreadItems, setSpreadItems] = useState(false);
  const parsedQuery = queryString.parse(props.location.search);
  const prevGenreRef = useRef();
  const prevSectionRef = useRef();

  useEffect(() => {
    prevGenreRef.current = parsedQuery.genre;
    prevSectionRef.current = props.match.params.section;
  });

  const prevGenre = prevGenreRef.current;
  const prevSection = prevSectionRef.current;

  const addPage = useCallback(() => {
    setPage(p => p + 1);
  }, [setPage]);

  const getMovies = async () => {
    setIsDownloading(true);
    let url;
    switch (props.match.params.section) {
      case "new-releases":
        url = genreHelper.newReleasesUrl(page, parsedQuery.genre);
        break;
      case "swedish":
        url = genreHelper.swedishUrl(page, parsedQuery.genre);
        break;
      case "coming-soon":
        url = genreHelper.comingSoonUrl(page, parsedQuery.genre);
        break;
      case "popular":
        url = genreHelper.popularUrl(page, parsedQuery.genre);
        break;
      case "top-rated":
        url = genreHelper.topRatedUrl(page, parsedQuery.genre);
        break;
      case "old-movies":
        url = genreHelper.oldiesUrl(page, parsedQuery.genre);
        break;
      default:
        url = genreHelper.popularUrl(parsedQuery.genre);
    }

    let response = await axios.get(url);
    if (response.data.page === 1) {
      setItems(response.data.results);
    } else {
      setItems(items => [...items, ...response.data.results]);
    }

    if (response.data.page < response.data.total_pages) {
      setSpreadItems(true);
    } else {
      setSpreadItems(false);
    }
    setIsDownloading(false);
  };

  /* eslint-disable */
  useEffect(() => {
    if (page === 0) {
      setPage(1);
    } else {
      getMovies();
    }
  }, [page]);
  /* eslint-enable */

  useEffect(() => {
    if (
      prevGenre !== parsedQuery.genre ||
      (prevSection !== undefined && prevSection !== props.match.params.section)
    ) {
      if (page === 0) {
        return;
      } else {
        setPage(0);
      }
    }
  }, [props.match.params.section, parsedQuery.genre, prevGenre, prevSection, page]);

  return (
    <>
      {isDownloading === false && items.length === 0 && <SadFace />}
      {items.length > 0 && (
        <MediaListSlider
          col="col-6 col-md-5 offset-md-1 offset-lg-0 col-lg-3"
          items={items}
          {...props}
          addPage={addPage}
          spreadItems={spreadItems}
        />
      )}
    </>
  );
};

export default withRouter(MoviesLandingPageList);
