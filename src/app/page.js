"use client";

import React, { useEffect, useState } from "react";
import DataTable from "@/components/Body/DataTable";
import { useLanguage } from "@/components/contexts/LanguageContext.js";
import FilterContainer from "@/components/Body/FilterContainer";

const data = [];
const regions = ["Imereti", "Achara", "Guria"];
const cities = ["Tbilisi", "Kutaisi", "Batumi"];
const statuses = ["Standart User", "Student", "Pensioner", "Disabled Person"];

for(var i = 0; i < 10; i++)
{
    data.push({
        date: `2024-11-${String(i + 1).padStart(2, "0")}`,
        name: `Name${i + 1}`,
        region: regions[i % 3],
        city: cities[i % 3],
        user_type: statuses[i % 4],
    });
}

export default function Home() {
    const { lang } = useLanguage();
    const [filters, setFilters] = useState({ region: "", name: "", surname: "", city: "", user_type: "" });
    const [filteredData, setFilteredData] = useState([]);

    const handleFilterChange = (newFilters) => {
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
    }, [filters]);

    return (
        <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 flex justify-center">
            <div className="max-w-screen-lg w-full">
                <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                    {lang === "EN" ? "Public Services" : "სახელმწიფო სერვისები"}
                </h1>
                <FilterContainer 
                    onFilterChange={handleFilterChange} 
                    lang={lang}
                />
                <DataTable data={filteredData} />
            </div>
        </div>
    );
}
