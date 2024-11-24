"use client";
import FilterModal from "./Modal.js";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext.js";
import { useData } from "../contexts/DataContext.js";

const cities = ["Tbilisi", "Kutaisi", "Batumi", "Zugdidi"];
const statuses = ["", "Student", "Prisoner", "Disabled Person"];
const times = ["Issued in 0 day", "Issued in 1 day", "Issued in 3 days", "Issued in 5 days", "Issued in 10 days"];
const types = ["", "Electric", "Temporary", "Permanent", "Post"];

import nameData from "@/assets/data.json";

const names = nameData.W_names.concat(nameData.M_names);
const surnames = nameData.surnames;

function Generate_Data(num) 
{
  const data = [];
  for (let i = 0; i < num; i++) {
    const random11DigitString = () => Math.floor(10000000000 + Math.random() * 90000000000).toString();
    const ran = (min, max) => {
      const number = Math.floor(Math.random() * (max - min + 1) + min);
      return number < 10 ? `0${number}` : number.toString();
    };
    data.push({
      recieve: `${ran(1, 28)}/${ran(1, 12)}/2024`,
      sent: `${ran(1, 28)}/${ran(1, 12)}/2024`,
      document_number: random11DigitString(),
      private_number: random11DigitString(),
      name: names[Math.floor(Math.random() * names.length)],
      surname: surnames[Math.floor(Math.random() * surnames.length)],
      city: cities[Math.floor(Math.random() * cities.length)],
      status: statuses[Math.floor(Math.random() * statuses.length)],
      time: times[Math.floor(Math.random() * times.length)],
      type: types[Math.floor(Math.random() * types.length)],
    });
  }
  return data;
}


export default function Header( ) {

  // const { updateFilters, filteredData } = useFilter(lang);

  const { updateData } = useData();
  const { lang, toggleLanguage } = useLanguage();
  const [numRecords, setNumRecords] = useState(0);

  const old_data = useData().data;
  const handleGenerateData = () => {
    if(numRecords > 100000)
    {
      alert("Number of records should be less than 100000");
      return;
    }
    const data = Generate_Data(numRecords);
    updateData(data);
  };

  const [isDarkMode, setIsDarkMode] = useState(false);


  const toggleTheme = () => {
    const htmlElement = document.documentElement;
    if (htmlElement.classList.contains("dark")) {
      htmlElement.classList.remove("dark");
      setIsDarkMode(false)
    } else {
      htmlElement.classList.add("dark");
      setIsDarkMode(true);
    }
  };


  return (
    <div>
      <header className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 shadow-md w-full border-b border-black">
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2">
            <img src="/image.png" alt="Logo" className="h-14 w-1000" />
          </a>
        </div>
        <div className="relative flex gap-4">
          <div className="flex items-center gap-2">
          <button onClick
            className="bg-gray-200 text-black font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-400 transform hover:scale-105 transition duration-300"
          >
            {lang === "EN" ? "Electric" : "ელექტრონული"} {old_data.filter((item) => item.type === "Electric").length}
          </button>
            <button
              className="bg-gray-200 text-black font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-400 transform hover:scale-105 transition duration-300"
            >
              {lang === "EN" ? "Temporary" : "დროებითი"} {old_data.filter((item) => item.type === "Temporary").length}
            </button>
            <button
              className="bg-gray-200 text-black font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-400 transform hover:scale-105 transition duration-300"
            >
              {lang === "EN" ? "Permanent" : "მუდმივი"} {old_data.filter((item) => item.type === "Permanent").length}
            </button>
            <button
              className="bg-gray-200 text-black font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-400 transform hover:scale-105 transition duration-300"
            >
              {lang === "EN" ? "Post" : "ფოსტა"} {old_data.filter((item) => item.type === "Post").length}
            </button>
          </div>
          {/* electric, temporary, permanent, post */}

          <div className="flex items-center gap-2">
            <input
              type="text"
              value={numRecords}
              onChange={(e) => setNumRecords(e.target.value)}
              placeholder={lang === "EN" ? "Number" : "რაოდენობა"}
              className="w-28 px-4 py-2 border rounded-lg dark:border-gray-700 dark:bg-gray-800"
            />
            <button
              onClick={handleGenerateData}
              className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transform hover:scale-105 transition duration-300"
            >
              {lang === "EN" ? "Generate" : "შექმნა"}
            </button>
          </div>
          <button
            onClick={toggleLanguage}
            className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 transform hover:scale-105 transition duration-300"
          >
            {lang === "EN" ? "GE" : "EN"}
          </button>
          <button
            onClick={toggleTheme}
            className="bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-700 transform hover:scale-105 transition duration-300"
          >
            {isDarkMode ? "Light" : "Dark"}
          </button>
        </div>
      </header>
    </div>
  );
}
