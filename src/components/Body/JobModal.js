
export default function Modal({ isOpen, onClose, onConfirm, items }) {
    
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-lg font-bold mb-4">Confirm Selection</h2>
                <p className="text-sm mb-4">Are these the correct items you copied?</p>
                <ul className="text-sm list-disc pl-5 mb-4">
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <div className="flex justify-end space-x-2">
                    <button
                        className="px-4 py-2 bg-red-500 text-white rounded"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 bg-green-500 text-white rounded"
                        onClick={onConfirm}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};