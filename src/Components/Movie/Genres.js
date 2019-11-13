import React, { useState, useEffect } from "react";
import GenreList from "./GenreList";
import { withRouter } from "react-router-dom";
import { mediaHelper } from "../../Utils/Network";
import axios from "axios";
import queryString from "query-string";
import "./Genres.css";

function Genres(props) {
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const parsedQuery = queryString.parse(props.location.search);

  const getGenres = async () => {
    let response = await axios.get(mediaHelper.genreUrl);
    response = response.data.genres.splice(0, 18);
    setGenres(response);
  };

  // Logic for handling the URL. If genre exists, use join method to get a comma separated string and assign it as value on the parsedQuery genre key.
  // We then use the stringify method on queryString in order to get a string and set it as search query.
  // If genre is unselected, remove genre from URL search query

  const setUrl = genreIds => {
    if (genreIds.length) {
      parsedQuery.genre = genreIds.join(",");
      props.history.push({
        search: queryString.stringify(parsedQuery)
      });
    } else {
      props.history.push({
        search: queryString.stringify({ ...parsedQuery, genre: undefined })
      });
    }
  };

  // Logic for either adding or removing the genre to the selectedGenres array in state
  // After determining the genres, we pass the array to setUrl as parameter

  const setGenre = id => {
    let genreIds = [];
    if (selectedGenres.includes(id)) {
      genreIds = selectedGenres.filter(genre => genre !== id);
    } else {
      genreIds = [...selectedGenres, id];
    }
    setUrl(genreIds);
    setSelectedGenres(genreIds);
  };

  useEffect(() => {
    getGenres();
  }, []);

  // Run on mount and every time parsedQuery.genre is changed to have correct setSelectedGenres in state
  // Parsing string to integer because we use it in GenreList component to see if a genre is selected or not

  useEffect(() => {
    if (parsedQuery.genre) {
      const genreArr = parsedQuery.genre.split(",").map(genre => parseInt(genre, 10));
      setSelectedGenres(genreArr);
    }
  }, [parsedQuery.genre]);

  return (
    <ul className="nav justify-content-center pt-1 pb-4">
      <GenreList genres={genres} setGenre={setGenre} selectedGenres={selectedGenres} />
    </ul>
  );
}

export default withRouter(Genres);
