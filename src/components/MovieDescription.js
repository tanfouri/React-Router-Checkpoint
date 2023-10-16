import React from 'react';
import { Link } from 'react-router-dom';

const MovieDescription = ({ movie }) => {
  const { title, description, trailerLink } = movie; // Destructuration des propriétés

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <iframe
        title={title}
        width="560"
        height="315"
        src={trailerLink}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
};

export default MovieDescription;
