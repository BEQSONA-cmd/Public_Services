
import { toGE, toEN} from "../contexts/LanguageContext";
import React from "react";

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
            label: "პრიტადი ნომერი",
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
            <th className="px-4 py-2 border dark:border-black">
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
            label: "Last Name",
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
            <th className="px-4 py-2 border dark:border-black">
                {column.label}
            </th>
        );
    }
    );
};


const times_EN = ["Issued in 1 day", "Issued in 3 days", "Issued in 10 days"];
const times_GE = ["1 დღეში გასაცემი", "3 დღეში გასაცემი", "10 დღეში გასაცემი"];

export default function DataTable({ data , lang}) {
    const groupDataByTime = (data) => {
        const grouped = {};
        times_EN.forEach((time) => {
            grouped[time] = data.filter((item) => item.time === time);
        });
        return grouped;
    };
    
    const groupedData = groupDataByTime(data);
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
                        if (!groupedData[time] || groupedData[time].length === 0) {
                            return null;
                        }

                        return (
                            <React.Fragment key={time}>
                                <tr>
                                    <td
                                        colSpan={8}
                                        className="px-4 py-2 text-lg font-bold text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800"
                                    >
                                        {lang === "EN" ? time : times_GE[times_EN.indexOf(time)]}
                                    </td>
                                </tr>
                                {groupedData[time].map((item, index) => (
                                    <tr key={index} className="bg-white dark:bg-gray-800">
                                        <td className="px-4 py-2 border dark:border-gray-700">
                                            {item.recieve}
                                        </td>
                                        <td className="px-4 py-2 border dark:border-gray-700">
                                            {item.sent}
                                        </td>
                                        <td className="px-4 py-2 border dark:border-gray-700">
                                            {item.document_number}
                                        </td>
                                        <td className="px-4 py-2 border dark:border-gray-700">
                                            {item.private_number}
                                        </td>
                                        <td className="px-4 py-2 border dark:border-gray-700">
                                            {item.name}
                                        </td>
                                        <td className="px-4 py-2 border dark:border-gray-700">
                                            {item.surname}
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
        </section>
    );
}
