import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

 function Home() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) return;
    navigate(`/user/${username}`);
  };

  return (
    <motion.main
      className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gray-950 text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-blue-400">
        Git Peek
      </h1>
      <p className="text-gray-400 mb-8 max-w-md">
        Search for any GitHub user and explore their profile details in real time.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-md items-center bg-gray-800 rounded-full overflow-hidden border border-gray-700"
      >
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username..."
          className="flex-1 px-4 py-3 bg-transparent outline-none text-gray-200 placeholder-gray-500"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition font-semibold"
        >
          Search
        </button>
      </form>
    </motion.main>
  );
}
export default Home();

