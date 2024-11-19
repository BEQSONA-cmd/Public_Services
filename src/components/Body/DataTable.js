export default function DataTable() {
    return (
      <section className="w-full overflow-x-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="px-4 py-2 border dark:border-gray-700">Date</th>
              <th className="px-4 py-2 border dark:border-gray-700">Name</th>
              <th className="px-4 py-2 border dark:border-gray-700">Region</th>
              <th className="px-4 py-2 border dark:border-gray-700">City</th>
              <th className="px-4 py-2 border dark:border-gray-700">Status</th>
              {/* Add more columns as needed */}
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white dark:bg-gray-800">
              <td className="px-4 py-2 border dark:border-gray-700">2024-11-01</td>
              <td className="px-4 py-2 border dark:border-gray-700">გიორგი</td>
              <td className="px-4 py-2 border dark:border-gray-700">Imereti</td>
              <td className="px-4 py-2 border dark:border-gray-700">Kutaisi</td>
              <td className="px-4 py-2 border dark:border-gray-700">Student</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </section>
    );
  }
  