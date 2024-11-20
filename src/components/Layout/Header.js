"use client";
import FilterModal from "./Modal.js";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext.js";

const cities = ["Tbilisi", "Kutaisi", "Batumi", "Zugdidi"];
const statuses = ["Standart User", "Student", "Prisoner", "Disabled Person"];
const times = ["Issued in 1 day", "Issued in 3 days", "Issued in 10 days"];

function Set_Data(data, num) 
{
  data.length = 0;
  for (let i = 0; i < num; i++) {
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
}

export default function Header( ) {
  const { lang, toggleLanguage } = useLanguage();
  const [isModalOpen, setModalOpen] = useState(false);
  const [numRecords, setNumRecords] = useState(0);

  const openFilterModal = () => setModalOpen(true);
  const closeFilterModal = () => setModalOpen(false);
  const handleGenerateData = () => {
    console.log("generated data" + numRecords);
    Set_Data(data, numRecords);
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
          <div className="relative">
            <input
              type="text"
              placeholder={lang === "EN" ? "Search" : "ძებნა"}
              className="w-96 px-4 py-2 border rounded-lg dark:border-gray-700 dark:bg-gray-800"
            />
            <button
              onClick={openFilterModal}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
            >
              &#9881;
            </button>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={numRecords}
              onChange={(e) => setNumRecords(e.target.value)}
              placeholder={lang === "EN" ? "Number of Records" : "ჩანაწერების რაოდენობა"}
              className="w-28 px-2 py-1 border rounded-lg dark:border-gray-700 dark:bg-gray-800"
            />
            <button
              onClick={handleGenerateData}
              className="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-700 transform hover:scale-105 transition duration-300"
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
        </div>
      </header>
      <FilterModal
        isModalOpen={isModalOpen}
        closeFilterModal={closeFilterModal}
        lang={lang}
      />
    </div>
  );
}