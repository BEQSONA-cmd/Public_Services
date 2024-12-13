"use client";
import React, { createContext, useState, useContext, useEffect } from "react";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [filters, setFilters] = useState({
    recieve: "",
    sent: "",
    document_number: "",
    private_number: "",
    name: "",
    surname: "",
    city: "",
    status: "",
    time: "",
    type: "",
  });

  useEffect(() => {
    if (Array.isArray(data)) {
      setFilteredData(
        data.filter((item) => {
          const document_number = item.document_number ? item.document_number.toLowerCase() : "";
          const private_number = item.private_number ? item.private_number.toLowerCase() : "";
          const surname = item.surname ? item.surname.toLowerCase() : "";
          const name = item.name ? item.name.toLowerCase() : "";
  
          return (
            (filters.recieve === "" || item.recieve === filters.recieve) &&
            (filters.sent === "" || item.sent === filters.sent) &&
            (filters.document_number === "" || document_number.includes(filters.document_number.toLowerCase())) &&
            (filters.private_number === "" || private_number.includes(filters.private_number.toLowerCase())) &&
            (filters.surname === "" || surname.includes(filters.surname.toLowerCase())) &&
            (filters.name === "" || name.includes(filters.name.toLowerCase())) &&
            (filters.city === "" || item.city === filters.city) &&
            (filters.status === "" || item.status === filters.status) &&
            (filters.time === "" || item.time === filters.time) &&
            (filters.type === "" || item.type === filters.type)
          );
        })
      );
    }
  }, [filters, data]);


  const updateData = (newData) => {
    setData(newData);
  };
  

  return (
    <DataContext.Provider value={{ data, updateData, filteredData, filters, setFilters }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
