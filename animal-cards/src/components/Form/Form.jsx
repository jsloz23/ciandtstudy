import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormDataContext } from "../../context/FormDataContext";
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    type: "Mammal",
    description: "",
  });

  const { addSubmission, animalTypes } = useContext(FormDataContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSubmission(formData);
    setFormData({
      name: "",
      type: "",
      description: "",
    });
    navigate("/");
  };

  return (
    <div className="form">
      <h2>Register Form</h2>
      <form className="formContainer" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="type">Type:</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            {animalTypes.map(({ type }) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Form;
