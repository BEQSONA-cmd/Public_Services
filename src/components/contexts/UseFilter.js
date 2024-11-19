import { useState, useEffect } from "react";

export function useFilter(data) {
    const [filters, setFilters] = useState({ region: "", name: "", surname: "", city: "", user_type: "" });
    const [filteredData, setFilteredData] = useState([]);

    const updateFilters = (newFilters) => {
        setFilters(newFilters);
    };

    useEffect(() => {
        setFilteredData(
            data.filter((item) => {
                const name = item.name.toLowerCase();
                return (
                    (filters.name === "" || name.includes(filters.name.toLowerCase())) &&
                    (filters.surname === "" || item.surname === filters.surname) &&
                    (filters.region === "" || item.region === filters.region) &&
                    (filters.city === "" || item.city === filters.city) &&
                    (filters.user_type === "" || item.user_type === filters.user_type)
                );
            })
        );
    }, [filters, data]);

    return { filters, updateFilters, filteredData };
}

