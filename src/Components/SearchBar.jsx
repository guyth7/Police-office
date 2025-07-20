import React, { useState } from "react";
import { Search } from "lucide-react"; // أيقونة بحث أنيقة

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center w-full max-w-md mx-auto bg-white border border-gray-300 rounded-full shadow-sm px-4 py-2 transition focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200"
    >
      <Search className="text-gray-500 mr-2" size={20} />
      <input
        type="text"
        className="w-full bg-transparent focus:outline-none text-gray-800 placeholder-gray-400"
        placeholder="ابحث هنا..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className=" bg-blue-500 text-white px-4 py-1 rounded-full hover:bg-blue-600 transition cursor-pointer"
      >
        بحث
      </button>
    </form>
  );
};

export default SearchBar;
