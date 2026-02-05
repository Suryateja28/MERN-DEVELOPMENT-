import React, { useState } from 'react';

const SeatBooking = ({ movie, onBack }) => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const seatPrice = 250;

    // Mock occupied seats
    const occupiedSeats = [3, 8, 15, 24, 32, 45];
    const totalSeats = 64;

    const toggleSeat = (index) => {
        if (occupiedSeats.includes(index)) return;

        if (selectedSeats.includes(index)) {
            setSelectedSeats(selectedSeats.filter(s => s !== index));
        } else {
            setSelectedSeats([...selectedSeats, index]);
        }
    };

    const handleBooking = () => {
        alert(`Successfully booked ${selectedSeats.length} seats for ${movie.title}!\nTotal Amount: ₹${selectedSeats.length * seatPrice}`);
        onBack();
    };

    return (
        <div className="booking-container">
            <button className="back-btn" onClick={onBack}>← Back to Movies</button>

            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h2 style={{ color: 'var(--bms-red)' }}>{movie.title}</h2>
                <p style={{ color: '#999' }}>{movie.language} • {movie.genre}</p>
            </div>

            <div className="legend">
                <div className="legend-item"><div className="seat"></div> Available</div>
                <div className="legend-item"><div className="seat selected"></div> Selected</div>
                <div className="legend-item"><div className="seat occupied"></div> Occupied</div>
            </div>

            <div className="screen"></div>

            <div className="seats-grid">
                {[...Array(totalSeats)].map((_, i) => (
                    <div
                        key={i}
                        className={`seat ${selectedSeats.includes(i) ? 'selected' : ''} ${occupiedSeats.includes(i) ? 'occupied' : ''}`}
                        onClick={() => toggleSeat(i)}
                    ></div>
                ))}
            </div>

            <div className="booking-summary">
                <p>Selected Seats: <span style={{ color: 'var(--bms-red)', fontWeight: 'bold' }}>{selectedSeats.length}</span></p>
                <p>Total Price: <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>₹{selectedSeats.length * seatPrice}</span></p>
                <button
                    className="book-btn"
                    disabled={selectedSeats.length === 0}
                    onClick={handleBooking}
                >
                    Confirm Booking
                </button>
            </div>
        </div>
    );
};

export default SeatBooking;
