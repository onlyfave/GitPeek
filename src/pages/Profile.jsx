import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { fetchUser, fetchRepos, fetchCommits } from "../services/github";
import { calculateMetrics } from "../utils/metrics";
import { determinePersona } from "../utils/persona";
import PersonaCard from "../components/personaCard";

export default function Profile() {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [persona, setPersona] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUserData() {
      try {
        setLoading(true);
        
        // Fetch user data
        const userData = await fetchUser(username);
        setUser(userData);

        // Fetch repos
        const repos = await fetchRepos(username);
        
        // Fetch commits for the first 10 repos (to avoid rate limiting)
        const commitsMap = {};
        for (const repo of repos.slice(0, 10)) {
          try {
            const commits = await fetchCommits(userData.login, repo.name);
            commitsMap[repo.name] = commits;
          } catch (error) {
            // If we can't fetch commits for a repo, just skip it
            commitsMap[repo.name] = [];
          }
        }

        // Calculate metrics and determine persona
        const metrics = calculateMetrics(userData, repos, commitsMap);
        const userPersona = determinePersona(metrics);
        setPersona(userPersona);
      } catch (error) {
        console.error("Error loading user data:", error);
      } finally {
        setLoading(false);
      }
    }

    loadUserData();
  }, [username]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-center mt-10 text-gray-400">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-center mt-10 text-red-400">User not found</p>
      </div>
    );
  }

  return (
    <motion.div
      className="flex flex-col items-center mt-10 px-4 max-w-3xl mx-auto"
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

      {persona && (
        <div className="mt-8 w-full">
          <PersonaCard persona={persona} />
        </div>
      )}

      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-xl transition"
      >
        Visit GitHub
      </a>
    </motion.div>
  );
}

