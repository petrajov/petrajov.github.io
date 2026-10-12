import { useEffect, useState } from 'react'
import { profile, skills, projects, experience, about } from './data.js'

const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#/about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

function Header({ page }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="header container">
      <a href="#top" className="logo" onClick={close}>
        PJ<span>.</span>
      </a>
      <nav className="nav" aria-label="Main">
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} aria-current={l.href === '#/about' && page === 'about' ? 'page' : undefined}>{l.label}</a>
        ))}
      </nav>
      <button
        type="button"
        className="menu-toggle"
        aria-label="Toggle menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(!open)}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>
      {open && (
        <nav id="mobile-menu" className="mobile-menu" aria-label="Main">
          {navLinks.map((l) => <a key={l.href} href={l.href} onClick={close}>{l.label}</a>)}
        </nav>
      )}
    </header>
  )
}

function Hero() {
  const [first, last] = profile.name.toUpperCase().split(' ')
  return (
    <section id="top" className="hero container">
      <p className="pill">{profile.location} · {profile.status}</p>
      <h1 className="hero-title">{first}<br />{last}</h1>
      <p className="hero-intro">{profile.intro}</p>
      <div className="actions">
        <a className="btn btn-primary" href="#work">See selected work</a>
        <a className="btn btn-secondary" href="#contact">Say hello</a>
      </div>
      <div className="hero-badge" aria-hidden="true">
        {profile.badge[0]}<br />{profile.badge[1]}
      </div>
    </section>
  )
}

function SkillTicker() {
  // Rendered twice so the loop is seamless; screen readers get the plain list instead.
  const items = [...skills, ...skills]
  return (
    <div className="ticker">
      <p className="sr-only">Skills: {skills.join(', ')}</p>
      <div className="ticker-track" aria-hidden="true">
        {items.map((s, i) => (
          <span key={i} className="ticker-item">{s} <span>✦</span></span>
        ))}
      </div>
    </div>
  )
}

