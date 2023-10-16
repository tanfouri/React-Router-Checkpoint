import React from 'react';
import MovieCard from './MovieCard'; // Assuming you have a MovieCard component

const MovieList = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return <div>Aucun film à afficher</div>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};
export default MovieList;
