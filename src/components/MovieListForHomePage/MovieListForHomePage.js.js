import css from '../MovieList/MovieList.module.css';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const MovieListForHomePage = ({ movies }) => {
    
  return (
    <ul className={css.MovieList}>
      {movies.map(movie => (
        <li key={movie.id} className={css.MovieListItem}>
          <Link to={`movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};

// MovieListForHomePage.propTypes = {
//   movies: PropTypes.arrayOf(PropTypes.object).isRequired,
// };
