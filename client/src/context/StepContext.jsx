// StepContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const StepContext = createContext();

export const StepProvider = ({ children }) => {
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('formData');
    return savedData ? JSON.parse(savedData) : {};
  });

  useEffect(() => {
    // console.log("Form being in local storage.");
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const updateFormData = (step, newData) => {
    setFormData((prevData) => ({
      ...prevData,
      [step]: {
        ...prevData[step],
        ...newData,
      },
    }));
  };

  return (
    <StepContext.Provider value={{ formData, updateFormData }}>
      {children}
    </StepContext.Provider>
  );
};

export const useStepData = () => useContext(StepContext);
