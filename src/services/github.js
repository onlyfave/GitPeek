const BASE_URL = "https://gitpeek-backend.onrender.com/api";

export async function fetchUser(username) {
  const res = await fetch(`${BASE_URL}/users/${username}`);
  if (!res.ok) throw new Error("User not found");
  return res.json();
}

export async function fetchRepos(username) {
  const res = await fetch(
    `${BASE_URL}/users/${username}/repos?per_page=100&sort=updated`
  );
  if (!res.ok) throw new Error("Repos not found");
  return res.json();
}

export async function fetchCommits(owner, repo) {
  const res = await fetch(
    `${BASE_URL}/repos/${owner}/${repo}/commits?per_page=100`
  );
  if (!res.ok) return [];
  return res.json();
}
