import { useState } from "react";

function SearchBar({ onSearch }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(username);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 w-full max-w-md mb-8"
    >
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username..."
        className="flex-grow p-3 rounded-lg bg-gray-800 text-white outline-none"
      />
      <button
        type="submit"
        className="bg-blue-500 px-5 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar();