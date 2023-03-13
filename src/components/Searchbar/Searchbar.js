// import css from './Searchbar.module.css';
// import { ImSearch } from 'react-icons/im';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
// import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query.trim()) {
      return toast.error('Your query is not valid');
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <header >
      <form onSubmit={handleSubmit}>
        <input
          
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={handleChange}
        />
        
        <button type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

// Searchbar.propTypes = {
//   query: PropTypes.string.isRequired,
//   onSubmit: PropTypes.func.isRequired,
// };
