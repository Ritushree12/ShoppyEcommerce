import "../styles/styles.css";

export default function NotFound() {
  return (
    <div className="not-found">
      <img
        src="/src/assets/404-error.png"
        alt="404 Error"
        className="error-image"
      />
      <h2>404 — Page Not Found</h2>
      <p>The page you tried to access does not exist.</p>
    </div>
  );
}
