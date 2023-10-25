import { useState } from "react";

function Movie({ movie }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onClick={() => setIsOpen((prev) => !prev)}
      className={`movie-container ${isOpen ? "is-open" : " "}`}
    >
      <img
        src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
        alt={movie.original_title}
        className="moive-img"
      />
      {isOpen && (
        <div className="movie-click-container">
          <p className="movie-name">
            <strong className="strong">
              {movie.original_title} {movie.name}
            </strong>
          </p>
          <p className="movie-description">
            Description: <strong className="strong">{movie.overview}</strong>
          </p>
          <p className="movie-imbd">
            IMBD rating:{" "}
            <strong className="strong">{movie.vote_average}</strong>
          </p>
          <p className="movie-release-date">
            Released on:{" "}
            <strong className="strong"> {movie.release_date}</strong>
          </p>
        </div>
      )}
    </div>
  );
}

export default Movie;
