import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { getSearchMovies } from 'service/movies-api';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) {
      return;
    }
    setIsLoading(true);
    getSearchMovies({ query })
      .then(response => {
        if (response.results.length === 0) {
          toast.error(`Sorry, no movie from ${query}!`);
        } else {
          setMovies(response.results);
        }
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams({ query });
    setMovies([]);
  };

  return (
    <main>
      <ToastContainer autoClose={3000} />
      <SearchBox onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      <MoviesList movies={movies} />
      {error && <h2>{error}</h2>}
    </main>
  );
};
