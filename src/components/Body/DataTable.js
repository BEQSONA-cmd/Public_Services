
const columns_GE = () => {
    const columns = [
        {
            label: "თარიღი",
            type: "date",
        },
        {
            label: "სახელი",
            type: "text",
        },
        {
            label: "რეგიონი",
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
            label: "Date",
            type: "date",
        },
        {
            label: "Name",
            type: "text",
        },
        {
            label: "Region",
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
                </tbody>
            </table>
        </section>
    );
}
