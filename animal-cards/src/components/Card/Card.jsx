import "./Card.css";
import { useContext } from "react";
import { FormDataContext } from "../../context/FormDataContext";

const Card = ({ name, type, description }) => {
  const { animalTypes } = useContext(FormDataContext);

  const animalType = animalTypes.find((animal) => animal.type === type);
  const borderColor = animalType ? animalType.color : "red";

  return (
    <div className="card">
      <h3 className="cardTitle">{name}</h3>
      <hr className="animalTypeColor" style={{ borderColor }} />
      <p>
        <strong>Type:</strong> {type}
      </p>
      <p>
        <strong>Description:</strong> {description}
      </p>
    </div>
  );
};

export default Card;
