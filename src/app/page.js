"use client";

import React, { useEffect, useState } from "react";
import DataTable from "@/components/Body/DataTable";
import { useLanguage } from "@/components/contexts/LanguageContext.js";
import { useFilter } from "@/components/contexts/UseFilter.js";
import FilterContainer from "@/components/Body/FilterContainer";

const data = [];
const cities = ["Tbilisi", "Kutaisi", "Batumi"];
const statuses = ["Standart User", "Student", "Prisoner", "Disabled Person"];


for(var i = 0; i < 10; i++)
{
    data.push({
        recieve: `2024-11-${String(i + 1).padStart(2, "0")}`,
        sent: `2024-11-${String(i + 1).padStart(2, "0")}`,
        document_number: Math.floor(10000000000 + Math.random() * 90000000000),
        private_number: Math.floor(10000000000 + Math.random() * 90000000000),
        name: `Name ${i + 1}`,
        surname: `Surname ${i + 1}`,
        city: cities[Math.floor(Math.random() * cities.length)],
        status: statuses[Math.floor(Math.random() * statuses.length)]
    });
}

export default function Home() {
    const { lang } = useLanguage();
    const { updateFilters, filteredData } = useFilter(data);

    return (
        <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 flex justify-center">
            <div className="">
                <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                    {lang === "EN" ? "Public Services" : "სახელმწიფო სერვისები"}
                </h1>
                <FilterContainer 
                    onFilterChange={updateFilters}
                    lang={lang}
                />
                <DataTable 
                    data={filteredData}
                    lang={lang}
                    />
            </div>
        </div>
    );
}
