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

  const addGenre = id => {
    let genreIds = [];
    if (selectedGenres.includes(id)) {
      genreIds = selectedGenres.filter(genre => genre !== id);
    } else {
      genreIds = [...selectedGenres, id];
    }
    modifyUrl(genreIds);
    setSelectedGenres(genreIds);
  };

  const modifyUrl = genreIds => {
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

  useEffect(() => {
    getGenres();
  }, []);

  useEffect(() => {
    if (parsedQuery.genre) {
      const genreArr = parsedQuery.genre.split(",").map(genre => parseInt(genre, 10));
      setSelectedGenres(genreArr);
    }
  }, [parsedQuery.genre]);

  return (
    <ul className="nav justify-content-center pt-1 pb-4">
      <GenreList genres={genres} addGenre={addGenre} selectedGenres={selectedGenres} />;
    </ul>
  );
}

export default withRouter(Genres);
