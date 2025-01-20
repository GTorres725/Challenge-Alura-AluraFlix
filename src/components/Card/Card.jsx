import React from 'react';
import './Card.css';
import delIcon from '../../assets/del-icon.png';

const Card = ({ video, categoryTitle, videoIndex, onDelete }) => {
  const handleDelete = () => {
    onDelete(categoryTitle, videoIndex);
  };

  return (
    <div className="card">
      <a href={video.video} target="_blank" rel="noopener noreferrer">
        <img src={video.thumbnail} alt={video.title} className="card-thumbnail" />
      </a>
      <div className="card-info">
        <h3>{video.title}</h3>
        <button className="btn-delete" onClick={handleDelete}>
          <img src={delIcon} alt="Deletar" />
        </button>
      </div>
    </div>
  );
};

export default Card;