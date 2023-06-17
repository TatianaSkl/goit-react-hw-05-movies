import Loader from 'components/Loader/Loader';
import SearchBox from 'components/SearchBox/SearchBox';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { getSearchMovies } from 'service/movies-api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('search') ?? '';

  function handlerQuery(searchQuery) {
    if (searchQuery.trim() === '') {
      toast.error("Sorry, the search string can't be empty. Please try again.");
      return;
    }
    searchQuery ? setSearchParams({ search: searchQuery }) : setSearchParams({});
  }
  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getSearchMovies({ query });
        if (data.results.length === 0) {
          throw new Error(`Sorry, no movie from ${query}!`);
        }
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query]);

  return (
    <main>
      <ToastContainer autoClose={3000} />
      <SearchBox onSubmit={handlerQuery} />
      <>
        {isLoading && <Loader />}
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
        {error && <h2>{error}</h2>}
      </>
    </main>
  );
};

export default Movies;
