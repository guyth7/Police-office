import React from "react";
import { Search } from "lucide-react";

const SearchBar = ({ query, setQuery, onSearch, error }) => {
  return (
    <div className="w-full max-w-lg text-center">
      <div className="flex items-center bg-white/10 border border-white/20 rounded-xl overflow-hidden shadow-md backdrop-blur-sm">
        <input
          type="number"
          placeholder="ادخل رقم المركبة (6 أرقام)..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-4 py-3 text-white bg-transparent placeholder-gray-400 outline-none"
        />
        <button
          onClick={onSearch}
          className="px-5 py-3 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition font-semibold cursor-pointer"
        >
          <Search size={18} />
          بحث
        </button>
      </div>
      {error && (
        <p className="text-red-400 text-sm mt-2 font-medium">{error}</p>
      )}
    </div>
  );
};

export default SearchBar;
