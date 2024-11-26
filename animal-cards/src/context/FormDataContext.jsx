import { createContext, useEffect, useState } from "react";

// Create a context for managing form submissions
export const FormDataContext = createContext();

export const FormDataProvider = ({ children }) => {
  // Default list of animals to show on first load
  const defaultAnimals = [
    {
      name: "Elephant",
      type: "Mammal",
      description: "Large land animal with a trunk",
    },
    {
      name: "Eagle",
      type: "Bird",
      description: "Bird of prey with excellent vision",
    },
    {
      name: "Frog",
      type: "Amphibian",
      description: "Small creature that can live in water and on land",
    },
    {
      name: "Octopus",
      type: "Invertebrate",
      description: "Sea creature with eight arms",
    },
    {
      name: "Salmon",
      type: "Fish",
      description: "Fish known for swimming upstream",
    },
    {
      name: "Lizard",
      type: "Reptile",
      description: "Cold-blooded animal with scaly skin",
    },
  ];

  const [submissions, setSubmissions] = useState(() => {
    const savedSubmissions = localStorage.getItem("submissions");
    return savedSubmissions ? JSON.parse(savedSubmissions) : defaultAnimals;
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
