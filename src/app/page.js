"use client";

import React, { useEffect, useState } from "react";
import DataTable from "@/components/Body/DataTable";
import { useLanguage } from "@/components/contexts/LanguageContext.js";
import { useFilter } from "@/components/contexts/UseFilter.js";
import FilterContainer from "@/components/Body/FilterContainer";

const data = [];
const cities = ["Tbilisi", "Kutaisi", "Batumi", "Zugdidi"];
const statuses = ["Standart User", "Student", "Prisoner", "Disabled Person"];
const times = ["Issued in 1 day", "Issued in 3 days", "Issued in 10 days"];

for (let i = 0; i < 1000; i++) {
    const random11DigitString = () => Math.floor(10000000000 + Math.random() * 90000000000).toString();
    const ran = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    data.push({
        recieve: `2024-${ran(1, 12)}-${ran(1, 28)}`,
        sent: `2024-${ran(1, 12)}-${ran(1, 28)}`,
        document_number: random11DigitString(),
        private_number: random11DigitString(),
        name: `Name ${i + 1}`,
        surname: `Surname ${i + 1}`,
        city: cities[Math.floor(Math.random() * cities.length)],
        status: statuses[Math.floor(Math.random() * statuses.length)],
        time: times[Math.floor(Math.random() * times.length)]
    });
}

export default function Home() {
    const { lang } = useLanguage();
    const { updateFilters, filteredData } = useFilter(data, lang);

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
