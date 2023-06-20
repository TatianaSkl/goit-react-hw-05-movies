import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Section } from 'components/App/App.styled';
import { Text } from 'components/MoviesInfo/MoviesInfo.styled';

import { getMovieReviews } from 'service/movies-api';

export const Reviews = () => {
  const [reviewsInfo, setReviewsInfo] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    setIsLoading(true);
    getMovieReviews(movieId)
      .then(response => {
        setReviewsInfo(response.results);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);
  return (
    <Section>
      {isLoading && <Loader />}
      <ul>
        {reviewsInfo?.map(({ id, author, content }) => (
          <li key={id}>
            <Text>
              <b>Author: {author}</b>
            </Text>
            <Text>{content}</Text>
          </li>
        ))}
      </ul>
      {reviewsInfo.length === 0 && <div>We don't have any reviews for this movie.</div>}
      {error && <h2>{error}</h2>}
    </Section>
  );
};
