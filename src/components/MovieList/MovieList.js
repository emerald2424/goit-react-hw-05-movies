import css from './MovieList.module.css';
// import { MovieListItem } from '../MovieListItem/MovieListItem';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';

export const MovieList = ({ movies }) => {
    
    return (
      <ul className={css.MovieList}>
        {movies.map(movie => (
          <li key={movie.id} className={css.MovieListItem}>
            <Link to={`${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    );
  };

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
