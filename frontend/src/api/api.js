const API_BASE = "/api";

export async function fetchRepos(username) {
  const res = await fetch(`${API_BASE}/repos/${username}`);
  if (!res.ok) throw new Error("Failed to fetch repos");
  return res.json();
}
