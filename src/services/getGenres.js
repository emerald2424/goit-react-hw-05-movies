export const getGenres = genreArr => {
  let genres = 'No particular genre';
  if (genreArr) {
    const obtainedGenres = genreArr.map(genre => genre.name);
    genres = obtainedGenres.join(' ');
  }
  return genres;
};
