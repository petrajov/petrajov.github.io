import { profile, about, skills, projects } from './data.js'

function Header() {
  return (
    <header className="header">
      <a href="#top" className="logo">{profile.name}</a>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="hero">
      <p className="eyebrow">Hi, I'm</p>
      <h1>{profile.name}</h1>
      <h2>{profile.role}</h2>
      <p className="tagline">{profile.tagline}</p>
      <div className="actions">
        <a className="button primary" href="#projects">See my work</a>
        <a className="button" href={`mailto:${profile.email}`}>Get in touch</a>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about">
      <h3 className="section-title">About</h3>
      {about.map((p, i) => <p key={i}>{p}</p>)}
      <ul className="skills">
        {skills.map((s) => <li key={s}>{s}</li>)}
      </ul>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects">
      <h3 className="section-title">Projects</h3>
      <div className="grid">
        {projects.map((p) => (
          <article key={p.title} className="card">
            <h4>{p.title}</h4>
            <p>{p.description}</p>
            <ul className="tags">
              {p.tags.map((t) => <li key={t}>{t}</li>)}
            </ul>
            {p.link && (
              <a href={p.link} target="_blank" rel="noreferrer">View project →</a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact">
      <h3 className="section-title">Contact</h3>
      <p>
        Want to work together or just say hi? Email me at{' '}
        <a href={`mailto:${profile.email}`}>{profile.email}</a>.
      </p>
      <ul className="links">
        {profile.links.map((l) => (
          <li key={l.label}>
            <a href={l.url} target="_blank" rel="noreferrer">{l.label}</a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer>© {new Date().getFullYear()} {profile.name}</footer>
    </>
  )
}
