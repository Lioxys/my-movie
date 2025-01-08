import React, { useState } from 'react';
import StarRating from './StarRating';

function MovieForm({ onSubmit, data = {} }) {
  const [title, setTitle] = useState(data.title || '');
  const [note, setNote] = useState(data.note || 3);
  const [comment, setComment] = useState(data.comment || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, note, comment });
    setTitle('');
    setNote(3);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="movie-form">
      <div>
        <label>Titre</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Nom du film"
          required
        />
      </div>

      <div>
        <label>Note</label>
        <StarRating
          currentRating={note}
          onRatingSelect={setNote}
        />
      </div>

      <div>
        <label>Commentaire (optionnel)</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Laissez un commentaire..."
        />
      </div>

      <button type="submit">Enregistrer</button>
    </form>
  );
}

export default MovieForm;
