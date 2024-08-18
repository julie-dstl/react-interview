import React from 'react';
import './Card.css';

const Card = ({ title, category, likes, dislikes }) => {
  const nbVotes = likes + dislikes;
  const percentageBar = (likes / nbVotes) * 100 || 0;

  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-category">{category}</p>
      <div className="likes-dislikes">
        <div className="like-bar" style={{ width: `${percentageBar}%` }}></div>
      </div>
      <div className="actions">
        <button>Like</button>
        <button>Dislike</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default Card;

