const API_BASE = "/api/github";

export async function fetchRepos(username) {
  const res = await fetch(`${API_BASE}/${username}`);

  if (!res.ok) {
    throw new Error("User not found");
  }

  return res.json();
}

export async function fetchUser(username) {
  const res = await fetch(`${API_BASE}/users/${username}`);

  if (!res.ok) {
    throw new Error("User not found");
  }

  return res.json();
}
