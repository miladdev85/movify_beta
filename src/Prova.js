import axios from "axios";
import { API } from "./Helpers";

export const getItem = async (id, setItem, setError) => {
  try {
    let response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API}`);
    setItem(response.data);
  } catch (error) {
    setError(error);
  }
};

export const getCasts = async (id, setCasts, setIsDownloading, setError) => {
  try {
    let response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API}`
    );
    response = response.data.cast.splice(0, 6);
    setCasts(response);
  } catch (error) {
    setError(error);
  }
  setIsDownloading(false);
};

export const getSimilarMovies = async (id, setMovies, setIsLoading, setError) => {
  try {
    let response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API}&language=en-US&page=1`
    );
    setMovies(response.data.results);
  } catch (error) {
    setError(error);
  }
  setIsLoading(false);
};
