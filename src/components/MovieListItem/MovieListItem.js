// import css from './MovieListItem.module.css';
// import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const MovieListItem = ({ movie }) => {
  
  return (
    <Link to={`${movie.id}`}>{movie.title}</Link>
  );
};

MovieListItem.propTypes = {
  movie: PropTypes.object.isRequired,
};
