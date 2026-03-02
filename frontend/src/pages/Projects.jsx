import { useState } from "react";
import { fetchRepos } from "../api/api";
import RepoList from "../components/RepoList";

export default function Projects() {
  const [username, setUsername] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearch = async () => {
    try {
      const data = await fetchRepos(username);
      setRepos(data);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="container">
      <h2>GitHub Repo Viewer</h2>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="GitHub username"
      />
      <button onClick={handleSearch}>Search</button>

      <RepoList repos={repos} />
    </div>
  );
}
