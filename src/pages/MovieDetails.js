import { useParams, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { fetchMovies } from 'services/fetchMovies';
import { toast } from 'react-hot-toast';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import css from '../components/MovieInfo/MovieInfo.module.css';
import { HiArrowLongLeft } from "react-icons/hi2";


const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? "/movies")

  useEffect(() => {
    setIsLoading(true);

    fetchMovies(`movie/${movieId}?`)
      .then(
        data => {
        
        setMovie(data);
        
        if (!data) {
          return toast.error('Sorry, there is nothing to match your search.');
        }
      })
      .catch(error => {
        console.log(error);
        toast.error('Something went wrong. We could not complete your request');
      })
      .finally(() => setIsLoading(false));
  }, [movieId]);
  
  return (
    <>
      <NavLink className={css.BackLink} to={backLinkLocation.current}> <HiArrowLongLeft/>Go back</NavLink>
      {!isLoading && movie && <MovieInfo movie={movie}/>}
    </>
  )
}

export default MovieDetails;
