import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  const [username, setUsername] = useState("");
  const [theme, setTheme] = useState(() =>
    typeof window !== "undefined" && localStorage.getItem("theme") === "light"
      ? "light"
      : "dark"
  );
  const navigate = useNavigate();

  useEffect(() => {
    const isLight = theme === "light";
    document.documentElement.classList.toggle("theme-light", isLight);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) return;
    navigate(`/user/${username}`);
  };

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <motion.main
      className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-app-bg text-text-body relative"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <button
        type="button"
        onClick={toggleTheme}
        className="absolute top-6 right-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-divider bg-card-primary text-text-primary font-semibold shadow-sm hover:brightness-110 transition-colors"
      >
        <span
          className="inline-block h-4 w-4 rounded-full bg-gradient-to-br from-button-start to-button-end"
          aria-hidden="true"
        />
        {theme === "light" ? "Light mode" : "Dark mode"}
      </button>

      <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-text-primary">
        Git Peek
      </h1>
      <p className="text-text-body font-medium mb-8 max-w-md">
        Search for any GitHub user and explore their profile details in real
        time.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-md items-center bg-card-primary rounded-full overflow-hidden border border-border-divider shadow-lg"
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
          className="relative inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-text-primary bg-gradient-to-b from-button-start via-accent-soft to-button-end shadow-lg shadow-[0_8px_20px_rgba(124,90,207,0.45)] ring-1 ring-white/20 transition duration-200 hover:brightness-110 active:scale-95 overflow-hidden"
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
