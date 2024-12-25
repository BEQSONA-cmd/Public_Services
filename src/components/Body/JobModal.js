export default function Modal({ isOpen, onClose, onConfirm, items, lang }) {
    if (!isOpen) return null;

    const isScrollable = items.length > 25;

    return (
        <div
            className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50"
        >
            <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-2xl">
                <button
                    className="text-2xl absolute top-2 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
                    onClick={onClose}
                >
                    &times; {/* Close Icon */}
                </button>
                <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                    {lang === "EN" ? "Confirm Items" : "დადასტურება"}
                </h2>
                <p className="text-sm mb-4 text-gray-700 dark:text-gray-300">
                    {lang === "EN"
                        ? "Please confirm the following items:"
                        : "გთხოვთ დადასტუროთ შემდეგი ელემენტები:"}
                </p>
                <ul className={`text-sm list-disc pl-5 mb-4 text-gray-800 dark:text-gray-200 ${isScrollable ? 'max-h-64 overflow-y-auto' : ''}`}>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <div className="flex justify-end space-x-2">
                    <button
                        className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transform hover:scale-105 transition duration-300"
                        onClick={onClose}
                    >
                        {lang === "EN" ? "Cancel" : "გაუქმება"}
                    </button>
                    <button
                        className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transform hover:scale-105 transition duration-300"
                        onClick={onConfirm}
                    >
                        {lang === "EN" ? "Create" : "შექმნა"}
                    </button>
                </div>
            </div>
        </div>
    );
}