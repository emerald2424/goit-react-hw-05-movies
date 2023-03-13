import { fetchMovies } from "./fetchMovies";
import { toast} from 'react-hot-toast';

export const identifyGenres = (genreArr) => {
    fetchMovies('genre/movie/list?')
    .then(data => {
        return genreArr.map(genreArrItem => data.genres
            .find(dataGenre => genreArrItem === dataGenre.id)
            // .map(genre => genre.name)
        )}
        )
        .catch(error => {
        console.log(error);
        toast.error('Something went wrong. We could not complete your request');
      })
}


