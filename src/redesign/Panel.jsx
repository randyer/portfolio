import { profile, experience, projects, skills, education, about } from "./content";
import "./panel.css";

const ext = (href) => (href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {});
const pad = (n) => String(n).padStart(2, "0");

function Panel() {
  return (
    <div className="pn">
      <div className="pn-statusbar">
        <span>
          <i className="pn-led pn-led--ok" /> System normal
        </span>
        <span className="pn-statusbar-right">{profile.role}</span>
      </div>

      <div className="pn-page">
        <header className="pn-hero">
          <p className="pn-kicker">// portfolio</p>
          <h1>{profile.name}</h1>
          <p className="pn-tagline">{profile.tagline}</p>
          <nav className="pn-buttons">
            <a className="pn-btn pn-btn--primary" href={`mailto:${profile.email}`}>
              Email me
            </a>
            {profile.links.map((l) => (
              <a key={l.label} className="pn-btn" href={l.href} {...ext(l.href)}>
                {l.label}
              </a>
            ))}
          </nav>
        </header>

        <section>
          <h2 className="pn-h2">Experience</h2>
          <div className="pn-rows">
            {experience.map((job) => (
              <article key={job.company} className="pn-row">
                <div className="pn-row-head">
                  <span className={`pn-led ${job.current ? "pn-led--ok pn-led--pulse" : "pn-led--off"}`} />
                  <h3>{job.company}</h3>
                  <span className="pn-badge">{job.current ? "Active" : "Logged"}</span>
                  <span className="pn-dates">{job.dates}</span>
                </div>
                <p className="pn-role">{job.role}</p>
                {job.summary && <p className="pn-text">{job.summary}</p>}
                {job.points.length > 0 && (
                  <ul className="pn-list">
                    {job.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                )}
                {job.tags.length > 0 && (
                  <div className="pn-chips">
                    {job.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="pn-h2">Projects</h2>
          <div className="pn-grid">
            {projects.map((p, i) => (
              <article key={p.title} className="pn-tile">
                <div className="pn-tile-head">
                  <span className="pn-zone">Zone {pad(i + 1)}</span>
                  <span className="pn-led pn-led--alarm" />
                </div>
                <h3>{p.title}</h3>
                <p className="pn-role">{p.context}</p>
                <p className="pn-text">{p.description}</p>
                <div className="pn-chips">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                {p.links.length > 0 && (
                  <div className="pn-tile-links">
                    {p.links.map((l) => (
                      <a key={l.label} href={l.href} {...ext(l.href)}>
                        {l.label} →
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="pn-split">
          <div>
            <h2 className="pn-h2">Skills</h2>
            {skills.map((s) => (
              <div key={s.group} className="pn-skill">
                <span className="pn-zone">{s.group}</span>
                <div className="pn-chips">
                  {s.items.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div>
            <h2 className="pn-h2">Education</h2>
            <p className="pn-strong">{education.school}</p>
            <p className="pn-role">
              {education.degree} · {education.year}
            </p>
            <h2 className="pn-h2 pn-h2--spaced">About</h2>
            <p className="pn-text">{about}</p>
          </div>
        </section>

        <footer className="pn-footer">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
        </footer>
      </div>
    </div>
  );
}

export default Panel;
