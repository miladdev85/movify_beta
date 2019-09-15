import React from "react";

const GenreList = ({ genres, addGenre, selectedGenres }) => {
  return (
    <>
      {genres.map(genre => (
        <li key={genre.id} className={`nav-item px-1 mb-2`}>
          <button
            type="button"
            onClick={() => addGenre(genre.id)}
            className={`btn btn__color btn-outline-primary rounded-pill btn-sm ${selectedGenres.includes(
              genre.id
            ) && "active"}`}
            aria-pressed={`mixed`}
          >
            {genre.name}
          </button>
        </li>
      ))}
    </>
  );
};

export default GenreList;
