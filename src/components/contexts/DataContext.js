import React, { createContext, useContext } from "react";
import { useState } from "react";

// Create the context
const DataContext = createContext();


export function DataProvider({ children }) {
    const [data, setData] = useState([]);
  
    return (
      <DataContext.Provider value={{ data, setData }}>
        {children}
      </DataContext.Provider>
    );
  }

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
