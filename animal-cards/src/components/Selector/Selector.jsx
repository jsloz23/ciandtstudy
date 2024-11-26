import { useContext } from "react";
import { FormDataContext } from "../../context/FormDataContext";
import "./Selector.css"; // Optional for styling

const Selector = ({ onChange, value }) => {
  const { animalTypes } = useContext(FormDataContext); // Access animal types from context

  return (
    <div className="selector">
      <select
        id="typeSelector"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Show All (Animal Types)</option>
        {animalTypes.map((animal) => (
          <option key={animal.type} value={animal.type}>
            {animal.type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
