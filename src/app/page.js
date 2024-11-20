"use client";

import React, { useEffect, useState } from "react";
import DataTable from "@/components/Body/DataTable";
import { useLanguage } from "@/components/contexts/LanguageContext.js";
import { useFilter } from "@/components/contexts/UseFilter.js";
import FilterContainer from "@/components/Body/FilterContainer";
import { Get_Data } from "@/components/Layout/Header.js";

const data = Get_Data();

export default function Home() 
{
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