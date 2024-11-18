"use client";
import { useState } from "react";

const Inputs = () => {
    const inputs = [
        {
            label: "Document Number",
            type: "text",
            placeholder: "Document Number",
        },
        {
            label: "Private Number",
            type: "text",
            placeholder: "Private Number",
        },
        {
            label: "Name",
            type: "text",
            placeholder: "Name",
        },
        {
            label: "Last Name",
            type: "text",
            placeholder: "Last Name",
        },
        {
            label: "Birth Date",
            type: "date",
            placeholder: "Birth Date",
        },
        {
            label: "Pick Region",
            type: "select",
            options: ["Pick Region", "Imereti", "Achara", "Guria", "Samegrelo"],
        },
    ];

    return inputs.map((input, index) => {
        if (input.type === "select") {
            return (
                <label className="block">
                    {input.label}
                    <select className="w-full mt-1 px-3 py-3 border rounded-lg dark:border-gray-700 dark:bg-gray-900">
                        {input.options.map((option, index) => {
                            return <option key={index}>{option}</option>;
                        })}
                    </select>
                </label>
            );
        }

        return (
            <label className="block">
                {input.label}
                <input
                    type={input.type}
                    placeholder={input.placeholder}
                    className="w-full mt-1 px-3 py-2 border rounded-lg dark:border-gray-700 dark:bg-gray-900"
                />
            </label>
        );
    });
};

export default function Header() {
    const [isModalOpen, setModalOpen] = useState(false);

    const openFilterModal = () => setModalOpen(true);
    const closeFilterModal = () => setModalOpen(false);

    return (
        <div>
            {/* Header */}
            <header className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 shadow-md w-full">
                <div className="flex items-center">
                    <a href="/" className="flex items-center space-x-2">
                        <img src="/image.png" alt="Logo" className="h-14" />
                    </a>
                </div>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-64 px-4 py-2 border rounded-lg dark:border-gray-700 dark:bg-gray-800"
                    />
                    <button
                        onClick={openFilterModal}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
                    >
                        &#9881;
                    </button>
                </div>
            </header>

            {/* Modal */}
            {isModalOpen && (
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
                            Search Options
                        </h2>
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Inputs />

                            <div className="col-span-1 md:col-span-2">
                                <button
                                    type="button"
                                    className="w-full bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-purple-700 transform hover:scale-105 transition duration-300"
                                >
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
