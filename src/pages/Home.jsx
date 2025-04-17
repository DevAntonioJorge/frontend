import MovieCard from "../components/MovieCard";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "Teste1", release_date: "1000" },
    { id: 2, title: "Teste2", release_date: "2000" },
    { id: 3, title: "Teste3", release_date: "3000" },
  ];
  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
  };
  return (
    <>
      <div className="home">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Pesquise um filme..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
        <button type="submit" className="search-btn">
          Pesquisar
        </button>
        <div className="movies-grid">
          {movies.map(
            (movie) =>
              movie.title.toLowerCase().startsWith(searchQuery) && (
                <MovieCard movie={movie} key={movie.id} />
              )
          )}
        </div>
      </div>
    </>
  );
}
