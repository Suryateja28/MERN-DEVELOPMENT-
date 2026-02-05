import React from 'react';

const MovieCard = ({ movie, onSelect }) => {
    const handleImageError = (e) => {
        e.target.src = `https://via.placeholder.com/300x450/2b2d3d/ffffff?text=${encodeURIComponent(movie.title)}`;
    };

    return (
        <div className="movie-card" onClick={() => onSelect(movie)}>
            <img
                src={movie.poster}
                alt={movie.title}
                className="movie-poster"
                onError={handleImageError}
            />
            <div className="movie-info">
                <div className="movie-title">{movie.title}</div>
                <div className="movie-rating">
                    <span>★</span> {movie.rating}/10
                </div>
                <div style={{ fontSize: '0.8rem', color: '#999', marginTop: '5px' }}>
                    {movie.language} • {movie.genre}
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
