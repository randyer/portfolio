import { useEffect, useState } from "react";
import { profile, experience, projects, skills, education, about } from "./content";
import "./forest.css";

const ext = (href) => (href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {});
const SECTIONS = ["experience", "projects", "skills", "about"];

function Forest() {
  const [active, setActive] = useState(SECTIONS[0]);

  // Highlight the nav item for whichever section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fr">
      <div className="fr-layout">
        <aside className="fr-side">
          <div>
            <h1>{profile.name}</h1>
            <p className="fr-role">{profile.role}</p>
            <p className="fr-tagline">{profile.tagline}</p>
            <nav className="fr-nav">
              {SECTIONS.map((id) => (
                <a key={id} href={`#${id}`} className={active === id ? "is-active" : ""}>
                  <span className="fr-nav-line" />
                  {id}
                </a>
              ))}
            </nav>
          </div>
          <div className="fr-social">
            <a href={`mailto:${profile.email}`}>Email</a>
            {profile.links.map((l) => (
              <a key={l.label} href={l.href} {...ext(l.href)}>
                {l.label}
              </a>
            ))}
          </div>
        </aside>

        <main className="fr-main">
          <section id="experience">
            <h2 className="fr-h2">Experience</h2>
            {experience.map((job) => (
              <article key={job.company} className="fr-card">
                <p className="fr-dates">{job.dates}</p>
                <div>
                  <h3>
                    {job.role} · <span className="fr-gold">{job.company}</span>
                  </h3>
                  {job.summary && <p className="fr-text">{job.summary}</p>}
                  {job.points.length > 0 && (
                    <ul className="fr-list">
                      {job.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  )}
                  {job.tags.length > 0 && (
                    <div className="fr-tags">
                      {job.tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </section>

          <section id="projects">
            <h2 className="fr-h2">Projects</h2>
            {projects.map((p) => (
              <article key={p.title} className="fr-card">
                <p className="fr-dates">{p.context}</p>
                <div>
                  {p.image && <img className="fr-img" src={p.image.src} alt={p.image.alt} />}
                  <h3>{p.title}</h3>
                  <p className="fr-text">{p.description}</p>
                  <div className="fr-tags">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  {p.links.length > 0 && (
                    <div className="fr-links">
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
          </section>

          <section id="skills">
            <h2 className="fr-h2">Skills</h2>
            <div className="fr-skills">
              {skills.map((s) => (
                <div key={s.group}>
                  <h4>{s.group}</h4>
                  <p>{s.items.join(" · ")}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="about">
            <h2 className="fr-h2">About</h2>
            <p className="fr-text">
              {education.degree}, {education.school} ({education.year}).
            </p>
            <p className="fr-text">{about}</p>
            <a className="fr-cta" href={`mailto:${profile.email}`}>
              Get in touch →
            </a>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Forest;
