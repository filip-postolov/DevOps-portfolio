export default function RepoList({ repos }) {
  return (
    <div>
      {repos.map((repo) => (
        <div key={repo.id} className="repo-card">
          <h3>{repo.name}</h3>
          <p>{repo.description}</p>
        </div>
      ))}
    </div>
  );
}
