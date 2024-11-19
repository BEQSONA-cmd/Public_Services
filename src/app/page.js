"use client";

import React, { useEffect, useState } from "react";
import DataTable from "@/components/Body/DataTable";
import { useLanguage } from "@/components/contexts/LanguageContext.js";


const Inputs = ({onChange}) => {
    const inputs = [
        {
            label: "Name",
            type: "text",
            placeholder: "Name",
        },
        {
            label: "Surname",
            type: "text",
            placeholder: "Surname",
        },
        {
            label: "Document Number",
            type: "text",
            placeholder: "Document Number",
        },
        {
            label: "Personal Number",
            type: "text",
            placeholder: "Personal Number",
        },
        {
            label: "Region",
            type: "select",
            options: [
                "Select Region",
                "Imereti",
                "Achara",
                "Guria",
                "Samegrelo",
            ],
        },
        {
            label: "City",
            type: "select",
            options: [
                "Select City",
                "Kutaisi",
                "Batumi",
                "Tbilisi",
                "Zugdidi",
            ],
        },
        {
            label: "Document Type",
            type: "select",
            options: ["Internal Document", "Foreign Service"],
        },
        {
            label: "User Type",
            type: "select",
            options: [
                "All",
                "Standart User",
                "Student",
                "Pensioner",
                "Disabled Person",
            ],
        },
    ];

    return inputs.map((input, index) => {

        if(input.type === "select"){
            return (
                <label key={index} className="block text-sm font-medium">
                    {input.label}
                    <select
                        onChange={(e) => onChange(input.label.toLowerCase().replace(" ","_"), e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg dark:border-gray-700 dark:bg-gray-800"
                    >
                        {input.options.map((option, index) => (
                            <option key={index}>{option}</option>
                        ))}
                    </select>
                </label>
            );
        }

        return (
            <label key={index} className="block text-sm font-medium">
                {input.label}
                <input
                    onChange={(e) => onChange(input.label.toLowerCase().replace(" ","_"), e.target.value)}
                    type={input.type}
                    className="w-full px-3 py-2 border rounded-lg dark:border-gray-700 dark:bg-gray-800"
                    placeholder={input.placeholder}
                />
            </label>
        );
    });
};


function FilterContainer({ onFilterChange }) {
    const handleInputChange = (key, value) => {
        if(value === "Select Region" || value === "Select City" || value === "All") value = "";

        onFilterChange((prev) => ({ ...prev, [key]: value }));
    }

    return (
        <section className="w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">Filters</h2>
            <form className="grid grid-cols-4 gap-4">
                <Inputs onChange={handleInputChange}/>
            </form>
        </section>
    );
}

const data = [];

const regions = ["Imereti", "Achara", "Guria"];
const cities = ["Tbilisi", "Kutaisi", "Batumi"];
const statuses = ["Standart User", "Student", "Pensioner", "Disabled Person"];

for(var i = 0; i < 10; i++){
    data.push({
        date: `2024-11-${String(i + 1).padStart(2, "0")}`,
        name: `Name${i + 1}`,
        region: regions[i % 3],
        city: cities[i % 3],
        user_type: statuses[i % 4],
    });
}

export default function Home() {
    // const lang = "EN";
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
                    {lang === "EN" ? "Public Services" : "საჯარო სერვისები"}
                </h1>
                <FilterContainer onFilterChange={handleFilterChange} />
                <DataTable data={filteredData} />
            </div>
        </div>
    );
}
