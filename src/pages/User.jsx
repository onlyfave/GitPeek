import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

 function User() {
  const { username } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setData(null);
    setError(null);
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        if (!res.ok) throw new Error("User not found");
        return res.json();
      })
      .then(setData)
      .catch((err) => setError(err.message));
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

  if (!data)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-950 text-gray-300">
        Loading...
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

export default User();