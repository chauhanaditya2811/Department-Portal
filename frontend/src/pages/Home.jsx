import { Link } from "react-router-dom";

const courses = [
  {
    code: "CS 201",
    title: "Data Structures & Algorithms",
    desc: "Core sequencing, trees, graphs, and complexity analysis.",
  },
  {
    code: "CS 314",
    title: "Database Systems",
    desc: "Relational design, normalization, SQL, and transactions.",
  },
  {
    code: "CS 402",
    title: "Web Application Engineering",
    desc: "Full-stack design with JavaScript, REST, and MongoDB.",
  },
  {
    code: "CS 455",
    title: "Distributed Systems",
    desc: "Consistency, replication, and fault tolerance at scale.",
  },
];

const notices = [
  { date: "Sep 10, 2026", title: "Registration for the Fall semester closes September 30." },
  { date: "Sep 03, 2026", title: "Guest lecture on distributed databases, Room 214, 3 PM." },
  { date: "Aug 22, 2026", title: "New MERN-stack lab opens for undergraduate project work." },
];

export default function Home({ user }) {
  return (
    <>
      <section className="hero">
        <div>
          <p className="hero-eyebrow">Faculty of Engineering &amp; Applied Sciences</p>
          <h1>Department of Computer Science</h1>
          <p className="lede">
            We train students to design, build, and reason about the systems that
            run the modern world — from database engines to distributed
            infrastructure.
          </p>
          <div className="hero-actions">
            {!user && (
              <Link to="/register" className="btn btn-primary">
                Apply for admission
              </Link>
            )}
            <Link to="/about" className="btn btn-outline">
              About the department
            </Link>
          </div>
        </div>

        <dl className="hero-panel">
          <dt>Department chair</dt>
          <dd>Dr. Aravind Kumar</dd>
          <dt>Founded</dt>
          <dd>1994</dd>
          <dt>Enrolled students</dt>
          <dd>612</dd>
          <dt>Office</dt>
          <dd>Block C, Room 301</dd>
        </dl>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Featured courses</h2>
          <span className="section-note">Undergraduate &amp; graduate catalog</span>
        </div>
        <div className="course-grid">
          {courses.map((c) => (
            <div className="course-card" key={c.code}>
              <div className="course-code">{c.code}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Department notices</h2>
          <span className="section-note">Updated weekly</span>
        </div>
        <ul className="notice-list">
          {notices.map((n) => (
            <li key={n.title}>
              <span className="notice-date">{n.date}</span>
              <span className="notice-title">{n.title}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
