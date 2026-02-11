import './about.css'

export default function About() {
  return (
    <div className="about">
      <section className="about__intro">
        <h1>About</h1>
        <p>
          I am a frontend engineer with over 17 years of experience building web
          applications across different domains and team environments.
        </p>
      </section>

      <section className="about__experience">
        <p>
          Over the years, I have worked extensively with React, Angular, and
          TypeScript, focusing on UI architecture, performance, and developer
          experience. I enjoy solving complex interface problems by breaking
          them down into simple, reusable, and maintainable components.
        </p>
      </section>

      <section className="about__philosophy">
        <h2>Engineering Philosophy</h2>
        <ul>
          <li>
            Good coding standards are a prerequisite for scalable systems.
          </li>
          <li>
            UI engineering requires both design thinking and technical depth.
          </li>
          <li>
            Simplicity is usually the hardest — and most valuable — outcome.
          </li>
        </ul>
      </section>

      <section className="about__direction">
        <h2>Looking Ahead</h2>
        <p>
          I am currently working as a Staff Software Engineer, contributing to
          large-scale data platforms and frontend systems. I am interested in
          growing into roles where I can influence technical direction,
          strengthen engineering practices, and mentor other engineers.
        </p>
      </section>
    </div>
  )
}
