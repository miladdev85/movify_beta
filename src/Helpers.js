import moment from "moment";

export const API = process.env.REACT_APP_TMDB_API_KEY;
export const baseUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API}&language=en-US&region=US&sort_by=`;
export const today = moment().format("YYYY-MM-DD");
export const nextMonth = moment()
  .add(1, "M")
  .format("YYYY-MM-DD");
export const prevMonth = moment()
  .subtract(1, "M")
  .format("YYYY-MM-DD");

export const genreHelper = {
  genreUrl: `https://api.themoviedb.org/3/genre/movie/list?api_key=${API}&language=en-US`,
  trailerUrl: function(id) {
    return `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API}&language=en-US`;
  },
  popularUrl: function(page, genreArr = "") {
    return `${baseUrl}popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreArr}`;
  },
  comingSoonUrl: function(page, genreArr = "") {
    return `${baseUrl}popularity.desc&include_adult=false&include_video=false&page=${page}&primary_release_date.gte=${today}&primary_release_date.lte=${nextMonth}&with_genres=${genreArr}`;
  },
  newReleasesUrl: function(page, genreArr = "") {
    return `${baseUrl}popularity.desc&include_adult=false&include_video=false&page=${page}&primary_release_date.gte=${prevMonth}&primary_release_date.lte=${today}&with_genres=${genreArr}`;
  },
  topRatedUrl: function(page, genreArr = "") {
    return `${baseUrl}vote_average.desc&include_adult=false&include_video=false&page=${page}&vote_count.gte=5000&with_genres=${genreArr}`;
  }
};

export const mediaHelper = {
  discoverMovieUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2018&vote_count.gte=3000`,
  discoverTvUrl: `https://api.themoviedb.org/3/discover/tv?api_key=${API}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`,

  mediaUrl: function(type, id) {
    return `https://api.themoviedb.org/3/${type}/${id}?api_key=${API}&language=en-US`;
  },
  sectionTvUrl: function(urlParam, page) {
    const section = urlParam.replace(/-/g, "_");
    return `https://api.themoviedb.org/3/tv/${section}?api_key=${API}&&language=en-US&page=${page}`;
  },
  withKeyword: function(type, keyword) {
    return `https://api.themoviedb.org/3/discover/${type}?api_key=${API}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_keywords=${keyword}`;
  }
};

export const tvHelper = {
  tvShowUrl: function(id) {
    return `https://api.themoviedb.org/3/tv/${id}?api_key=${API}&language=en-US`;
  },
  tvShowCast: function(id) {
    return `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${API}&language=en-US`;
  },
  getTvKeywords: function(id) {
    return `https://api.themoviedb.org/3/tv/${id}/keywords?api_key=${API}&language=en-US`;
  },
  getTvRecommendations: function(id) {
    return `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${API}&language=en-US`;
  }
};

export const searchHelper = {
  searchUrl: function(query) {
    return `https://api.themoviedb.org/3/search/multi?${API}&language=en-US&query=${query}&page=1&include_adult=false`;
  }
};

export const peopleHelper = {
  popularPeopleUrl: `https://api.themoviedb.org/3/person/popular?api_key=${API}&language=en-US&page=1`,
  trendingPeopleUrl: `https://api.themoviedb.org/3/trending/person/week?api_key=${API}&language=en-US&page=1`,
  personUrl: function(id) {
    return `https://api.themoviedb.org/3/person/${id}?api_key=${API}&language=en-US`;
  },
  personMovieCredits: function(id) {
    return `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${API}&language=en-US`;
  },
  personTvCredits: function(id) {
    return `https://api.themoviedb.org/3/person/${id}/tv_credits?api_key=${API}&language=en-US`;
  }
};
