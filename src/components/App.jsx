// import { useState, useEffect } from 'react';

// import { Searchbar } from './Searchbar/Searchbar';
// import { MovieList } from './MovieList/MovieList';
// import { toast, Toaster } from 'react-hot-toast';
// import { fetchMovies } from 'services/fetchMovies';
// import { Loader } from 'components/Loader/Loader';
// import { Button } from 'components/Button/Button';

import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';
import { Cast } from 'pages/Cast';
import { Reviews } from 'pages/Reviews';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { NotFound } from '../pages/NotFound';




export const App = () => {
  // // const [query, setQuery] = useState('');
  // const [movies, setMovies] = useState([]);
  // // const [totalMovies, setTotalMovies] = useState(0);
  // const [isLoading, setIsLoading] = useState(false);
  // // const [page, setPage] = useState(1);

  // useEffect(() => {
  //   // if (query === '') {
  //   //   return;
  //   // }

  //   setIsLoading(true);

  //   fetchMovies('trending/movie/day')
  //     .then(data => {
  //       setMovies(data.results);

  //       if (data.results.length === 0) {
  //         return toast.error('Sorry, there is nothing to match your search.');
  //       }
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       toast.error('Something went wrong. We could not complete your request');
  //     })
  //     .finally(() => setIsLoading(false));
  // }, []);

  // const loadMore = () => {
  //   setPage(prevPage => prevPage + 1);
  // };

  // const isButtonVisible = () => {
  //   const pages = Math.ceil(totalImages / 12);
  //   if (!isLoading && totalImages > 12 && pages > page) {
  //     return true;
  //   }
  //   return false;
  // };

  // const handleSubmit = value => {
  //   setQuery(value);
  //   setPage(1);
  //   setImages([]);
  // };

  return (
    
       

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />}>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        
        
        
            
        </Route>
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    
  );
};
