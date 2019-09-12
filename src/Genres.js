import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { mediaHelper } from "./Network";
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
      {genres.map(genre => {
        return (
          <div key={genre.id} className={`nav-item px-1 mb-2`}>
            <button
              type="button"
              onClick={() => addGenre(genre.id)}
              className={`btn btn__col btn-outline-primary rounded-pill btn-sm ${selectedGenres.includes(
                genre.id
              ) && "active"}`}
              aria-pressed={`mixed`}
            >
              {genre.name}
            </button>
          </div>
        );
      })}
    </ul>
  );
}

export default withRouter(Genres);