function Work() {
  return (
    <section id="work" className="section container">
      <div className="section-head">
        <h2 className="display-l">Selected work</h2>
      </div>
      <div className="project-grid">
        {projects.map((p) => (
          <a key={p.slug} className="project-card" href={`#/work/${p.slug}`}>
            <div className="project-media">
              <img src={p.img} alt={p.alt} />
            </div>
            <div className="project-body">
              <p className="eyebrow">Project {p.n}</p>
              <h3 className="display-s">{p.title}</h3>
              <p className="project-blurb">{p.blurb}</p>
              <ul className="tags">
                {p.stack.slice(0, 4).map((t) => <li key={t} className="tag">{t}</li>)}
              </ul>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="section container">
      <h2 className="display-l">Experience</h2>
      <ol className="timeline">
        {experience.map((e) => (
          <li key={e.when} className="timeline-row">
            <div>
              <p className="timeline-when">{e.when}</p>
              <p className="timeline-where">{e.where}</p>
            </div>
            <div className="timeline-main">
              <h3 className="timeline-role">{e.role}</h3>
              <p className="timeline-text">{e.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="contact container">
      <div className="contact-panel">
        <h2 className="contact-title">Let's build<br />something</h2>
        <p className="contact-text">Hiring, collaborating or just curious? Send a message.</p>
        <div className="actions">
          <a className="btn btn-dark" href={`mailto:${profile.email}`}>{profile.email}</a>
          <a className="btn btn-outline-dark" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}

// Routes use the hash ("#/work/<slug>") so GitHub Pages needs no server rewrites.
// Plain anchors like "#work" are not routes: they render the home page and scroll.
function useHash() {
  const [hash, setHash] = useState(window.location.hash)
  useEffect(() => {
    const onChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return hash
}

const metaLabels = { role: 'Role', company: 'Company', domain: 'Domain' }

function ProjectPage({ project }) {
  const i = projects.indexOf(project)
  const isLast = i === projects.length - 1
  const next = projects[(i + 1) % projects.length]

  useEffect(() => {
    document.title = `${project.title} · Petra Jović`
    return () => { document.title = 'Petra Jović · Frontend Engineer' }
  }, [project])

  return (
    <article className="case">
      <header className="container case-header">
        <a className="back-link" href="#work">← All work</a>
        <p className="eyebrow case-eyebrow">Project {project.n}</p>
        <h1 className="case-title">{project.title}</h1>
        <p className="case-intro">{project.intro}</p>
        <dl className="case-meta">
          {Object.entries(metaLabels).map(([key, label]) => (
            <div key={key}><dt>{label}</dt><dd>{project.meta[key]}</dd></div>
          ))}
        </dl>
      </header>

      <section className="container case-row">
        <h2 className="case-h2">Overview</h2>
        <div className="case-col">
          {[].concat(project.overview).map((t) => <p key={t} className="case-text">{t}</p>)}
        </div>
      </section>

      <section className="container case-row">
        <h2 className="case-h2">What I built</h2>
        <ol className="case-col built-grid">
          {project.built.map((b, j) => (
            <li key={b.title} className="built-card">
              <p className="built-n">{String(j + 1).padStart(2, '0')}</p>
              <h3 className="built-title">{b.title}</h3>
              <p className="built-text">{b.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {project.gallery && (
        <div className="container case-gallery">
          {project.gallery.map((g) => (
            <div key={g.img} className="case-gallery-item">
              <img src={g.img} alt={g.alt} />
            </div>
          ))}
        </div>
      )}

      <section className="container case-row">
        <h2 className="case-h2">Approach</h2>
        <div className="case-col">
          <p className="case-text">{project.approach}</p>
          <h3 className="eyebrow case-sub">Outcome</h3>
          <p className="case-text case-sub-text">{project.outcome}</p>
          <h3 className="eyebrow case-sub">Stack</h3>
          <ul className="tags case-stack">
            {project.stack.map((t) => <li key={t} className="tag">{t}</li>)}
          </ul>
        </div>
      </section>

      <div className="container case-next">
        <p className="case-next-label">{isLast ? 'Back to the start' : 'Next project'}</p>
        <a className="next-project" href={`#/work/${next.slug}`}>
          <span className="next-title">{next.title} →</span>
          <span className="next-tagline">{next.tagline}</span>
        </a>
      </div>
    </article>
  )
}

function AboutPage() {
  const initials = profile.name.split(' ').map((w) => w[0]).join('')
  // The contact panel is on this page too, so scroll to it instead of leaving for home.
  const toContact = (e) => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView()
  }

  useEffect(() => {
    document.title = 'About · Petra Jović'
    return () => { document.title = 'Petra Jović · Frontend Engineer' }
  }, [])

  return (
    <article className="about container">
      <div className="about-intro">
        <div className="about-photo-wrap">
          {about.photo
            ? <img className="about-photo" src={about.photo} alt={`Portrait of ${profile.name}`} />
            : <div className="about-photo" aria-hidden="true">{initials}</div>}
        </div>
        <div className="about-text">
          <p className="eyebrow">About</p>
          <h1 className="about-title">Hi, I'm {profile.name.split(' ')[0]}.</h1>
          {about.paragraphs.map((t) => <p key={t} className="about-para">{t}</p>)}
          <div className="actions about-actions">
            {about.cv && <a className="btn btn-primary" href={about.cv} download>Download CV (PDF)</a>}
            <a className="btn btn-secondary" href="#contact" onClick={toContact}>Get in touch</a>
          </div>
        </div>
      </div>

      <section className="about-section">
        <h2 className="display-l">How I work</h2>
        <div className="principles">
          {about.principles.map((p) => (
            <div key={p.n} className="principle">
              <p className="principle-n">{p.n}</p>
              <h3 className="display-s">{p.title}</h3>
              <p className="principle-text">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section">
        <h2 className="display-l">Toolkit</h2>
        <div className="toolkit">
          {about.toolkit.map((g) => (
            <div key={g.title}>
              <h3 className="eyebrow">{g.title}</h3>
              <ul className="tags toolkit-tags">
                {g.items.map((t) => <li key={t} className="tag">{t}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section about-facts">
        <div className="fact-block">
          <h2 className="fact-label">Education</h2>
          <p className="fact-title">{about.education.degree}</p>
          <p className="fact-text">{about.education.school} · {about.education.years}</p>
        </div>
        <div className="fact-block">
          <h2 className="fact-label">Languages</h2>
          <dl className="languages">
            {about.languages.map((l) => (
              <div key={l.name}><dt>{l.name}</dt><dd>{l.level}</dd></div>
            ))}
          </dl>
        </div>
      </section>
    </article>
  )
}

function Home() {
  return (
    <>
      <Hero />
      <SkillTicker />
      <Work />
      <Experience />
    </>
  )
}

export default function App() {
  const hash = useHash()
  const slug = hash.match(/^#\/work\/([\w-]+)/)?.[1]
  const project = projects.find((p) => p.slug === slug)
  const page = project ? 'project' : hash === '#/about' ? 'about' : 'home'

  useEffect(() => {
    if (page !== 'home') {
      window.scrollTo({ top: 0, behavior: 'instant' })
      return
    }
    // Coming back from a project page: the target section only exists after this render.
    const id = hash.slice(1)
    if (id && !id.startsWith('/')) document.getElementById(id)?.scrollIntoView()
  }, [hash, page])

  return (
    <>
      <Header page={page} />
      <main>
        {page === 'project' && <ProjectPage key={project.slug} project={project} />}
        {page === 'about' && <AboutPage />}
        {page === 'home' && <Home />}
        <Contact />
      </main>
    </>
  )
}
