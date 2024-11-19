"use client";
import FilterModal from "./Modal.js";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext.js";

export default function Header() {

    const { lang, toggleLanguage } = useLanguage();
    const [isModalOpen, setModalOpen] = useState(false);

  const openFilterModal = () => setModalOpen(true);
  const closeFilterModal = () => setModalOpen(false);

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
