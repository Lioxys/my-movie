import React from 'react';
import StarRating from './StarRating';

function MovieItem({ movie, onEdit, onDelete }) {
  const { id, title, note, comment } = movie;

  return (
    <div className="movie-item">
      <h3>{title}</h3>
      <StarRating currentRating={note} onRatingSelect={() => {}} />

      {comment && <p className="comment">Commentaire : {comment}</p>}

      <button className="edit-button" onClick={() => onEdit(id)}><i className="fas fa-pen"></i>Modifier</button>
      <button className="delete-button" onClick={() => onDelete(id)}><i className="fas fa-trash"></i>Supprimer</button>
      
    </div>
  );
}

export default MovieItem;
