import css from '../MovieList/MovieList.module.css';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const MovieListForHomePage = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.MovieList}>
      {movies.map(movie => (
        <li key={movie.id} className={css.MovieListItem}>
          <Link to={`movies/${movie.id}`} state={{ from: location }}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieListForHomePage;

MovieListForHomePage.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
