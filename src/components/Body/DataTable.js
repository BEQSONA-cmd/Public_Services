import { useEffect } from "react";

export default function DataTable({ data }) {

    return (
        <section className="w-full overflow-x-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <table className="w-full table-auto border-collapse">
                <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                        <th className="px-4 py-2 border dark:border-black">
                            Date
                        </th>
                        <th className="px-4 py-2 border dark:border-black">
                            Name
                        </th>
                        <th className="px-4 py-2 border dark:border-black">
                            Region
                        </th>
                        <th className="px-4 py-2 border dark:border-black">
                            City
                        </th>
                        <th className="px-4 py-2 border dark:border-black">
                            Status
                        </th>
                        {/* Add more columns as needed */}
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item, index) => (
                        <tr className="bg-white dark:bg-gray-800">
                            <td className="px-4 py-2 border dark:border-gray-700">
                                {item.date}
                            </td>
                            <td className="px-4 py-2 border dark:border-gray-700">
                                {item.name}
                            </td>
                            <td className="px-4 py-2 border dark:border-gray-700">
                                {item.region}
                            </td>
                            <td className="px-4 py-2 border dark:border-gray-700">
                                {item.city}
                            </td>
                            <td className="px-4 py-2 border dark:border-gray-700">
                                {item.user_type}
                            </td>
                        </tr>
                    ))}
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </section>
    );
}
