import { useContext } from "react";
import { FormDataContext } from "../../context/FormDataContext";
import Card from "../Card/Card";
import "./SearchAndDisplayCards.css";

const SearchAndDisplayCards = ({ searchQuery }) => {
  const { submissions } = useContext(FormDataContext); // Access form submissions from context

  // Filter submissions based on searchQuery
  const filteredSubmissions = submissions.filter((submission) =>
    submission.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Submissions</h2>
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
  );
};

export default SearchAndDisplayCards;