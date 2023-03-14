import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { fetchMovies } from '../services/fetchMovies';
import { MovieListForHomePage } from 'components/MovieListForHomePage/MovieListForHomePage.js';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetchMovies('trending/movie/day?')
      .then(data => {
        setMovies(data.results);

        if (data.results.length === 0) {
          return toast.error('Sorry, there is nothing to match your search.');
        }
      })
      .catch(error => {
        console.log(error);
        toast.error('Something went wrong. We could not complete your request');
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <section>
      <h1>Trending today</h1>
      {!isLoading && <MovieListForHomePage movies={movies} />}
    </section>
  );
};
