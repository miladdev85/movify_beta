import React, { useState, useEffect, useRef } from "react";
import { withRouter } from "react-router-dom";
import { genreHelper } from "./Helpers";
import ListItem from "./ListItem";
import Loading from "./Loading";
import queryString from "query-string";
import axios from "axios";

const MainList = props => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [spreadItems, setSpreadItems] = useState(false);
  const parsedQuery = queryString.parse(props.location.search);
  const prevGenreRef = useRef();
  const prevTypeRef = useRef();

  useEffect(() => {
    prevGenreRef.current = parsedQuery.genre;
    prevTypeRef.current = props.match.params.type;
  });

  const prevGenre = prevGenreRef.current;
  const prevType = prevTypeRef.current;

  const addPage = () => {
    setPage(page + 1);
  };

  const getMovies = async () => {
    let url;
    switch (props.match.params.type) {
      case "new-releases":
        url = genreHelper.newReleasesUrl(page, parsedQuery.genre);
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
      default:
        url = genreHelper.popularUrl(parsedQuery.genre);
    }

    let response = await axios.get(url);

    if (page === 1) {
      setItems(response.data.results);
    } else {
      setItems([...items, ...response.data.results]);
    }

    if (response.data.results.length === 20) {
      setSpreadItems(true);
    } else {
      setSpreadItems(false);
    }

    setIsLoading(false);
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
      (prevType !== undefined && prevType !== props.match.params.type)
    ) {
      setPage(0);
    }
  }, [props.match.params.type, parsedQuery.genre, prevGenre, prevType]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <ListItem
          items={items}
          {...props}
          isLoading={isLoading}
          addPage={addPage}
          spreadItems={spreadItems}
        />
      )}
    </>
  );
};

export default withRouter(MainList);
