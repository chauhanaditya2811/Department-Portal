const faculty = [
  { name: "Dr. Aravind Kumar", role: "Department Chair, Distributed Systems", bio: "Leads research on fault-tolerant infrastructure and teaches CS 455." },
  { name: "Dr. Meera Iyer", role: "Associate Professor, Databases", bio: "Focuses on query optimization and transactional storage engines." },
  { name: "Dr. Wei Chen", role: "Assistant Professor, Web Systems", bio: "Builds developer tooling for full-stack JavaScript frameworks." },
  { name: "Dr. Sara Fontaine", role: "Assistant Professor, AI & ML", bio: "Researches applied machine learning for scientific computing." },
];

export default function About() {
  return (
    <>
      <section className="about-hero">
        <p className="hero-eyebrow">About the department</p>
        <h1>Thirty years of teaching people to build real systems.</h1>
        <p className="lede">
          The Department of Computer Science was founded in 1994 with a single
          lab and twelve students. Today we run undergraduate and graduate
          programs across software engineering, databases, distributed
          systems, and artificial intelligence, with a teaching philosophy
          built around shipping working software, not just studying theory.
        </p>

        <div className="stat-row">
          <div className="stat">
            <strong>612</strong>
            <span>Students enrolled</span>
          </div>
          <div className="stat">
            <strong>34</strong>
            <span>Full-time faculty</span>
          </div>
          <div className="stat">
            <strong>18</strong>
            <span>Research labs</span>
          </div>
          <div className="stat">
            <strong>1994</strong>
            <span>Year founded</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Faculty</h2>
          <span className="section-note">Selected teaching staff</span>
        </div>
        <div className="faculty-grid">
          {faculty.map((f) => (
            <div className="faculty-card" key={f.name}>
              <h3>{f.name}</h3>
              <div className="faculty-role">{f.role}</div>
              <p>{f.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Mission</h2>
        </div>
        <p>
          We prepare students to reason clearly about complex systems and to
          build software that holds up under real-world conditions —
          scalability, correctness, and maintainability are treated as first
          -class concerns from the very first course.
        </p>
      </section>
    </>
  );
}
