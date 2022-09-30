export const API_KEY = "9195c13a37c697961a3f6920c92c27f0";
export const BASE_URL = "https://api.themoviedb.org/3";
export const Poster = "https://image.tmdb.org/t/p/original/";
export const Poster_W500 = "https://image.tmdb.org/t/p/w500/";
export const Poster_W342 = "https://image.tmdb.org/t/p/w342/";
// const request = {
//   fecthTrending: `https://api.themoviedb.org/3/trending/a  ll/week?api_key=${API_Key}`,
// https://api.themoviedb.org/3/trending/all/week?api_key=9195c13a37c697961a3f6920c92c27f0
// };
const requests = {
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTrendingWeek: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTrendingMonth: `${BASE_URL}/trending/all/Month?api_key=${API_KEY}&language=en-US`,
  fetchTrendingDay: `${BASE_URL}/trending/all/day?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchUpcomming: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US`,
  fetchAction: `${BASE_URL}/discover/movi e?api_key=${API_KEY}&language=en-US&with_genres=28`,
  fetchAdventure: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=12`,
  fetchAnimation: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16`,
  fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  fetchCrime: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=80`,
  fecthDrama: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=18`,
  fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
  fecthFamily: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10751`,
  fecthFantasy: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=14`,
  fetchHistory: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=36`,
  fetchHorror: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  fetchMusic: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10402`,
  fetchMystery: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=9648`,
  fetchRomance: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  fetchScienceFiction: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=878`,
  fetchThriller: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=53`,
  fetchTVMovie: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10770`,
  fetchWar: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10752`,
  fetchWestern: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=37`,
};
export const requestMoviesType = (type, genre) => {
  return `${BASE_URL}/discover/${type}?api_key=${API_KEY}&language=en-US&with_genres=${genre}`;
};
export const ResultsSearch = (query) => {
  return `${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
};

export default requests;
// search https://api.themoviedb.org/3/search/multi?api_key=9195c13a37c697961a3f6920c92c27f0&language=en-US&page=1&include_adult=false
