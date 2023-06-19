import { useState, useEffect } from 'react';
import { getDayTrendingMovies } from 'service/movies-api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getDayTrendingMovies()
      .then(response => {
        setMovies(response.results);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <main>
      {isLoading && <Loader />}
      <h1 style={{ marginBottom: '20px' }}>Trending today</h1>
      <MoviesList movies={movies} />
      {error && <h2>{error}</h2>}
    </main>
  );
};
