import css from './MovieInfo.module.css';
// import { useEffect } from 'react';
import { useParams, NavLink, Outlet } from 'react-router-dom';
import { getGenres } from 'services/getGenres';

export const MovieInfo = ({movie}) => {
    
    const genres = getGenres(movie.genres)
    
    const { movieId } = useParams();
    return (
      <>
      <img className={css.Poster} src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
      
      <h1>
        {movie.title} - id:{movieId}
      </h1>
      <h2>Overview</h2>
      <p>{movie.overview}</p>
      <h2>Genres</h2>
      <p>{genres}</p>
      <h3>Additional information</h3>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
    )    

}