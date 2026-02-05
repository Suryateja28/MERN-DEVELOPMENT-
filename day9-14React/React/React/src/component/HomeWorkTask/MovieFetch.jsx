import React, { useState, useEffect } from "react";

function MovieFetch() {
    const [movies, setMovies] = useState([]);
    const [searchName, setSearchName] = useState("");

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const res = await fetch("https://freetestapi.com/api/v1/movies");
                const data = await res.json();
                console.log("data", data);
                setMovies(data);
            } catch (err) {
                console.log(err);
            }  
        };

        fetchMovies();
    }, []);

    const filterData = movies.filter((movie) => {
        return movie.title.toLowerCase().includes(searchName.toLowerCase())
    })

    return (
        <div style={{ margin: "50px", textAlign: "center" }}>
            <h2 style={{ color: "#333", marginBottom: "20px" }}>Movie Gallery</h2>
            <input
                type="text"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                placeholder="Search by movie title..."
                style={{
                    padding: "12px",
                    marginBottom: "30px",
                    width: "60%",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    fontSize: "16px"
                }}
            />
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "20px",
                padding: "20px"
            }}>
                {filterData.map((movie) => (
                    <div
                        key={movie.id}
                        style={{
                            border: "1px solid #ddd",
                            borderRadius: "10px",
                            padding: "15px",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                            backgroundColor: "white",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            transition: "transform 0.2s"
                        }}
                    >
                        <img
                            src={movie.poster}
                            alt={movie.title}
                            style={{
                                width: "100%",
                                height: "300px",
                                objectFit: "cover",
                                borderRadius: "8px",
                                marginBottom: "10px"
                            }}
                        />
                        <h3 style={{ margin: "10px 0", color: "#2c3e50" }}>{movie.title}</h3>
                        <div style={{ width: "100%", textAlign: "left", paddingLeft: "10px", color: "#555" }}>
                            <p><strong>Year:</strong> {movie.year}</p>
                            <p><strong>Rating:</strong> {movie.rating} ⭐</p>
                            <p><strong>Language:</strong> {movie.language} </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MovieFetch;
