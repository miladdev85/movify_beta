import axios from "axios";
import { mediaHelper, API } from "./Helpers";

export const getItem = async (type, id, setItem, setIsDownloading, setError) => {
  setIsDownloading(true);
  try {
    const response = await axios.get(mediaHelper.mediaUrl(type, id));
    setItem(response.data);
  } catch (error) {
    setError(error);
  }
  setIsDownloading(false);
};

export const getSimilarItems = async (type, id, setItems, setIsDownloading, setError) => {
  console.log("getting similar movies");
  setIsDownloading(true);
  try {
    const response = await axios.get(mediaHelper.mediaSimilarUrl(type, id));
    setItems(response.data.results);
  } catch (error) {
    setError(error);
  }
  setIsDownloading(false);
};

export const getRecommendations = async (type, id, setItems, setIsDownloading, setError) => {
  console.log("getting recs movies");
  setIsDownloading(true);
  try {
    const response = await axios.get(mediaHelper.mediaRecommendationsUrl(type, id));
    setItems(response.data.results);
  } catch (error) {
    setError(error);
  }
  setIsDownloading(false);
};

export const getCasts = async (type, id, setCasts, setIsDownloading, setError) => {
  console.log("getting cast");
  try {
    let response = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${API}`
    );
    response.data.cast.sort((a, b) => a.order - b.order);
    response = response.data.cast.splice(0, 6);
    setCasts(response);
  } catch (error) {
    setError(error);
  }
  setIsDownloading(false);
};
