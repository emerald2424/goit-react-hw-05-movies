// import { StyledLink } from '../components/App';
// import { identifyGenres } from 'services/identifyGenres';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovies } from 'services/fetchMovies';
import { toast } from 'react-hot-toast';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';


export const MovieDetails = () => {
  // const genres = identifyGenres([
  //   {
  //     id: 18,
  //     name: 'Drama',
  //   },
  //   {
  //     id: 9648,
  //     name: 'Mystery',
  //   },
  //   {
  //     id: 53,
  //     name: 'Thriller',
  //   },
  // ]);
  // console.log(genres);

  
  //FETCHING A MOVIE
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    fetchMovies(`movie/${movieId}?`)
      .then(
        data => {
        
        setMovie(data)
        
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
      {!isLoading && <MovieInfo movie={movie}/>}
    </>
  )
}
