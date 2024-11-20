import { useState, useEffect } from "react";
import { toGE, toEN} from "../contexts/LanguageContext";

export function useFilter(data, lang) {
    const [filters, setFilters] = useState({ recieve: "", sent: "", document_number: "", private_number: "", name: "", surname: "", city: "", status: "" });
    const [filteredData, setFilteredData] = useState([]);

    const updateFilters = (newFilters) => {
        setFilters(newFilters);
    };

    useEffect(() => {
        // if(lang === "EN"){
            setFilteredData(
                data.filter((item) => {
                    const name = item.name.toLowerCase();
                    return (
                        (filters.recieve === "" || item.recieve === filters.recieve) &&
                        (filters.sent === "" || item.sent === filters.sent) &&
                        (filters.document_number === "" || item.document_number === filters.document_number) &&
                        (filters.private_number === "" || item.private_number === filters.private_number) &&
                        (filters.name === "" || name.includes(filters.name.toLowerCase())) &&
                        (filters.surname === "" || item.surname === filters.surname) &&
                        (filters.city === "" || item.city === filters.city) &&
                        (filters.user_type === "" || item.user_type === filters.user_type)
                    );
                })
            );
        // }
    }, [filters, data]);

    // console.log(filteredData);
    return { filters, updateFilters, filteredData };
}

