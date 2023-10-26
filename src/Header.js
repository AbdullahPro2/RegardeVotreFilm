import React, { useState } from "react";
import logo from "./logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

function Header({ onSetMoviesType, OnEnterPressed }) {
  const [active, setActive] = useState(false);

  function handleLiClick(e) {
    setActive(false);
    if (e.target.tagName === "LI") {
      if (
        e.target.getAttribute("value") === "popular" ||
        e.target.getAttribute("value") === "upcoming" ||
        e.target.getAttribute("value") === "now_playing" ||
        e.target.getAttribute("value") === "top_rated" ||
        e.target.getAttribute("value") === "discover/tv"
      ) {
        OnEnterPressed(false);
        onSetMoviesType(e.target.getAttribute("value"));
      }
    }
  }
  return (
    <header className={`header ${active ? "active" : ""}`}>
      <img className="logo" src={logo} alt="Logo" />
      <nav className="nav-bar">
        <ul className="nav-list" onClick={(e) => handleLiClick(e)}>
          <li value="popular">Popular</li>
          <li value="upcoming">Upcomming</li>
          <li value="now_playing">Now Playing</li>
          <li value="top_rated">Top Rated</li>
          <li value="discover/tv">Tv Serials</li>
          <Link to="footer" smooth={true} duration={500}>
            <li onClick={() => setActive(false)}>About Us</li>
          </Link>
          <Link to="footer" smooth={true} duration={500}>
            <li onClick={() => setActive(false)}>Contact</li>
          </Link>
        </ul>{" "}
      </nav>
      <button
        className="nav-buttons"
        onClick={() => setActive((prev) => !prev)}
      >
        <FontAwesomeIcon
          icon={faBars}
          className={`nav-bars-icon nav-icons ${active ? "navbar-icon" : " "}`}
        />
        <FontAwesomeIcon
          icon={faX}
          className={`nav-x-icon nav-icons ${active ? " " : "navbar-x"}`}
        />
      </button>
    </header>
  );
}

export default Header;
