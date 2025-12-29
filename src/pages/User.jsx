import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchUser, fetchRepos, fetchCommits } from "../services/github";
import { calculateMetrics, calculateHealthScore } from "../utils/metrics";
import { determinePersona } from "../utils/persona";
import PersonaCard from "../components/personaCard";
import SkeletonLoader from "../components/SkeletonLoader";

export default function User() {
  const { username } = useParams();
  const [data, setData] = useState(null);
  const [persona, setPersona] = useState(null);
  const [healthScore, setHealthScore] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUserData() {
      try {
        setData(null);
        setPersona(null);
        setHealthScore(null);
        setError(null);
        setLoading(true);

        // Fetch user data
        const userData = await fetchUser(username);
        setData(userData);

        // Fetch repos
        const repos = await fetchRepos(username);

        // Fetch commits for the first 10 repos
        const commitsMap = {};
        for (const repo of repos.slice(0, 10)) {
          try {
            const commits = await fetchCommits(userData.login, repo.name);
            commitsMap[repo.name] = commits;
          } catch (error) {
            commitsMap[repo.name] = [];
          }
        }

        // Calculate metrics and determine persona
        const metrics = calculateMetrics(userData, repos, commitsMap);
        const userPersona = determinePersona(metrics);
        const health = calculateHealthScore(metrics);
        setPersona(userPersona);
        setHealthScore(health);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadUserData();
  }, [username]);

  if (error)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white">
        <p className="text-red-500 mb-4">{error}</p>
        <Link
          to="/"
          className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded"
        >
          Back Home
        </Link>
      </div>
    );

  if (loading) return <SkeletonLoader />;

  if (!data)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-950 text-gray-300">
        No user data found
      </div>
    );

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-gray-900 rounded-xl shadow-lg p-8 w-full max-w-md text-center border border-gray-800">
        <img
          src={data.avatar_url}
          alt={data.login}
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-600"
        />
        <h2 className="text-2xl font-bold mb-2">{data.name || data.login}</h2>
        <p className="text-gray-400 mb-4">{data.bio || "No bio available"}</p>
        <div className="flex justify-center gap-6 text-gray-300 mb-6">
          <div>
            <p className="text-lg font-semibold">{data.followers}</p>
            <p className="text-sm text-gray-500">Followers</p>
          </div>
          <div>
            <p className="text-lg font-semibold">{data.public_repos}</p>
            <p className="text-sm text-gray-500">Repos</p>
          </div>
          <div>
            <p className="text-lg font-semibold">{data.following}</p>
            <p className="text-sm text-gray-500">Following</p>
          </div>
        </div>

        {persona && (
          <div className="mb-6">
            <PersonaCard persona={persona} />
          </div>
        )}

        {healthScore && (
          <div className="mb-6 bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-center mb-4">
              <div className="relative inline-flex items-center justify-center">
                <svg className="w-24 h-24 transform -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="44"
                    fill="none"
                    stroke="#374151"
                    strokeWidth="2"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="44"
                    fill="none"
                    stroke={
                      healthScore.score >= 80
                        ? "#10b981"
                        : healthScore.score >= 60
                        ? "#3b82f6"
                        : healthScore.score >= 40
                        ? "#f59e0b"
                        : "#ef4444"
                    }
                    strokeWidth="2"
                    strokeDasharray={`${
                      (healthScore.score / 100) * 276.4
                    } 276.4`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute text-center">
                  <p className="text-4xl font-bold">{healthScore.score}</p>
                  <p className="text-xs text-gray-400">Health Score</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
              {healthScore.explanation}
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-gray-700 rounded p-2">
                <p className="text-gray-400">Activity</p>
                <p className="font-semibold text-blue-400">
                  {healthScore.breakdown.activity}%
                </p>
              </div>
              <div className="bg-gray-700 rounded p-2">
                <p className="text-gray-400">Code Focus</p>
                <p className="font-semibold text-green-400">
                  {healthScore.breakdown.codeFocus}%
                </p>
              </div>
              <div className="bg-gray-700 rounded p-2">
                <p className="text-gray-400">Maintenance</p>
                <p className="font-semibold text-purple-400">
                  {healthScore.breakdown.maintenance}%
                </p>
              </div>
              <div className="bg-gray-700 rounded p-2">
                <p className="text-gray-400">Collaboration</p>
                <p className="font-semibold text-pink-400">
                  {healthScore.breakdown.collaboration}%
                </p>
              </div>
            </div>
          </div>
        )}

        <a
          href={data.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-3 mb-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
        >
          View on GitHub
        </a>
        <Link
          to="/"
          className="block w-full py-3 bg-gray-800 hover:bg-gray-700 rounded-lg"
        >
          Back Home
        </Link>
      </div>
    </motion.div>
  );
}
