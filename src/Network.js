import { TODAY, NEXTMONTH, PREVMONTH } from "./CONSTANTS";

export const API = process.env.REACT_APP_TMDB_API_KEY;
export const baseUrl = "https://api.themoviedb.org/3";
export const baseDiscoverMovieUrl = `${baseUrl}/discover/movie?api_key=${API}&language=en-US&region=US&sort_by=`;

export const movieHelper = {
  popularUrl: function(page, genres = "") {
    return `${baseDiscoverMovieUrl}popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genres}`;
  },
  swedishUrl: function(page, genres = "") {
    return `${baseUrl}/discover/movie?api_key=${API}&language=sv-SE&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&primary_release_date.gte=2000-01-01&with_original_language=sv&with_genres=${genres}`;
  },
  oldiesUrl: function(page, genres = "") {
    return `${baseDiscoverMovieUrl}popularity.desc&include_adult=false&include_video=false&page=${page}&primary_release_date.lte=1950&with_genres=${genres}`;
  },
  comingSoonUrl: function(page, genres = "") {
    return `${baseDiscoverMovieUrl}popularity.desc&include_adult=false&include_video=false&page=${page}&primary_release_date.gte=${TODAY}&primary_release_date.lte=${NEXTMONTH}&with_genres=${genres}`;
  },
  newReleasesUrl: function(page, genres = "") {
    return `${baseDiscoverMovieUrl}popularity.desc&include_adult=false&include_video=false&page=${page}&primary_release_date.gte=${PREVMONTH}&primary_release_date.lte=${TODAY}&with_genres=${genres}`;
  },
  topRatedUrl: function(page, genres = "") {
    return `${baseDiscoverMovieUrl}vote_average.desc&include_adult=false&include_video=false&page=${page}&vote_count.gte=5000&with_genres=${genres}`;
  }
};

export const sliderHelper = {
  sliderMovieUrl: `${baseDiscoverMovieUrl}popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2018&vote_count.gte=3000`,
  sliderTvUrl: `${baseUrl}/discover/tv?api_key=${API}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&vote_average.gte=5&include_null_first_air_dates=false`
};

export const mediaHelper = {
  genreUrl: `${baseUrl}/genre/movie/list?api_key=${API}&language=en-US`,
  mediaUrl: function(type, id) {
    return `${baseUrl}/${type}/${id}?api_key=${API}&language=en-US`;
  },
  mediaSimilarUrl: function(type, id) {
    return `${baseUrl}/${type}/${id}/similar?api_key=${API}&language=en-US`;
  },
  mediaRecommendationsUrl: function(type, id, page) {
    return `${baseUrl}/${type}/${id}/recommendations?api_key=${API}&language=en-US&page=${page}`;
  },
  mediaCastsUrl: function(type, id) {
    return `${baseUrl}/${type}/${id}/credits?api_key=${API}`;
  },
  keywordsUrl: function(type, id) {
    return `${baseUrl}/${type}/${id}/keywords?api_key=${API}&language=en-US`;
  },
  mediaWithKeyword: function(type, keyword) {
    return `${baseUrl}/discover/${type}?api_key=${API}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_keywords=${keyword}`;
  },
  trailerUrl: function(id) {
    return `${baseUrl}/movie/${id}/videos?api_key=${API}&language=en-US`;
  }
};

export const tvHelper = {
  // Change the below replace function ASAP. You will have bugs in the future!!!
  sectionTvUrl: function(urlParam) {
    const section = urlParam.replace(/-/g, "_");
    return `${baseUrl}/tv/${section}?api_key=${API}&language=en-US`;
  }
};

export const searchHelper = {
  searchUrl: function(query) {
    return `${baseUrl}/search/multi?api_key=${API}&language=en-US&query=${query}&page=1&include_adult=false`;
  }
};

export const peopleHelper = {
  personUrl: function(id) {
    return `${baseUrl}/person/${id}?api_key=${API}&language=en-US`;
  },
  trendingPeopleUrl: function(page) {
    return `https://api.themoviedb.org/3/trending/person/week?api_key=${API}&language=en-US&page=${page}`;
  },
  personMovieCredits: function(id) {
    return `${baseUrl}/person/${id}/movie_credits?api_key=${API}&language=en-US`;
  },
  personTvCredits: function(id) {
    return `${baseUrl}/person/${id}/tv_credits?api_key=${API}&language=en-US`;
  }
};
