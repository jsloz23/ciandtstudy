import { useContext, useState } from "react";
import Box from "../../components/Box/Box";
import SearchAndDisplayCards from "../../components/SearchAndDisplayCards/SearchAndDisplayCards";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./HomePage.css";
import { FormDataContext } from "../../context/FormDataContext";
import Selector from "../../components/Selector/Selector";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState(""); // State to track selected type

  const { animalTypes } = useContext(FormDataContext);

  // Function to handle search input from the SearchBar
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  return (
    <div className="homePageContainer">
      <Box>
        <div className="filters">
          <SearchBar onSearch={handleSearch} />
          <Selector value={selectedType} onChange={handleTypeChange} />
        </div>
        <ul className="animalTypeList">
          {animalTypes.map(({ type, color }) => (
            <li key={type} style={{ color: color }}>
              {type}
            </li>
          ))}
        </ul>
        <SearchAndDisplayCards
          searchQuery={searchQuery}
          filterType={selectedType}
        />
      </Box>
    </div>
  );
};

export default HomePage;
