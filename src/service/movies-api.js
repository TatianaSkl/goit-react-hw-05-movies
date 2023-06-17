const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '214e13c97c55baca13ab56614ecbad3f';

export async function getDayTrendingMovies() {
  const response = await fetch(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`);
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(`Smth went wrong...`);
  }
}
export async function getSearchMovies({ query }) {
  const response = await fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`);
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(`Smth went wrong...`);
  }
}
export async function getMovieDetails(movieId) {
  const response = await fetch(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`);
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(`Smth went wrong...`);
  }
}
export async function getMovieCredits(movieId) {
  const response = await fetch(`${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`);
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(`Smth went wrong...`);
  }
}
export async function getMovieReviews(movieId) {
  const response = await fetch(`${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`);
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(`We don't have any reviews for this movie.`);
  }
}
