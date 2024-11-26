import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery); // Call onSearch immediately as user types
  };

  return (
    <div className="searchBarContainer">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search by name..."
      />
    </div>
  );
};

export default SearchBar;
