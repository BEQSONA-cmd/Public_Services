"use client";
import FilterModal from "./Modal.js";
import { useState } from "react";

const Inputs_GE = () => {
    const inputs = [
        {
            label: "სახელი",
            type: "text",
            placeholder: "სახელი",
        },
        {
            label: "გვარი",
            type: "text",
            placeholder: "გვარი",
        },
        {
            label: "დოკუმენტის ნომერი",
            type: "text",
            placeholder: "დოკუმენტის ნომერი",
        },
        {
            label: "პირადი ნომერი",
            type: "text",
            placeholder: "პირადი ნომერი",
        },
        {
            label: "დაბადების თარიღი",
            type: "date",
            placeholder: "დაბადების თარიღი",
        },
        {
            label: "აირჩიეთ რეგიონი",
            type: "select",
            options: [
                "აირჩიეთ რეგიონი",
                "იმერეთი",
                "აჭარა",
                "გურია",
                "სამეგრელო",
            ],
        },
        {
            label: "აირჩიეთ ქალაქი",
            type: "select",
            options: [
                "აირჩიეთ ქალაქი",
                "ქუთაისი",
                "ბათუმი",
                "თბილისი",
                "ზუგდიდი",
            ],
        },
        {
            label: "დოკუმენტის ტიპი",
            type: "select",
            options: ["გასაცემი დოკუმენტი", "გარე მომსახურეობა"],
        },
        {
            label: "მომხმარებლის ტიპი",
            type: "select",
            options: [
                "სტანდარტული მომხმარებელი",
                "სტუდენტი",
                "პატიმარი",
                "შშმ პირი",
            ],
        },
        {
            label: "გაცემის ტიპი",
            type: "select",
            options: [
                "მომსახურე სივრციდან გატანა",
                "ფოსტა",
                "გარე მომსახურეობა",
            ],
        },
        {
            label: "კურიერი",
            type: "select",
            options: ["ყველა", "კურიერი 1", "კურიერი 2", "კურიერი 3"],
        },
        {
            label: "გაცემის დრო",
            type: "select",
            options: [
                "იმავე დღეს",
                "24 საათი",
                "3 სამუშაო დღე",
                "5 სამუშაო დღე",
                "10 სამუშაო დღე",
            ],
        },
        {
            label: "აქედან",
            type: "date",
            placeholder: "დაწყების თარიღი",
        },
        {
            label: "მდე",
            type: "date",
            placeholder: "დასრულების თარიღი",
        },
    ];

    return inputs.map((input, index) => {
        if (input.type === "select") {
            return (
                <label className="block" key={index}>
                    {input.label}
                    <select
                        name={input.label}
                        className="w-full mt-1 px-3 py-3 border rounded-lg dark:border-gray-700 dark:bg-gray-900"
                    >
                        {input.options.map((option, idx) => (
                            <option key={idx}>{option}</option>
                        ))}
                    </select>
                </label>
            );
        }

        return (
            <label className="block" key={index}>
                {input.label}
                <input
                    name={input.label}
                    type={input.type}
                    placeholder={input.placeholder}
                    className="w-full mt-1 px-3 py-2 border rounded-lg dark:border-gray-700 dark:bg-gray-900"
                />
            </label>
        );
    });
};

const Inputs_EN = () => {
    const inputs = [
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
            label: "Birth Date",
            type: "date",
            placeholder: "Birth Date",
        },
        {
            label: "Pick Region",
            type: "select",
            options: ["Pick Region", "Imereti", "Achara", "Guria", "Samegrelo"],
        },
        {
            label: "Pick City",
            type: "select",
            options: ["Pick City", "Kutaisi", "Batumi", "Tbilisi", "Zugdidi"],
        },
        {
            label: "Document Type",
            type: "select",
            options: ["Document to be issued", "External Service"],
        },
        {
            label: "User Type",
            type: "select",
            options: [
                "Standart User",
                "Student",
                "Pensioner",
                "Disabled Person",
            ],
        },
        {
            label: "Issuance Type",
            type: "select",
            options: ["Issuance From", "Post", "External Service"],
        },
        {
            label: "Courier",
            type: "select",
            options: ["All", "Courier 1", "Courier 2", "Courier 3"],
        },
        {
            label: "Issuance Time",
            type: "select",
            options: [
                "Same Day",
                "24 Hours",
                "3 Working Day",
                "5 Working Day",
                "10 Workin Day",
            ],
        },
        {
            label: "From",
            type: "date",
            placeholder: "From Date",
        },
        {
            label: "Until",
            type: "date",
            placeholder: "Until Date",
        },
    ];

    return inputs.map((input, index) => {
        if (input.type === "select") {
            return (
                <label className="block" key={index}>
                    {input.label}
                    <select
                        name={input.label}
                        className="w-full mt-1 px-3 py-3 border rounded-lg dark:border-gray-700 dark:bg-gray-900"
                    >
                        {input.options.map((option, index) => {
                            return <option key={index}>{option}</option>;
                        })}
                    </select>
                </label>
            );
        }

        return (
            <label className="block" key={index}>
                {input.label}
                <input
                    name={input.label}
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
    const [lang, setLang] = useState("EN");

    const openFilterModal = () => setModalOpen(true);
    const closeFilterModal = () => setModalOpen(false);
    const toggleLanguage = () =>
        setLang((prevLang) => (prevLang === "EN" ? "GE" : "EN"));

    const Inputs = lang === "EN" ? Inputs_EN : Inputs_GE;

    return (
        <div>
            {/* Header */}
            <header className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 shadow-md w-full">
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
            {/* Modal */}
            <FilterModal
                isModalOpen={isModalOpen}
                closeFilterModal={closeFilterModal}
                Inputs={Inputs}
                lang={lang}
            />
        </div>
    );
}
