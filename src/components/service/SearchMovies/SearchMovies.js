async function SearchMovies() {
  const url =
    'https://api.themoviedb.org/3/search/movie?api_key=5ef48972310b83a9569c2449ed33b900&language=en-US&query=return&page=1&include_adult=false';
  const res = await fetch(url);
  if (res.ok) return res.json();
  throw new Error('Ошибка запроса');
}

export default SearchMovies();
