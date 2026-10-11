import { profile, experience, projects, skills, education, about } from "./content";
import "./editorial.css";

const ext = (href) => (href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {});

function Section({ label, children }) {
  return (
    <section className="ed-section">
      <h2 className="ed-label">{label}</h2>
      <div className="ed-body">{children}</div>
    </section>
  );
}

function Editorial() {
  return (
    <div className="ed">
      <div className="ed-page">
        <header className="ed-hero">
          <h1>{profile.name}</h1>
          <p className="ed-tagline">{profile.tagline}</p>
          <nav className="ed-links">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            {profile.links.map((l) => (
              <a key={l.label} href={l.href} {...ext(l.href)}>
                {l.label} ↗
              </a>
            ))}
          </nav>
        </header>

        <Section label="Experience">
          {experience.map((job) => (
            <article key={job.company} className="ed-item">
              <div className="ed-item-head">
                <h3>
                  {job.company}
                  {job.current && <span className="ed-now">Now</span>}
                </h3>
                <span className="ed-meta">{job.dates}</span>
              </div>
              <p className="ed-sub">{job.role}</p>
              {job.summary && <p>{job.summary}</p>}
              {job.points.length > 0 && (
                <ul>
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              )}
              {job.tags.length > 0 && <p className="ed-tags">{job.tags.join(" · ")}</p>}
            </article>
          ))}
        </Section>

        <Section label="Projects">
          {projects.map((p) => (
            <article key={p.title} className="ed-item">
              <div className="ed-item-head">
                <h3>{p.title}</h3>
                <span className="ed-meta">
                  {p.links.map((l) => (
                    <a key={l.label} href={l.href} {...ext(l.href)}>
                      {l.label} ↗
                    </a>
                  ))}
                </span>
              </div>
              <p className="ed-sub">{p.context}</p>
              <p>{p.description}</p>
              <p className="ed-tags">{p.tags.join(" · ")}</p>
            </article>
          ))}
        </Section>

        <Section label="Skills">
          <dl className="ed-skills">
            {skills.map((s) => (
              <div key={s.group}>
                <dt>{s.group}</dt>
                <dd>{s.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section label="Education">
          <div className="ed-item-head">
            <h3>{education.school}</h3>
            <span className="ed-meta">{education.year}</span>
          </div>
          <p className="ed-sub">{education.degree}</p>
        </Section>

        <Section label="About">
          <p>{about}</p>
        </Section>

        <footer className="ed-footer">
          <a href={`mailto:${profile.email}`}>Say hello →</a>
          <span>© {new Date().getFullYear()} {profile.name}</span>
        </footer>
      </div>
    </div>
  );
}

export default Editorial;
