import css from './MovieInfo.module.css';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { getGenres, getReleaseYear } from 'services/getMovieDetails';


const MovieInfo = ({ movie }) => {
  const genres = getGenres(movie.genres);

  const {poster_path, title, release_date, vote_average, overview } = movie;

  return (
    <>
      <div className={css.Movie}>
        <div>
            {poster_path && (
            <img
              className={css.Poster}
              src={`https://image.tmdb.org/t/p/w342${poster_path}`}
              alt={title}
            />
          )}
        </div>
        
        <div className={css.MovieInfo}>
          <h1>
            {title} (
            {release_date && getReleaseYear(release_date)})
          </h1>
          <p>User Score: {vote_average && vote_average.toFixed(1)}</p>
          
          <h2>Overview</h2>
          {overview && <p>{overview}</p>}
          {overview === '' && <p>No information</p>}
          <h2>Genres</h2>
          <p>{genres}</p>
        </div>
      </div>

      <h3>Additional information</h3>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};


export default MovieInfo;
