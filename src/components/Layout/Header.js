"use client";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext.js";
import { toEN } from "../contexts/LanguageContext.js";
import { useData } from "../contexts/DataContext.js";

const cities = ["Tbilisi", "Kutaisi", "Batumi", "Zugdidi"];
const statuses = ["", "Student", "Prisoner", "Disabled Person"];
const times = ["Issued in 0 day", "Issued in 1 day", "Issued in 3 days", "Issued in 5 days", "Issued in 10 days"];
const types = ["Electric", "Temporary", "Permanent", "Post"];

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

const Select_GE = ({ old_data, onChange }) => {
  const selects = [
    {
      label: "ელექტრონული",
      options: ["0 - დღიანი", "1 - დღიანი", "3 - დღიანი", "5 - დღიანი", "10 - დღიანი"],
    },
    {
      label: "დროებითი",
      options: ["0 - დღიანი", "1 - დღიანი", "3 - დღიანი", "5 - დღიანი", "10 - დღიანი"],
    },
    {
      label: "მუდმივი",
      options: ["0 - დღიანი", "1 - დღიანი", "3 - დღიანი", "5 - დღიანი", "10 - დღიანი"],
    },
    {
      label: "ფოსტა",
      options: ["0 - დღიანი", "1 - დღიანი", "3 - დღიანი", "5 - დღიანი", "10 - დღიანი"],
    },
  ];

  return selects.map((select, index) => {
    const labelCount = old_data.filter((data) => data.type === toEN(select.label)).length;
    const optionCounts = select.options.map(option => ({
      option,
      count: old_data.filter(data => data.time === toEN(option) && data.type === toEN(select.label)).length
    }));


    return (
      <label key={index} className="block text-sm font-medium text-center mb-2">
        {`${select.label} (${labelCount})`}
        <select
          onChange={(e) => onChange(select.label, e.target.value)}
          className="w-full h-800 px-3 py-2 border rounded-lg dark:border-gray-700 dark:bg-gray-800"
        >
          {optionCounts.map((option, index) => (
            <option key={index} value={option.option}>
              {`${option.option} (${option.count})`}
            </option>
          ))}
        </select>
      </label>
    );
  }
  );
};


const Select_EN = ({ old_data, onChange }) => {
  const selects = [
    {
      label: "Electric",
      options: ["Issued in 0 day", "Issued in 1 day", "Issued in 3 days", "Issued in 5 days", "Issued in 10 days"],
    },
    {
      label: "Temporary",
      options: ["Issued in 0 day", "Issued in 1 day", "Issued in 3 days", "Issued in 5 days", "Issued in 10 days"],
    },
    {
      label: "Permanent",
      options: ["Issued in 0 day", "Issued in 1 day", "Issued in 3 days", "Issued in 5 days", "Issued in 10 days"],
    },
    {
      label: "Post",
      options: ["Issued in 0 day", "Issued in 1 day", "Issued in 3 days", "Issued in 5 days", "Issued in 10 days"],
    },
  ];

  return selects.map((select, index) => {
    const labelCount = old_data.filter((data) => data.type === select.label).length;
    const optionCounts = select.options.map(option => ({
      option,
      count: old_data.filter(data => data.time === option && data.type === select.label).length
    }));

    return (
      <label key={index} className="block text-sm font-medium text-center mb-2">
        {`${select.label} (${labelCount})`}
        <select 
          onChange={(e) => onChange(select.label, e.target.value)}
          className="w-full px-3 py-2 border rounded-lg dark:border-gray-700 dark:bg-gray-800"
        >
          {optionCounts.map((option, index) => (
            <option key={index} value={option.option}>
              {`${option.option} (${option.count})`}
            </option>
          ))}
        </select>
      </label>
    );
  });
};



export default function Header( ) {

  const { setFilters } = useData();

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

  const handleInputChange = (type_val, time_val) => {
    if(lang == "GE")
      {
        type_val = toEN(type_val);
        time_val = toEN(time_val);
      }
    let key_1 = "type";
    let key_2 = "time";

    setFilters((filters) => ({ ...filters, [key_1]: type_val, [key_2]: time_val }));
}

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
        <div className="text-xl flex gap-4">
          {lang === "EN" ? <
            Select_EN old_data={old_data} onChange={handleInputChange} /> :
            <Select_GE old_data={old_data} onChange={handleInputChange} />
          }
        </div>
        <div className="relative flex gap-4">
          <div className="flex items-center gap-2">
          </div>
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
