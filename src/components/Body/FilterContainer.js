export default function FilterContainer() {
    return (
      <section className="w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-4">Filters</h2>
        <form className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="region" className="block text-sm font-medium">
              Region
            </label>
            <select
              id="region"
              className="w-full px-3 py-2 border rounded-lg dark:border-gray-700 dark:bg-gray-800"
            >
              <option value="">All</option>
              <option value="Imereti">Imereti</option>
              <option value="Achara">Achara</option>
              <option value="Guria">Guria</option>
            </select>
          </div>
          {/* Add other filters in the same way */}
          <div className="col-span-2">
            <button
              type="button"
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
            >
              Apply Filters
            </button>
          </div>
        </form>
      </section>
    );
  }
  