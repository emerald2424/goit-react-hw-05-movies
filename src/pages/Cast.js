import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovies } from 'services/fetchMovies';
import { toast } from 'react-hot-toast';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    fetchMovies(`movie/${movieId}/credits?`)
      .then(data => {
        setCast(data.cast);

        if (!data.cast) {
          return toast.error('Sorry, there is no information on the cast.');
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
      {!isLoading && (
        <>
          <ul>
            {cast.map(actor => (
              <li key={actor.id}>
                {actor.profile_path && (<img
                  src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                  alt={actor.name}
                />)}
                
                <p>{actor.name}</p>
                <p>Character: {actor.character}</p>
              </li>
            ))}
          </ul>
        </>
      )}
      {!isLoading && cast.length === 0 && (
            <p>We do not have any information about the cast for this movie.</p>
          )}
    </>
  );
};

export default Cast;
