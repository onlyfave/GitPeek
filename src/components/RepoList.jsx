import { Link } from "react-router-dom";

const RepoList = ({ repos }) => {
  return (
    <div className="repo-list fade-in">
      <h3>Latest Repositories</h3>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <Link to={`/repo/${repo.owner.login}/${repo.name}`}>
              {repo.name}
            </Link>
            <span>⭐ {repo.stargazers_count}</span>
            <span>🍴 {repo.forks_count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoList;
