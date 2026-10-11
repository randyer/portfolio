import { FileText, Github, Linkedin } from "lucide-react";
import { profile, experience, projects, skills, education, about } from "./content";
import "./portfolio.css";

const ICONS = { GitHub: Github, LinkedIn: Linkedin, "Résumé": FileText };

const ext = (href) => (href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {});

function Tags({ items }) {
  return (
    <div className="pf-tags">
      {items.map((t) => (
        <span key={t}>{t}</span>
      ))}
    </div>
  );
}

function Portfolio() {
  return (
    <div className="pf">
      <div className="pf-page">
        <header className="pf-hero">
          <h1>{profile.name}</h1>
          <p className="pf-role">{profile.role}</p>
          <p className="pf-tagline">{profile.tagline}</p>
          <nav className="pf-buttons">
            <a className="pf-btn pf-btn--primary" href={`mailto:${profile.email}`}>
              Email me
            </a>
            {profile.links.map((l) => {
              const Icon = ICONS[l.label];
              return (
                <a
                  key={l.label}
                  className="pf-btn pf-btn--icon"
                  href={l.href}
                  aria-label={l.label}
                  title={l.label}
                  {...ext(l.href)}
                >
                  <Icon size={20} strokeWidth={1.75} />
                </a>
              );
            })}
          </nav>
        </header>

        <section>
          <h2 className="pf-h2">Experience</h2>
          <div className="pf-rows">
            {experience.map((job) => (
              <article key={job.company}>
                <div className="pf-row-head">
                  <h3>{job.company}</h3>
                  {job.current && <span className="pf-badge">Current</span>}
                  <span className="pf-dates">{job.dates}</span>
                </div>
                <p className="pf-sub">{job.role}</p>
                {job.summary && <p className="pf-text">{job.summary}</p>}
                {job.points.length > 0 && (
                  <ul className="pf-list">
                    {job.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                )}
                {job.tags.length > 0 && <Tags items={job.tags} />}
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="pf-h2">Projects</h2>
          <div className="pf-grid">
            {projects.map((p) => (
              <article key={p.title} className={`pf-tile${p.image ? " pf-tile--featured" : ""}`}>
                {p.image && <img className="pf-img" src={p.image.src} alt={p.image.alt} />}
                <div className="pf-tile-body">
                  <h3>{p.title}</h3>
                  <p className="pf-sub">{p.context}</p>
                  <p className="pf-text">{p.description}</p>
                  <Tags items={p.tags} />
                  {p.links.length > 0 && (
                    <div className="pf-tile-links">
                      {p.links.map((l) => (
                        <a key={l.label} href={l.href} {...ext(l.href)}>
                          {l.label} ↗
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="pf-split">
          <div>
            <h2 className="pf-h2">Skills</h2>
            {skills.map((s) => (
              <div key={s.group} className="pf-skill">
                <h4>{s.group}</h4>
                <Tags items={s.items} />
              </div>
            ))}
          </div>
          <div>
            <h2 className="pf-h2">Education</h2>
            <h3>{education.school}</h3>
            <p className="pf-sub">
              {education.degree} · {education.year}
            </p>
            <h2 className="pf-h2 pf-h2--spaced">About</h2>
            <p className="pf-text">{about}</p>
          </div>
        </section>

        <footer className="pf-footer">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
        </footer>
      </div>
    </div>
  );
}

export default Portfolio;
