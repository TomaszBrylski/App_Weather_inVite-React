import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ onSearch }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      onSearch(event.target.value);
    }
  };

  const handleInput = (event) => {
    event.target.value = event.target.value.replace(/[^a-zA-Z\s]/g, "");
  };

  const handleClick = () => {
    onSearch(inputRef.current.value);
  };

  return (
    <div className="search">
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter city name"
        spellCheck="false"
        onKeyUp={handleKeyUp}
        onInput={handleInput}
      />
      <button onClick={handleClick}>
        <img src="./images/search.png" alt="search" />
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
