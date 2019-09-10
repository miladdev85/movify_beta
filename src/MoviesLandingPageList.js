import React, { useState, useEffect, useRef, useCallback } from "react";
import { withRouter } from "react-router-dom";
import { genreHelper } from "./Helpers";
import MediaListSlider from "./MediaListSlider";
import SadFace from "./SadFace";
import Loading from "./Loading";
import queryString from "query-string";
import axios from "axios";

const MoviesLandingPageList = ({ location, match, type }) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [spreadItems, setSpreadItems] = useState(false);
  const parsedQuery = queryString.parse(location.search);
  const prevGenreRef = useRef();
  const prevSectionRef = useRef();

  useEffect(() => {
    prevGenreRef.current = parsedQuery.genre;
    prevSectionRef.current = match.params.section;
  });

  const prevGenre = prevGenreRef.current;
  const prevSection = prevSectionRef.current;

  const addPage = useCallback(() => {
    setPage(p => p + 1);
  }, [setPage]);

  const getMovies = async () => {
    setIsDownloading(true);
    let url;
    switch (match.params.section) {
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

    const response = await axios.get(url);
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

  // Eventuelly a bug below. Wrap getMovies above in useCallback instead of this quick-fix.
  // And remove eslint-disable / enable.

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
      (prevSection !== undefined && prevSection !== match.params.section)
    ) {
      if (page === 0) {
        return;
      } else {
        setPage(0);
      }
    }
  }, [match.params.section, parsedQuery.genre, prevGenre, prevSection, page]);

  return (
    <>
      {isDownloading && <Loading />}
      {!isDownloading && items.length === 0 && <SadFace />}
      {items.length > 0 && (
        <MediaListSlider
          col="col-6 col-md-5 offset-md-1 offset-lg-0 col-lg-3"
          type={type}
          items={items}
          addPage={addPage}
          spreadItems={spreadItems}
        />
      )}
    </>
  );
};

export default withRouter(MoviesLandingPageList);
