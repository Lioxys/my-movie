import React, { useState, useEffect } from 'react';
import MovieForm from '../components/MovieForm';
import MovieItem from '../components/MovieItem';
import {
  getMoviesFromStorage,
  setMoviesToStorage,
} from '../services/localStorageService';
import './Home.css';

function Home() {
  const [movies, setMovies] = useState([]);
  const [editingMovieId, setEditingMovieId] = useState(null);
  const [minRating, setMinRating] = useState(0)

  useEffect(() => {
    const storedMovies = getMoviesFromStorage();
    setMovies(storedMovies);
  }, []);

  useEffect(() => {
    setMoviesToStorage(movies);
  }, [movies]);

  const handleAddMovie = (newMovie) => {
    const movieToAdd = { ...newMovie, id: Date.now() };
    setMovies((prev) => [...prev, movieToAdd]);
  };

  const handleEditMovie = (id) => {
    setEditingMovieId(id);
  };

  const handleUpdateMovie = (updatedMovie) => {
    setMovies((prev) =>
      prev.map((movie) =>
        movie.id === editingMovieId
          ? { ...movie, ...updatedMovie }
          : movie
      )
    );
    setEditingMovieId(null);
  };

  const handleDeleteMovie = (id) => {
    setMovies((prev) => prev.filter((movie) => movie.id !== id));
  };

  const editingMovie = movies.find((m) => m.id === editingMovieId);

  const filteredMovies = movies.filter((movie) => movie.note >= minRating);

  const handleMinRatingChange = (e) => {
    setMinRating(Number(e.target.value));
  };

  return (
    <div className="home-page">
      <h1>Liste de mes films</h1>

      {editingMovie ? (
        <>
          <h2>Modifier le film</h2>
          <MovieForm
            onSubmit={handleUpdateMovie}
            initialData={editingMovie}
          />
        </>
      ) : (
        <>
          <h2>Ajouter un nouveau film</h2>
          <MovieForm onSubmit={handleAddMovie} />
        </>
      )}

      <div style={{ margin: '1rem 0' }}>
        <label>Filtrer par note : </label>
        <select value={minRating} onChange={handleMinRatingChange}>
          <option value="0">Toutes les notes</option>
          <option value="1">1 étoile et plus</option>
          <option value="2">2 étoiles et plus</option>
          <option value="3">3 étoiles et plus</option>
          <option value="4">4 étoiles et plus</option>
          <option value="5">5 étoiles</option>
        </select>
      </div>

      <div className="movie-list">
        <h2>Liste de vos films</h2>
        {filteredMovies.map((movie) => (
          <MovieItem
            key={movie.id}
            movie={movie}
            onEdit={handleEditMovie}
            onDelete={handleDeleteMovie}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;