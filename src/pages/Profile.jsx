import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

export default function Profile() {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [username]);

  if (!user) return <p className="text-center mt-10 text-gray-400">Loading...</p>;

  return (
    <motion.div
      className="flex flex-col items-center mt-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-32 h-32 rounded-full border-4 border-blue-600"
      />
      <h2 className="text-3xl font-bold mt-4">{user.name || user.login}</h2>
      <p className="text-gray-400">{user.bio}</p>

      <div className="flex gap-6 mt-6 text-lg">
        <p>Followers: <span className="text-blue-400">{user.followers}</span></p>
        <p>Repos: <span className="text-blue-400">{user.public_repos}</span></p>
      </div>

      <a
        href={user.html_url}
        target="_blank"
        className="mt-6 bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-xl transition"
      >
        Visit GitHub
      </a>
    </motion.div>
  );
}

