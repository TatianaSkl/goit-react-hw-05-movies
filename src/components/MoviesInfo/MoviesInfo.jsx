import PropTypes from 'prop-types';
import { Image, ItemInfo, Section, Text, Title, Wrapper } from './MoviesInfo.styled';

export const MoviesInfo = ({
  title,
  release_date,
  overview,
  vote_average,
  genres = [],
  poster_path,
}) => {
  const data = new Date(release_date).getFullYear();
  const defaultImg = 'https://img.freepik.com/free-vector/cinema-concept_1284-12759.jpg?w=2000';
  return (
    <Section>
      <Image
        src={poster_path ? 'https://image.tmdb.org/t/p/w500' + poster_path : defaultImg}
        alt="poster"
        loading="lazy"
      />
      <Wrapper>
        <h2 style={{ marginBottom: '20px' }}>
          {title} ({data})
        </h2>
        <Text>
          <i>User Score: </i>
          {Math.round(vote_average * 10)} %
        </Text>
        <Title>Overview</Title>
        <Text>{overview}</Text>
        <Title>Genres</Title>
        <ul>
          {genres.map(genre => (
            <ItemInfo key={genre.id}>{genre.name}</ItemInfo>
          ))}
        </ul>
      </Wrapper>
    </Section>
  );
};
MoviesInfo.propTypes = {
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  poster_path: PropTypes.string,
};
