import { Link, useLocation } from 'react-router-dom';
import { Item } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <ul>
        {movies.map(movie => (
          <Item key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </Item>
        ))}
      </ul>
    </>
  );
};
