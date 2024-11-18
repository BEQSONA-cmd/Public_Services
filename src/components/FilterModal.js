export default function FilterModal({ closeModal }) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-11/12 max-w-2xl">
          <button
            onClick={closeModal}
            className="text-gray-500 dark:text-gray-300 absolute top-4 right-4"
          >
            &times;
          </button>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Search Options
          </h2>
          <form className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="id-number" className="block text-sm font-medium">
                Document Number
              </label>
              <input
                type="text"
                id="id-number"
                className="w-full px-3 py-2 border rounded-lg dark:border-gray-700 dark:bg-gray-800"
              />
            </div>
            {/* Add other input fields following the same pattern */}
            <div className="col-span-2">
              <button
                type="button"
                className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  