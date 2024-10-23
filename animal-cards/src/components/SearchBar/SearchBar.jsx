import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    } else {
      onSearch("");
    }
  };

  return (
    <div className="searchBarContainer">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search by name..."
      />
      <button onClick={handleSearch}>Enter</button>
    </div>
  );
};

export default SearchBar;
