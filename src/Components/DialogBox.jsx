import React from "react";
import { X } from "lucide-react";

const DialogBox = ({ options, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gray-900 text-white rounded-2xl shadow-2xl w-full max-w-md p-6 animate-fade-in">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">خياراتك المحددة</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 transition"
          >
            <X size={20} />
          </button>
        </div>

        {options.length > 0 ? (
          <ul className="space-y-2 mb-4">
            {options.map((opt, idx) => (
              <li
                key={idx}
                className="px-3 py-2 rounded-lg bg-white/10 text-sm"
              >
                {opt}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">لم تختر أي خيار.</p>
        )}

        <button
          onClick={onClose}
          className="w-full cursor-pointer mt-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl transition font-semibold"
        >
          تأكيد
        </button>
      </div>
    </div>
  );
};

export default DialogBox;
