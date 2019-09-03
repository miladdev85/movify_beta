import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";
import SadFace from "./SadFace";
import { API } from "./Helpers";
import queryString from "query-string";
import Loading from "./Loading";
import axios from "axios";

function Similar(props) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const queryObj = queryString.parse(props.location.search);

  useEffect(() => {
    const getSimilarMovies = async () => {
      try {
        let response = await axios.get(
          `https://api.themoviedb.org/3/movie/${queryObj.details}/similar?api_key=${API}&language=en-US&page=1`
        );
        setMovies(response.data.results);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    getSimilarMovies();
  }, [queryObj.details]);

  return (
    <>
      {isLoading === false && error && <SadFace />}
      {isLoading && <Loading />}
      {isLoading === false && error === false && (
        <ListItem items={movies} {...props} fromSimilar={true} isLoading={isLoading} />
      )}
    </>
  );
}

export default Similar;
