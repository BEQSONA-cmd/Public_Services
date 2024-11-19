import React from 'react';

export default function FilterModal({ isModalOpen, closeFilterModal, Inputs , lang }) {

    lang === "Ge" ? console.log("დეტალური ძებნა") : console.log("Search Options");

    if (!isModalOpen) return null;
    return (
        <div
            className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50"
            id="filterModal"
        >
            <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-2xl">
                <button
                    className="absolute top-2 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
                    onClick={closeFilterModal}
                    id="closeModal"
                >
                    &times; {/* Close Icon */}
                </button>
                <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                    {lang === "EN" ? "Search Options" : "დეტალური ძებნა"}
                </h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[500px] overflow-auto custom-scrollbar">
                    <Inputs />

                    <div className="col-span-1 md:col-span-2">
                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-purple-700 transform hover:scale-105 transition duration-300"
                        >
                            {lang === "EN" ? "Search" : "ძებნა"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}