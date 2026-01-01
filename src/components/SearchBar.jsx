import { useState } from "react";

export default function SearchBar({ onSearch }) {
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
        className="flex-grow p-3 rounded-lg bg-card-primary text-text-primary outline-none placeholder-text-muted/80 border border-border-divider font-medium"
      />
      <button
        type="submit"
        className="relative inline-flex items-center justify-center px-5 py-3 rounded-full font-semibold text-text-primary bg-gradient-to-b from-[#9A7BC4] via-[#7C5ACF] to-[#5B3FA3] shadow-lg shadow-[0_8px_20px_rgba(124,90,207,0.45)] ring-1 ring-white/20 transition duration-200 hover:brightness-110 active:scale-95 overflow-hidden"
      >
        <span className="relative z-10">Search</span>
        <span
          className="pointer-events-none absolute top-1 left-1 right-1 h-1/2 rounded-full bg-gradient-to-b from-white/50 to-transparent"
          aria-hidden="true"
        ></span>
      </button>
    </form>
  );
}

