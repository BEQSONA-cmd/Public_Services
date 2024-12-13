import React from 'react';

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
                "სტანდარტული",
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
            label: "Surname",
            type: "text",
            placeholder: "Surname",
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
                "Standart",
                "Student",
                "Prisoner",
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


export default function FilterModal({ isModalOpen, closeFilterModal , lang }) {

    if (!isModalOpen) return null;
    const Inputs = lang === "EN" ? Inputs_EN : Inputs_GE;
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