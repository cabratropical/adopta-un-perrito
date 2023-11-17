// src/components/MyCard.jsx
import React from 'react';
import Tags from './Tags';

const MyCard = ({ imageUrl, name, description, breed, tags }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Raza: {breed}</p>
      <Tags {...tags} />
    </div>
  );
};

export default MyCard;
