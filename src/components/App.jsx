// import { useState, useEffect } from 'react';

// import { Searchbar } from './Searchbar/Searchbar';
// import { MovieList } from './MovieList/MovieList';
// import { toast, Toaster } from 'react-hot-toast';
// import { fetchMovies } from 'services/fetchMovies';
// import { Loader } from 'components/Loader/Loader';
// import { Button } from 'components/Button/Button';

import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';
import { Cast } from 'pages/Cast';
import { Reviews } from 'pages/Reviews';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { NotFound } from '../pages/NotFound';




export const App = () => {
    
  return (
    <Routes> 
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />}/>
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    
  );
};
