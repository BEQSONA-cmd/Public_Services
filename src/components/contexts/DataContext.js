import React, { createContext, useContext } from "react";

// Create the context
const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children, data }) => {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

// Create a custom hook to access the context
export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
