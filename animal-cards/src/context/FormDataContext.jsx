import { createContext, useEffect, useState } from "react";

// Create a context for managing form submissions
export const FormDataContext = createContext();

export const FormDataProvider = ({ children }) => {
  const [submissions, setSubmissions] = useState(() => {
    const savedSubmissions = localStorage.getItem("submissions");
    return savedSubmissions ? JSON.parse(savedSubmissions) : [];
  });

  useEffect(() => {
    localStorage.setItem("submissions", JSON.stringify(submissions));
  }, [submissions]);

  const animalTypes = [
    { type: "Mammal", color: "brown" },
    { type: "Bird", color: "skyblue" },
    { type: "Amphibian", color: "green" },
    { type: "Invertebrate", color: "orange" },
    { type: "Fish", color: "blue" },
    { type: "Reptile", color: "olive" },
  ];

  //Add a new form submission to the existing list
  const addSubmission = (formData) => {
    setSubmissions((prevSubmissions) => [...prevSubmissions, formData]);
  };

  return (
    <FormDataContext.Provider
      value={{ submissions, addSubmission, animalTypes }}
    >
      {children}
    </FormDataContext.Provider>
  );
};
