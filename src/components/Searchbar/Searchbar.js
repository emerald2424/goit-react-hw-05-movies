import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  const [q, setQ] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  // const query = searchParams.get('query') ?? '';
  
  const handleChange = e => {
    setQ(e.target.value)
  };

  

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({query: q})
    // if (q === '') {
    //   return setSearchParams({});
      
    // }
    if (!q.trim()) {
      return toast.error('Your query is not valid. Type something different.');
    }
    onSubmit(q);
    setQ('');
  };

  return (
    <header >
      <form onSubmit={handleSubmit}>
        <input
          
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={q}
          onChange={handleChange}
        />
        
        <button type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
