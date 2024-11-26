import { useState, useContext } from "react";
import { FormDataContext } from "../../context/FormDataContext";
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    type: "Mammal",
    description: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    type: "",
    description: "",
  });

  const { addSubmission, animalTypes, submissions } =
    useContext(FormDataContext);
  const [successMessage, setSuccessMessage] = useState(""); // State for success message

  // Validate fields individually on change
  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value) return "Name is required.";
        if (
          submissions.some(
            (submission) =>
              submission.name.toLowerCase() === value.toLowerCase()
          )
        ) {
          return "This animal has already been added.";
        }
        return "";
      case "description":
        return value ? "" : "Description is required.";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Update individual field validation on change
    setErrors({
      ...errors,
      [name]: validateField(name, value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Run validations for each field on submit
    const newErrors = {
      name: validateField("name", formData.name),
      type: validateField("type", formData.type),
      description: validateField("description", formData.description),
    };

    // Check if any errors exist
    const hasErrors = Object.values(newErrors).some((error) => error !== "");
    setErrors(newErrors);

    if (!hasErrors) {
      addSubmission(formData);
      setFormData({ name: "", type: "Mammal", description: "" });

      // Display success message
      setSuccessMessage("Successful registration!");

      // Hide the success message after a few seconds (optional)
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000); // Adjust the duration as desired (e.g., 3000ms = 3 seconds)
    }
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
            className={errors.name ? "inputError" : ""}
          />
          {errors.name && <span className="errorText">{errors.name}</span>}
        </div>
        <div>
          <label htmlFor="type">Type:</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className={errors.type ? "inputError" : ""}
          >
            {animalTypes.map(({ type }) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.type && <span className="errorText">{errors.type}</span>}
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={errors.description ? "inputError" : ""}
          ></textarea>
          {errors.description && (
            <span className="errorText">{errors.description}</span>
          )}
        </div>
        <button type="submit">Register</button>
      </form>
      {successMessage && <p className="successMessage">{successMessage}</p>}
    </div>
  );
};

export default Form;
