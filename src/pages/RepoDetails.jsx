import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

function RepoDetails() {
  const { username, repoName } = useParams();
  const [repo, setRepo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepo = async () => {
      try {
        const res = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
        const data = await res.json();
        setRepo(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchRepo();
  }, [username, repoName]);

  if (loading) return <Loader />;

  return (
    <div className="repo-details fade-in">
      <h2>{repo.full_name}</h2>
      <p>{repo.description || "No description available."}</p>
      <p>⭐ Stars: {repo.stargazers_count}</p>
      <p>🍴 Forks: {repo.forks_count}</p>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
      <div style={{ marginTop: "1rem" }}>
        <Link to="/" className="profile-link">⬅ Back</Link>
      </div>
    </div>
  );
}

export default RepoDetails();
