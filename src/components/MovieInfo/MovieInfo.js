import css from './MovieInfo.module.css';
// import { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { getGenres } from 'services/getGenres';
// import { getReleaseYear } from 'services/year';

export const MovieInfo = ({movie}) => {
    
    const genres = getGenres(movie.genres);
    if (movie === {}) {
      return;
    }
    // console.log('movie.release_date', movie.release_date)
    // const releaseDate = movie.release_date;
    // console.log('releaseDate', releaseDate)
    // const releaseYear = releaseDate.slice(0, 4)
    // console.log(releaseYear)

    // const getReleaseYear = (date) => {
    //   return date.slice(0, 4)
    // }
    // const releaseYear = getReleaseYear(movie.release_date);
    // console.log(releaseYear)
    // const averageVote = movie.vote_average.toFixed(1);
    
    return (
      <>
      <img className={css.Poster} src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
      
      <h1>
        {movie.title} 
        {/* ({releaseYear}) */}
        
      </h1>
      <p>Release Date: {movie.release_date}</p>
      <p>User Score: {movie.vote_average}</p>
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