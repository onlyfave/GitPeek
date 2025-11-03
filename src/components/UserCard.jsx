import { motion } from "framer-motion";

export default function UserCard({ user }) {
  return (
    <motion.div
      className="bg-gray-900 p-6 rounded-2xl shadow-lg w-full max-w-sm text-center"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500"
      />
      <h2 className="text-xl font-bold mt-4">{user.name || user.login}</h2>
      <p className="text-gray-400">@{user.login}</p>
      <div className="mt-4 flex justify-around text-sm">
        <p>Followers: <span className="font-semibold">{user.followers}</span></p>
        <p>Repos: <span className="font-semibold">{user.public_repos}</span></p>
      </div>
      <a
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block text-blue-400 hover:underline"
      >
        View Profile →
      </a>
    </motion.div>
  );
}

