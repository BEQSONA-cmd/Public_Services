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
                    const document_number = item.document_number.toLowerCase();
                    const private_number = item.private_number.toLowerCase();
                    const surname = item.surname.toLowerCase();
                    const name = item.name.toLowerCase();
                    return (
                        (filters.recieve === "" || item.recieve === filters.recieve) &&
                        (filters.sent === "" || item.sent === filters.sent) &&
                        (filters.document_number === "" || document_number.includes(filters.document_number.toLowerCase())) &&
                        (filters.private_number === "" || private_number.includes(filters.private_number.toLowerCase())) &&
                        (filters.surname === "" || surname.includes(filters.surname.toLowerCase())) &&
                        (filters.name === "" || name.includes(filters.name.toLowerCase())) &&
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

