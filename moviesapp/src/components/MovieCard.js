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

    let gaugeColor = '';
    if (percentage <= 30) {
        gaugeColor = '#ff4c4c';
    } else if (percentage <= 60) {
        gaugeColor = '#ffeb3b';
    } else {
        gaugeColor = '#4caf50';
    }

    return (
        <div className="movie-card">
            <div className="movie-card-top">
                <h2>{movie.title}</h2>
                <p className="movie-category">{movie.category}</p>
            </div>
            <div className="movie-card-bottom">
                <div className="gauge-container">
                    <div className="gauge" style={{width: `${percentage}%`,  backgroundColor: gaugeColor }}></div>
                </div>
                <div className="likedislike">
                    <div>
                        <img className="icon" onClick={handleToggleLike} src="/small-thumb-up-gray.png"/>
                        <p className="counter-like-dislike">{movie.likes}</p>
                    </div>
                    <div>
                        <img className="icon" onClick={handleToggleDislike} src="/small-thumb-down-gray.png"/>
                        <p className="counter-like-dislike">{movie.dislikes}</p>
                    </div>
                </div>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
};

export default MovieCard;