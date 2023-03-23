const getGenres = genreArr => {
  let genres = 'No particular genre';
  if (genreArr && genreArr.length !== 0) {
    const obtainedGenres = genreArr.map(genre => genre.name);
    genres = obtainedGenres.join(' ');
  }
  return genres;
};

const getReleaseYear = (date) => {
  let year = "No release year";
  if (date) {
    year = date.slice(0, 4)
  }
  return year;
}

export { getGenres, getReleaseYear }