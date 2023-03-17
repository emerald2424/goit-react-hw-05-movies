import css from './MovieList.module.css';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();
  
  return (
    <>
      <ul className={css.MovieList}>
        {movies.map(movie => (
          <li key={movie.id} className={css.MovieListItem}>
            <Link to={`${movie.id}`} state={{ from: location }}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
