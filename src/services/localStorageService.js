const STORAGE_KEY_MOVIES = 'myMovies';

export function getMoviesFromStorage() {
  const data = localStorage.getItem(STORAGE_KEY_MOVIES);
  return data ? JSON.parse(data) : [];
}

export function setMoviesToStorage(movies) {
  localStorage.setItem(STORAGE_KEY_MOVIES, JSON.stringify(movies));
}