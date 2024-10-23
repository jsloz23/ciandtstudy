import { useContext, useState } from "react";
import Box from "../../components/Box/Box";
import SearchAndDisplayCards from "../../components/SearchAndDisplayCards/SearchAndDisplayCards";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./HomePage.css";
import { FormDataContext } from "../../context/FormDataContext";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { animalTypes } = useContext(FormDataContext);

  // Function to handle search input from the SearchBar
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="homePageContainer">
      <Box>
        <SearchBar onSearch={handleSearch} />
        <ul className="animalTypeList">
          {animalTypes.map(({ type, color }) => (
            <li key={type} style={{ color: color }}>
              {type}
            </li>
          ))}
        </ul>
        <SearchAndDisplayCards searchQuery={searchQuery} />
      </Box>
    </div>
  );
};

export default HomePage;
