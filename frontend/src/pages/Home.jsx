import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <h1>Filip Postolov - DevOps Portfolio</h1>
      <p>AWS | Kubernetes | Docker | CI/CD</p>

      <Link to="/projects">
        <button>View Projects</button>
      </Link>
    </div>
  );
}
