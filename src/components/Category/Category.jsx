import React from 'react';
import Card from '../Card/Card';
import './Category.css';

const Category = ({ title, videos, onDelete }) => {
  return (
    <section className="category">
      <h2 className="category-title">{title}</h2>
      <div className="cards">
        {videos.map((video, index) => (
          <Card
            key={index}
            video={video}
            categoryTitle={title}
            videoIndex={index}
            onDelete={onDelete}
          />
        ))}
      </div>
    </section>
  );
};

export default Category;