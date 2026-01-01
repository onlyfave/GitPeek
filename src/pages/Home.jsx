import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

 export default function Home() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) return;
    navigate(`/user/${username}`);
  };

  return (
    <motion.main
      className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-[#09050F] text-text-body"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-text-primary">
        Git Peek
      </h1>
      <p className="text-text-body font-medium mb-8 max-w-md">
        Search for any GitHub user and explore their profile details in real time.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-md items-center bg-card-primary rounded-full overflow-hidden border border-border-divider"
      >
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username..."
          className="flex-1 px-4 py-3 bg-transparent outline-none text-text-primary placeholder-text-muted/80 font-medium"
        />
        <button
          type="submit"
          className="relative inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-text-primary bg-gradient-to-b from-[#9A7BC4] via-[#7C5ACF] to-[#5B3FA3] shadow-lg shadow-[0_8px_20px_rgba(124,90,207,0.45)] ring-1 ring-white/20 transition duration-200 hover:brightness-110 active:scale-95 overflow-hidden"
        >
          <span className="relative z-10">Search</span>
          <span
            className="pointer-events-none absolute top-1 left-1 right-1 h-1/2 rounded-full bg-gradient-to-b from-white/50 to-transparent"
            aria-hidden="true"
          ></span>
        </button>
      </form>
    </motion.main>
  );
}


