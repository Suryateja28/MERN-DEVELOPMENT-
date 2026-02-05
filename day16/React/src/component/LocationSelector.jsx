import React from 'react';

const LocationSelector = ({ selectedCity, onCityChange }) => {
    const cities = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Pune", "Chennai", "Kolkata"];

    return (
        <div className="location-container">
            <select
                className="location-selector"
                value={selectedCity}
                onChange={(e) => onCityChange(e.target.value)}
            >
                {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                ))}
            </select>
        </div>
    );
};

export default LocationSelector;
