// import { StyledLink } from '../components/App';
import { identifyGenres } from 'services/identifyGenres';
import { useParams, NavLink, Outlet } from 'react-router-dom';
import { useEffect } from 'react';

export const MovieDetails = movie => {
  const genres = identifyGenres([
    {
      id: 18,
      name: 'Drama',
    },
    {
      id: 9648,
      name: 'Mystery',
    },
    {
      id: 53,
      name: 'Thriller',
    },
  ]);
  console.log(genres);

  const { movieId } = useParams();
  useEffect(() => {

  }, []) 

  return (
    <>
      <img src={movie.poster_path} alt={movie.title} />
      <h1>
        {movie.title} - id:{movieId}
      </h1>
      <h2>Overview</h2>
      <p>{movie.overview}</p>
      <h2>Genres</h2>
      <p>{movie.genres}</p>
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
  );
};
