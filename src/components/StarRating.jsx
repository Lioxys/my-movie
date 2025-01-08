import React from 'react';

function StarRating({ currentRating = 3, onRatingSelect }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="star-rating">
      {stars.map((star) => {
        return (
          <span
            key={star}
            style={{ cursor: 'pointer', marginRight: 5 }}
            onClick={() => onRatingSelect(star)}
          >
            {star <= currentRating ? '⭐' : '☆'}
          </span>
        );
      })}
    </div>
  );
}

export default StarRating;
