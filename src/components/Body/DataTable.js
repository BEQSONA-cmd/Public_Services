
import { toGE, toEN} from "../contexts/LanguageContext";
import { FaRegCopy } from "react-icons/fa6";
import React, { useState } from "react";

const columns_GE = () => {
    const columns = [
        {
            label: "მიღება",
            type: "date",
        },
        {
            label: "გაცემა",
            type: "date",
        },
        {
            label: "საბუთის ნომერი",
            type: "text",
        },
        {
            label: "პირადი ნომერი",
            type: "text",
        },
        {
            label: "გვარი",
            type: "text",
        },
        {
            label: "სახელი",
            type: "text",
        },
        {
            label: "ქალაქი",
            type: "text",
        },
        {
            label: "სტატუსი",
            type: "text",
        },
    ];
    return columns.map((column) => {
        return (
            <th key={column.label} className="px-4 py-2 border dark:border-black">
                {column.label}
            </th>
        );
    }
    );
};

const columns_EN = () => {
    const columns = [
        {
            label: "Receive",
            type: "date",
        },
        {
            label: "Sent",
            type: "date",
        },
        {
            label: "Document Number",
            type: "text",
        },
        {
            label: "Private Number",
            type: "text",
        },
        {
            label: "Surname",
            type: "text",
        },
        {
            label: "Name",
            type: "text",
        },
        {
            label: "City",
            type: "text",
        },
        {
            label: "Status",
            type: "text",
        },
    ];
    return columns.map((column) => {
        return (
            <th key={column.label} className="px-4 py-2 border dark:border-black">
                {column.label}
            </th>
        );
    }
    );
};


const times_EN = ["Issued in 0 day", "Issued in 1 day", "Issued in 3 days", "Issued in 5 days", "Issued in 10 days"];
const times_GE = ["0 - დღიანი", "1 - დღიანი", "3 - დღიანი", "5 - დღიანი", "10 - დღიანი"];

const rowsPerPage = 24;
const maxPageButtons = 10;
export default function DataTable({ data, lang }) {

    const amount_of_0_days = data.filter((item) => item.time === "Issued in 0 day").length;
    const amount_of_1_days = data.filter((item) => item.time === "Issued in 1 day").length;
    const amount_of_3_days = data.filter((item) => item.time === "Issued in 3 days").length;
    const amount_of_5_days = data.filter((item) => item.time === "Issued in 5 days").length;
    const amount_of_10_days = data.filter((item) => item.time === "Issued in 10 days").length;
    let amo = [amount_of_0_days, amount_of_1_days, amount_of_3_days, amount_of_5_days, amount_of_10_days];

    const [currentPage, setCurrentPage] = useState(1);
    const [toggledRows, setToggledRows] = useState({});

    const groupDataByTime = (data) => {
        const grouped = {};
        times_EN.forEach((time) => {
            grouped[time] = data.filter((item) => item.time === time);
        });
        return grouped;
    };

    const groupedData = groupDataByTime(data);

    const flattenData = () => {
        return Object.values(groupedData).flat();
    };

    const paginatedData = () => {
        const totalData = flattenData();
        const startIndex = (currentPage - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
        return totalData.slice(startIndex, endIndex);
    };

    const totalDataCount = flattenData().length;
    const totalPages = Math.ceil(totalDataCount / rowsPerPage);

    const getPaginationButtons = () => {
        const buttons = [];
        const startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
        const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

        for (let i = startPage; i <= endPage; i++) {
            buttons.push(i);
        }

        return {
            buttons,
            hasPreviousGroup: startPage > 1,
            hasNextGroup: endPage < totalPages,
        };
    };

    const { buttons, hasPreviousGroup, hasNextGroup } = getPaginationButtons();

    const handleCopy = (text, documentId) => {
        navigator.clipboard.writeText(text).then(() => {
            // alert('Copied to clipboard');
            setToggledRows((prev) => ({
                ...prev,
                [documentId]: !prev[documentId],
            }));
        });
    };

    return (
        <section className="w-full overflow-x-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <table className="w-full table-auto border-collapse mb-4">
                <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                        {lang === "EN" ? columns_EN() : columns_GE()}
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(groupedData).map((time) => {
                        const dataForTime = paginatedData().filter((item) => item.time === time);
                        if (!dataForTime.length) {
                            return null;
                        }

                        return (
                            <React.Fragment key={time}>
                                <tr>
                                    <td
                                        colSpan={8}
                                        className="px-4 py-2 text-lg font-bold text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800"
                                    >
                                        <div className="flex justify-between">
                                            <span>{lang == "EN" ? time : times_GE[times_EN.indexOf(time)]}</span>
                                            <span>{amo[times_EN.indexOf(time)]}</span>
                                            <span></span>
                                        </div>
                                    </td>
                                </tr>
                                {dataForTime.map((item, index) => (
                                    <tr
                                        key={index}
                                        className={`transition-colors duration-200 ${
                                            toggledRows[item.document_number]
                                                ? "bg-green-200 dark:bg-green-700"
                                                : "bg-white dark:bg-gray-800"
                                        }`}
                                    >
                                        <td className="px-4 py-2 border dark:border-gray-700">
                                            {item.recieve}
                                        </td>
                                        <td className="px-4 py-2 border dark:border-gray-700">
                                            {item.sent}
                                        </td>
                                        <td className="px-4 py-2 border dark:border-gray-700 relative">
                                            {item.document_number}
                                            <button
                                                className="absolute right-2 top-1/2 transform -translate-y-1/2 px-2 py-1 text-black rounded"
                                                onClick={() => handleCopy(item.document_number, item.document_number)}
                                            >
                                                <FaRegCopy size={20} />
                                            </button>
                                        </td>
                                        <td className="px-4 py-2 border dark:border-gray-700">
                                            {item.private_number}
                                        </td>
                                        <td className="px-4 py-2 border dark:border-gray-700">
                                            {item.surname}
                                        </td>
                                        <td className="px-4 py-2 border dark:border-gray-700">
                                            {item.name}
                                        </td>
                                        <td className="px-4 py-2 border dark:border-gray-700">
                                            {lang === "EN" ? item.city : toGE(item.city)}
                                        </td>
                                        <td className="px-4 py-2 border dark:border-gray-700">
                                            {lang === "EN" ? item.status : toGE(item.status)}
                                        </td>
                                    </tr>
                                ))}
                            </React.Fragment>
                        );
                    })}
                </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-4">
                {hasPreviousGroup && (
                    <button
                        className="mx-1 px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                        onClick={() => setCurrentPage(1)}
                    >
                        1
                    </button>
                )}
                {hasPreviousGroup && (
                    <button
                        className="mx-1 px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                        onClick={() => setCurrentPage((prev) => Math.max(prev - maxPageButtons, 1))}
                    >
                        {"<<"}
                    </button>
                )}
                {buttons.map((page) => (
                    <button
                        key={page}
                        className={`mx-1 px-3 py-1 rounded-md ${
                            currentPage === page
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                        }`}
                        onClick={() => setCurrentPage(page)}
                    >
                        {page}
                    </button>
                ))}
                {hasNextGroup && (
                    <button
                        className="mx-1 px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                        onClick={() => setCurrentPage((prev) => Math.min(prev + maxPageButtons, totalPages))}
                    >
                        {">>"}
                    </button>
                )}
                {hasNextGroup && (
                    <button
                        className="mx-1 px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                        onClick={() => setCurrentPage(totalPages)}
                    >
                        {totalPages}
                    </button>
                )}
            </div>
        </section>
    );
}
