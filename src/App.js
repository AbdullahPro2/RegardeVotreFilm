import React, { useEffect, useState } from "react";
import Header from "./Header";
import "./app.css";
import SearchBar from "./SearchBar";
import Movies from "./Movies";
import Isloading from "./Isloading";
import Footer from "./Footer";
import { Element } from "react-scroll";
document.title = "Regarde Votre Film";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [moviesType, setMoviesType] = useState("popular");
  const [enterPressed, setEnterPressed] = useState(false);
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function FetchMovies() {
      setIsLoading(true);
      if (moviesType !== "discover/tv" && !query) {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${moviesType}?api_key=18aa566d6036615fdac6c68c8a8beece&include_adult=true`
        );
        const data = await res.json();
        setMovies(data.results);
        setIsLoading(false);
      } else if (moviesType === "discover/tv" && !query) {
        const res = await fetch(
          `https://api.themoviedb.org/3/${moviesType}?api_key=18aa566d6036615fdac6c68c8a8beece&include_adult=true`
        );
        const data = await res.json();
        setMovies(data.results);
        setIsLoading(false);
      }
    }

    async function fetchQueryMovie() {
      setIsLoading(true);
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=18aa566d6036615fdac6c68c8a8beece&include_adult=true&query=${query}`
      );
      const data = await res.json();
      setMovies(data.results);
      setIsLoading(false);
    }

    if (enterPressed) {
      if (query) {
        // Execute fetchQueryMovie when enterPressed is true and query is not empty
        fetchQueryMovie();
      }
    } else {
      // Execute FetchMovies when enterPressed is false
      FetchMovies();
    }
    setQuery("");
  }, [moviesType, query, enterPressed]);

  return (
    <div>
      <Header
        onSetMoviesType={setMoviesType}
        OnEnterPressed={setEnterPressed}
        OnSetQuery={setQuery}
      />
      <SearchBar
        className="search-bar"
        onSetValue={setQuery}
        query={query}
        onEnterPress={setEnterPressed}
      />
      {isLoading && <Isloading />}
      {!isLoading && movies.length !== 0 && <Movies movies={movies} />}
      <Element name="footer">
        <Footer />
      </Element>

      <p>
        THisn is just a practing puppose paragrAGH WILL BE REAMOVEDS AND ASDIAJ
        AI UFAJSIOFDJAS FAOFNASO BONKOUR COMMEENT ALLEZ BOUIS. JE VAIS BIEN!
      </p>
    </div>
  );
}

export default App;
