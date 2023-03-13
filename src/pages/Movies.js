// import { StyledLink } from '../components/App';
// import { MovieDetails } from './MovieDetails';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { useState, useEffect } from 'react';
import { fetchMovies } from 'services/fetchMovies';
import toast from 'react-hot-toast';
import { MovieList } from 'components/MovieList/MovieList';
import { Layout } from 'components/Layout';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query === '') {
      return;
    }

    // setIsLoading(true);

    fetchMovies(`search/movie?query=${query}&`)
      .then(data => {
        setMovies(data.results);

        if (data.results.length === 0) {
          return toast.error('Sorry, there is nothing to match your search.');
        }
      })
      .catch(error => {
        console.log(error);
        toast.error('Something went wrong. We could not complete your request');
      });
    // .finally(() => setIsLoading(false));
  }, [query]);

  const handleSubmit = value => {
    setQuery(value);
    setMovies([]);
  };

  return (
    <main>
      <>
        <Searchbar onSubmit={handleSubmit} />
        <MovieList movies={movies} />
      </>
    </main>
  );
};
