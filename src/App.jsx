import { portfolio } from './data/portfolio';

function App() {
  const { candidate } = portfolio;

  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero candidate={candidate} />
        <Metrics />
        <Expertise />
        <Projects />
        <Experience />
        <Skills />
        <Principles />
        <Credentials />
        <Contact candidate={candidate} />
      </main>
      <Footer candidate={candidate} />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <a className="brand" href="#top" aria-label="Go to top">
        <span className="brand-mark">BC</span>
        <span>
          <strong>Blu Andrei</strong> / .NET + React
        </span>
      </a>
      <nav className="nav" aria-label="Main navigation">
        {portfolio.navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero({ candidate }) {
  return (
    <section className="hero section" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Available for {candidate.targetRole}</p>
        <h1>
          {candidate.name}
          <span>{candidate.role}</span>
        </h1>
        <p className="hero-summary">{candidate.summary}</p>
        <p className="hero-pitch">{candidate.elevatorPitch}</p>
        <div className="hero-actions" aria-label="Primary actions">
          <a className="button button-primary" href={`mailto:${candidate.email}`}>
            Contact Me
          </a>
          <a className="button button-secondary" href={candidate.resume} target="_blank" rel="noreferrer">
            View Resume
          </a>
        </div>
      </div>
      <aside className="hero-card" aria-label="Candidate profile summary">
        <div className="profile-card-top">
          <div className="avatar" aria-hidden="true">
            {getInitials(candidate.name)}
          </div>
          <div>
            <p className="muted-label">Candidate Snapshot</p>
            <h2>{candidate.targetRole}</h2>
          </div>
        </div>
        <dl className="profile-list">
          <ProfileField label="Location">{candidate.location}</ProfileField>
          <ProfileField label="Email">
            <a href={`mailto:${candidate.email}`}>{candidate.email}</a>
          </ProfileField>
          <ProfileField label="Phone">
            <a href={`tel:${candidate.phone.replace(/\s/g, '')}`}>{candidate.phone}</a>
          </ProfileField>
          <ProfileField label="Core stack">{candidate.coreStack}</ProfileField>
          {isRealLink(candidate.linkedin) && (
            <ProfileField label="LinkedIn">
              <a href={candidate.linkedin} target="_blank" rel="noreferrer">
                Profile Link
              </a>
            </ProfileField>
          )}
          {isRealLink(candidate.github) && (
            <ProfileField label="GitHub">
              <a href={candidate.github} target="_blank" rel="noreferrer">
                Code Samples
              </a>
            </ProfileField>
          )}
        </dl>
      </aside>
    </section>
  );
}

function Metrics() {
  return (
    <section className="metrics-grid" aria-label="Professional highlights">
      {portfolio.metrics.map((metric) => (
        <article className="metric-card" key={metric.label}>
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
          <p>{metric.detail}</p>
        </article>
      ))}
    </section>
  );
}

function Expertise() {
  return (
    <section className="section" id="expertise">
      <SectionHeading
        eyebrow="What I bring"
        title="Full-stack value for .NET, React, API, and middleware teams"
      >
        My work sits across business applications, API integration, database-backed workflows,
        background processing, testing, documentation, and release support.
      </SectionHeading>
      <div className="cards-grid two-columns">
        {portfolio.expertise.map((item) => (
          <article className="card expertise-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <ul className="chip-list" aria-label={`${item.title} skills`}>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section" id="projects">
      <SectionHeading eyebrow="Selected work" title="Project experience from finance and land registration systems">
        These projects highlight practical production experience: executive reporting, third-party API
        integrations, financial services applications, legacy support, migration tooling, and synchronization.
      </SectionHeading>
      <div className="project-list">
        {portfolio.projects.map((project, index) => (
          <article className="project-card" key={project.name}>
            <div className="project-index">0{index + 1}</div>
            <div className="project-content">
              <div className="project-header">
                <div>
                  <p className="eyebrow">{project.type}</p>
                  <h3>{project.name}</h3>
                </div>
                <div className="project-links">
                  {isRealLink(project.repo) && <a href={project.repo}>Repo</a>}
                  {isRealLink(project.demo) && <a href={project.demo}>Demo</a>}
                  {!isRealLink(project.repo) && !isRealLink(project.demo) && <span>{project.status}</span>}
                </div>
              </div>
              <p className="project-summary">{project.summary}</p>
              <div className="project-details">
                <InfoBlock title="Problem" text={project.problem} />
                <InfoBlock title="Contribution" text={project.contribution} />
                <InfoBlock title="Impact" text={project.impact} />
              </div>
              <div className="project-bottom">
                <ul className="chip-list" aria-label={`${project.name} technology stack`}>
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <ul className="highlight-list">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section" id="experience">
      <SectionHeading eyebrow="Experience" title="Production experience across business-critical systems">
        The timeline focuses on ownership, delivery support, integrations, performance work, and the
        type of systems that matter for mid-to-senior .NET and React roles.
      </SectionHeading>
      <div className="timeline">
        {portfolio.experience.map((item) => (
          <article className="timeline-item" key={`${item.company}-${item.role}`}>
            <div className="timeline-marker" aria-hidden="true" />
            <div className="timeline-card">
              <div className="timeline-card-header">
                <div>
                  <h3>{item.role}</h3>
                  <p>{item.company}</p>
                </div>
                <span>{item.period}</span>
              </div>
              <p>{item.summary}</p>
              <ul>
                {item.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section" id="skills">
      <SectionHeading eyebrow="Technical stack" title="Tools I use to deliver application, API, and data work">
        Recruiters can quickly scan the stack, while interviewers can connect each tool to the project
        and experience sections above.
      </SectionHeading>
      <div className="skills-grid">
        {portfolio.skillGroups.map((group) => (
          <article className="skill-group" key={group.name}>
            <h3>{group.name}</h3>
            <ul>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Principles() {
  return (
    <section className="section principles-section">
      <SectionHeading eyebrow="Working style" title="How I approach senior-leaning engineering work">
        I try to combine practical delivery speed with maintainability, documentation, traceability,
        and production support readiness.
      </SectionHeading>
      <div className="cards-grid three-columns">
        {portfolio.principles.map((principle) => (
          <article className="card principle-card" key={principle.title}>
            <h3>{principle.title}</h3>
            <p>{principle.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Credentials() {
  return (
    <section className="section" id="credentials">
      <SectionHeading eyebrow="Credentials" title="Education, certifications, and training">
        Formal background and technical training that support the engineering experience shown above.
      </SectionHeading>
      <div className="cards-grid two-columns">
        {portfolio.credentials.map((group) => (
          <article className="card credential-card" key={group.title}>
            <h3>{group.title}</h3>
            <ul className="credential-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact({ candidate }) {
  return (
    <section className="section contact-section" id="contact">
      <div>
        <p className="eyebrow">Next step</p>
        <h2>Looking for a .NET + React developer who can own application features end to end?</h2>
        <p>{candidate.availability}</p>
      </div>
      <div className="contact-card">
        <a className="button button-primary" href={`mailto:${candidate.email}`}>
          Email Blu
        </a>
        <a className="button button-secondary" href={`tel:${candidate.phone.replace(/\s/g, '')}`}>
          Call / SMS
        </a>
        <a className="button button-secondary" href={candidate.resume} target="_blank" rel="noreferrer">
          Resume PDF
        </a>
        {isRealLink(candidate.linkedin) && (
          <a className="button button-secondary" href={candidate.linkedin} target="_blank" rel="noreferrer">
            LinkedIn Profile
          </a>
        )}
        {isRealLink(candidate.github) && (
          <a className="button button-secondary" href={candidate.github} target="_blank" rel="noreferrer">
            GitHub Portfolio
          </a>
        )}
      </div>
    </section>
  );
}

function Footer({ candidate }) {
  return (
    <footer className="footer">
      <p>Built with React JS for {candidate.name}. Content is managed in src/data/portfolio.js.</p>
      <a href="#top">Back to top</a>
    </footer>
  );
}

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}

function InfoBlock({ title, text }) {
  return (
    <div className="info-block">
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}

function ProfileField({ label, children }) {
  return (
    <div>
      <dt>{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}

function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function isRealLink(value) {
  return Boolean(value && value !== '#');
}

export default App;
