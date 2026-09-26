import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar({ user, onLogout }) {
  const navigate = useNavigate();

  function handleLogout() {
    onLogout();
    navigate("/");
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <NavLink to="/" className="brand">
          <span className="brand-mark">Dept. of Computer Science</span>
          <span className="brand-sub">Est. 1994</span>
        </NavLink>

        <nav className="main-nav">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            About us
          </NavLink>
          {!user && (
            <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>
              Login
            </NavLink>
          )}
          {!user && (
            <NavLink to="/register" className={({ isActive }) => (isActive ? "active" : "")}>
              Registration
            </NavLink>
          )}
        </nav>

        <div className="nav-user">
          {user ? (
            <>
              <span>Signed in as {user.fullName}</span>
              <button onClick={handleLogout}>Log out</button>
            </>
          ) : (
            <span style={{ color: "var(--ink-soft)", fontSize: "0.85rem" }}>
              Not signed in
            </span>
          )}
        </div>
      </div>
    </header>
  );
}
