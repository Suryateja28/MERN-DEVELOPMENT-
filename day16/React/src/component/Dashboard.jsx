import React, { useState } from 'react';
import './BookMyShow.css';
import LocationSelector from './LocationSelector';
import MovieCard from './MovieCard';
import SeatBooking from './SeatBooking';

const Dashboard = ({ user, onLogout }) => {
    const [city, setCity] = useState("Mumbai");
    const [selectedMovie, setSelectedMovie] = useState(null);

    const movies = [
        { id: 1, title: "Animal", rating: 8.5, poster: "https://m.media-amazon.com/images/M/MV5BNGViM2M4NmUtMmNkNy00MTQ5LTk5MDUtYjYzMWFlMTI3M2Q1XkEyXkFqcGdeQXVyMTYwMDM3ODk0._V1_.jpg", genre: "Action/Drama", language: "Hindi" },
        { id: 2, title: "Dunki", rating: 7.9, poster: "https://m.media-amazon.com/images/M/MV5BNTliYjlkYjQtMjdlYy00ZGYxLTljMTMtZWRjY2M0YmI5N2I1XkEyXkFqcGdeQXVyMTYwMDM3ODk0._V1_.jpg", genre: "Drama/Comedy", language: "Hindi" },
        { id: 3, title: "Salaar", rating: 8.8, poster: "https://m.media-amazon.com/images/M/MV5BNDZkNTEyM2ItYmQwMS00MGNiLTg0YjAtYmIzNTE2N2U0NTE2XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg", genre: "Action/Thriller", language: "Telugu" },
        { id: 4, title: "Leo", rating: 9.0, poster: "https://m.media-amazon.com/images/M/MV5BMmU5NGQ0N2QsZDk5OS00OTI0LWFhMGYtZGRkYjFmOGY2NGRlXkEyXkFqcGdeQXVyMTYwMDM3ODk0._V1_.jpg", genre: "Action/Drama", language: "Tamil" },
        { id: 5, title: "Fighter", rating: 8.2, poster: "https://m.media-amazon.com/images/M/MV5BNWRhN2E4OGQtMjk5Ny00OTlkLTkyYTUtYzVkZDEwYjFkMGVmXkEyXkFqcGdeQXVyMTYwMDM3ODk0._V1_.jpg", genre: "Action/Adventure", language: "Hindi" },
        { id: 6, title: "Major", rating: 9.2, poster: "https://m.media-amazon.com/images/M/MV5BYzA2Nzk5M2EtNWY4Yi00ZDY4LThlZGUtODkzN2ExZGU1MDYx._V1_.jpg", genre: "Biographical/Action", language: "Telugu" }
    ];

    if (selectedMovie) {
        return <SeatBooking movie={selectedMovie} onBack={() => setSelectedMovie(null)} />;
    }

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <div className="logo">BookMyShow <span className="city-badge">{city}</span></div>
                <div className="user-controls">
                    <span style={{ color: '#94a3b8' }}>Welcome, {user.name}</span>
                    <LocationSelector selectedCity={city} onCityChange={setCity} />
                    <button onClick={onLogout} className="logout-btn">Logout</button>
                </div>
            </header>

            <main>
                <div style={{ padding: '0 40px', marginBottom: '20px' }}>
                    <h2>Recommended Movies in {city}</h2>
                </div>
                <div className="movie-grid">
                    {movies.map(movie => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                            onSelect={setSelectedMovie}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
