import React, { useState } from "react";
import axios from "axios";

function MovieSearch() {
  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");
  const API_KEY = "a3331f75";

  const searchMovie = async () => {
    if (!query) {
      setError("Please enter a movie name");
      return;
    }

    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?t=${query}&apikey=${API_KEY}`
      );
      if (response.data.Response === "False") {
        setError("Movie not found!");
        setMovie(null);
      } else {
        setMovie(response.data);
        setError("");
      }
    } catch (error) {
      setError("Error fetching data");
      console.error(error);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>🎬 Movie Search App</h1>
      <SearchBar query={query} setQuery={setQuery} searchMovie={searchMovie} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {movie && <MovieInfo movie={movie} />}
    </div>
  );
}

function SearchBar({ query, setQuery, searchMovie }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter movie name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchMovie}>Search</button>
    </div>
  );
}

function MovieInfo({ movie }) {
  return (
    <div>
      <h2>
        {movie.Title} ({movie.Year})
      </h2>
      <img src={movie.Poster} alt={movie.Title} />
      <p>
        <strong>Genre:</strong> {movie.Genre}
      </p>
      <p>
        <strong>IMDB Rating:</strong> {movie.imdbRating}
      </p>
      <p>
        <strong>Plot:</strong> {movie.Plot}
      </p>
    </div>
  );
}

export default MovieSearch;
