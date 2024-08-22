import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import { setMovies } from '../redux/actions';
import { movies$ } from '../movies';
import './MovieList.css'

const MovieList = () => {
  const dispatch = useDispatch();
  const { movies, filter, pageSize, currentPage } = useSelector(state => state);

  useEffect(() => {
    movies$.then(data => dispatch(setMovies(data)));
  }, [dispatch]);

  const filteredMovies = filter.length === 0 
    ? movies 
    : movies.filter(movie => filter.includes(movie.category));

  const paginatedMovies = filteredMovies.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="movie-list">
      {paginatedMovies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      {/* Pagination controls would go here */}
    </div>
  );
};

export default MovieList;
