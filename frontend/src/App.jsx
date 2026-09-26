import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("department_user");
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        localStorage.removeItem("department_user");
      }
    }
  }, []);

  function handleLogin(userData, token) {
    localStorage.setItem("department_token", token);
    localStorage.setItem("department_user", JSON.stringify(userData));
    setUser(userData);
  }

  function handleLogout() {
    localStorage.removeItem("department_token");
    localStorage.removeItem("department_user");
    setUser(null);
  }

  return (
    <>
      <Navbar user={user} onLogout={handleLogout} />
      <main>
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <div className="footer-inner">
          <span>© 2026 Department of Computer Science</span>
          <span>Block C, University Campus · cs-dept@example.edu</span>
        </div>
      </footer>
    </>
  );
}
