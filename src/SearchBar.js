import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

// make sure to install
// npm install --save @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons

const searchIcon = {
  position: "absolute",
  left: "10px",
  top: "50%",
  transform: "translateY(-50%)",
  color: " #555",
  fontSize: "inherit",
};
function SearchBar({ onSetValue, className, onEnterPress, query }) {
  const [inputValue, setInputValue] = useState(query);
  const inputContainer = {
    display: "flex",
    position: "relative",
  };
  const searchInput = {
    outline: "none",
    textAlign: "center",
    width: "calc(80% + 20%)",
  };
  useEffect(
    function () {
      function handleChange(e) {
        if (e.key === "Enter") {
          e.preventDefault();
          onSetValue(inputValue);
          onEnterPress(true);
        }
      }
      document.addEventListener("keydown", handleChange);
      return function () {
        document.removeEventListener("keydown", handleChange);
      };
    },
    [inputValue, onSetValue, onEnterPress]
  );

  return (
    <form style={inputContainer} className={`${className} `}>
      <FontAwesomeIcon icon={faMagnifyingGlass} style={searchIcon} />
      <input
        type="text"
        style={searchInput}
        value={inputValue}
        placeholder="search..."
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
}

export default SearchBar;
