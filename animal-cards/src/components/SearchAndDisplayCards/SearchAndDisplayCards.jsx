import { useContext } from "react";
import { FormDataContext } from "../../context/FormDataContext";
import Card from "../Card/Card";
import "./SearchAndDisplayCards.css";

const SearchAndDisplayCards = ({ searchQuery, filterType }) => {
  const { submissions } = useContext(FormDataContext); // Access form submissions from context

  // Filter submissions based on searchQuery and filterType
  const filteredSubmissions = submissions.filter((submission) => {
    const matchesSearch = submission.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesType = filterType ? submission.type === filterType : true; // Check type if filterType is selected
    return matchesSearch && matchesType;
  });

  return (
    <div>
      <h2>Submissions</h2>
      <div className="scrollableContainer">
        <div className="cardContainer">
          {filteredSubmissions.length > 0 ? (
            filteredSubmissions.map((submission, index) => (
              <Card
                key={index}
                name={submission.name}
                type={submission.type}
                description={submission.description}
              />
            ))
          ) : (
            <p>No submissions...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchAndDisplayCards;
