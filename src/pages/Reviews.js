import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovies } from 'services/fetchMovies';
import { toast } from 'react-hot-toast';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    fetchMovies(`movie/${movieId}/reviews?`)
      .then(data => {
        setReviews(data.results);
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
          {reviews.length === 0 && (<p>We do not have any reviews for this movie.</p>)}

          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
