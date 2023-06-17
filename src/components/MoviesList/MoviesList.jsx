import { useState, useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import { getDayTrendingMovies } from 'service/movies-api';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { results } = await getDayTrendingMovies();
        if (results && results.length > 0) {
          setMovies(results);
          setError(null);
        } else {
          setError('No movies found.');
        }
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
      {error && <h2>{error}</h2>}
    </>
  );
};

export default MoviesList;
