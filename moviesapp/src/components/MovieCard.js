import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteMovie, toggleDislike, toggleLike} from '../redux/actions';
import './MovieCard.css'

const MovieCard = ({ movie }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteMovie(movie.id));
    };

    const handleToggleDislike = () => {
        dispatch(toggleDislike(movie.id));
    };

    const handleToggleLike = () => {
        dispatch(toggleLike(movie.id));
    };

    const total = movie.likes + movie.dislikes;
    const percentage = total === 0 ? 0 : (movie.likes / total) * 100;

    return (
        <div className="movie-card">
            <h2>{movie.title}</h2>
            <p>{movie.category}</p>
            <div className="gauge-container">
                <div className="gauge" style={{width: `${percentage}%`}}></div>
            </div>
            <button onClick={handleDelete}>Delete</button>
            <div className="likedislike">
                <img className="icon" onClick={handleToggleLike} src="/thumb-up-white.png"/>
                <img className="icon" onClick={handleToggleDislike} src="/thumb-down-white.png"/>
            </div>
        </div>
    );
};

export default MovieCard;