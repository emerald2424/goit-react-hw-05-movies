import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'bf492d66596427c106e4ba61d2926d57'


// export const fetchMovies = async (param) => {
//     return fetch(`${BASE_URL}${param}?api_key=${API_KEY}`)
//     .then(resp => {
//         if(!resp.ok) {
//             return Promise.reject(
//                 new Error(resp.status)) 
//         }
//         return resp.json()
//     })
// }
export const fetchMovies = async (param) => {
    const response = await axios.get(`${BASE_URL}${param}api_key=${API_KEY}`)
    return await response.data;
}
// https://api.themoviedb.org/3/movie/768362?api_key=bf492d66596427c106e4ba61d2926d57