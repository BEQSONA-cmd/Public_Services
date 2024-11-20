
import React, { useEffect, useState } from "react";

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

export default function DataTable({ data , lang}) {

    const [hydratedData, setHydratedData] = useState([]);

    useEffect(() => {
        setHydratedData(data);
    }, [data]);

    if (!hydratedData.length) {
        return <div>Loading...</div>;
    }

    return (
        <section className="w-full overflow-x-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <table className="w-full table-auto border-collapse">
                <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                        {lang === "EN" ? columns_EN() : columns_GE()}
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item, index) => (
                        <tr className="bg-white dark:bg-gray-800">
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
                                {item.city}
                            </td>
                            <td className="px-4 py-2 border dark:border-gray-700">
                                {item.status}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
