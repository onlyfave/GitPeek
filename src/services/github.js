const API_BASE = "https://api.github.com";

export async function fetchUser(username) {
  try {
    const res = await fetch(`${API_BASE}/users/${username}`);
    if (!res.ok) {
      const error = await res.text();
      console.error(`Error fetching user ${username}:`, res.status, error);
      throw new Error(`User not found (${res.status})`);
    }
    return res.json();
  } catch (error) {
    console.error("fetchUser error:", error);
    throw error;
  }
}

export async function fetchRepos(username) {
  try {
    const res = await fetch(`${API_BASE}/users/${username}/repos`);
    if (!res.ok) {
      const error = await res.text();
      console.error(`Error fetching repos for ${username}:`, res.status, error);
      throw new Error(`Repos not found (${res.status})`);
    }
    return res.json();
  } catch (error) {
    console.error("fetchRepos error:", error);
    throw error;
  }
}

export async function fetchCommits(owner, repo) {
  try {
    const res = await fetch(`${API_BASE}/repos/${owner}/${repo}/commits`);
    if (!res.ok) {
      console.warn(`Error fetching commits for ${owner}/${repo}:`, res.status);
      return [];
    }
    return res.json();
  } catch (error) {
    console.warn("fetchCommits error:", error);
    return [];
  }
}
