import React from "react";
import { Car, FileWarning, ShieldCheck, ScrollText } from "lucide-react";

const options = [
  { id: "معلومات المركبة", icon: Car, label: "معلومات المركبة" },
  { id: "المخالفات", icon: FileWarning, label: "المخالفات" },
  { id: "الترخيص والتأمين", icon: ShieldCheck, label: "الترخيص والتأمين" },
  { id: "الفحص الفني", icon: ScrollText, label: "الفحص الفني" },
];

const OptionsGrid = ({ selectedOptions, toggleOption }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-8">
      {options.map((opt) => {
        const Icon = opt.icon;
        const isSelected = selectedOptions.includes(opt.id);

        return (
          <div
            key={opt.id}
            onClick={() => toggleOption(opt.id)}
            className={`cursor-pointer flex flex-col items-center justify-center rounded-xl p-6 border transition-all shadow-md
              ${
                isSelected
                  ? "bg-blue-600 border-blue-400 text-white scale-105"
                  : "bg-white/5 border-white/10 hover:bg-white/10 hover:scale-105 text-gray-200"
              }`}
          >
            <Icon size={28} />
            <span className="mt-3 font-semibold">{opt.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default OptionsGrid;
