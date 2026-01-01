import { motion } from "framer-motion";

export default function UserCard({ user }) {
  return (
    <motion.div
      className="bg-card-primary p-6 rounded-2xl shadow-lg w-full max-w-sm text-center text-text-body border border-border-divider"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-32 h-32 rounded-full mx-auto border-4 border-accent-primary"
      />
      <h2 className="text-xl font-semibold mt-4 text-text-primary">{user.name || user.login}</h2>
      <p className="text-text-muted font-normal">@{user.login}</p>
      <div className="mt-4 flex justify-around text-sm text-text-muted font-normal">
        <p>Followers: <span className="font-semibold text-text-primary">{user.followers}</span></p>
        <p>Repos: <span className="font-semibold text-text-primary">{user.public_repos}</span></p>
      </div>
      <a
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block text-accent-primary hover:brightness-110"
      >
        View Profile →
      </a>
    </motion.div>
  );
}



