import { Helmet } from 'react-helmet-async'
import './about.css'
import { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    document.title = 'Rupam Datta | About'
  }, [])

  return (
    <div className="about">
      <section className="about__intro">
        <Helmet>
          <title>Rupam Datta | About | Staff Engineer</title>
          <meta
            name="description"
            content="I am a Staff Software Engineer with 18+ years of experience designing and building scalable frontend architectures using React, Angular, and modern web technologies."
          />
          <link rel="canonical" href="https://www.rupamdatta.com/about" />
        </Helmet>
        <h1>About</h1>
        <p>
          I am a Senior Staff Software Engineer with 18+ years of experience
          building large-scale frontend systems for enterprise products across
          on-prem, hybrid, and cloud environments.
        </p>
        <p>
          My work focuses on frontend architecture, design systems, and
          data-intensive user interfaces where correctness, consistency, and
          long-term maintainability are critical. Over the years, I have worked
          extensively with React, Angular, and TypeScript, designing UI
          foundations that teams and products scale on top of.
        </p>
        <p>
          Across companies such as Acceldata, Cloudera, and Citrix, I have
          contributed to platform-critical initiatives including
          permission-driven UI systems, persona-based workflows, design systems,
          onboarding experiences, and visualization-driven interfaces for
          complex data platforms.
        </p>
        <p>
          I specialise in simplifying complex systems while preserving backward
          compatibility and protecting existing customers. Much of my work
          involves breaking down large problem spaces into clean, reusable, and
          maintainable frontend architecture that can evolve over time without
          creating unnecessary operational risk.
        </p>
        <p>
          What has changed at this stage of my career is the scope of impact. I
          focus not only on building systems, but also on identifying the right
          problems, driving architectural decisions, improving engineering
          standards, and helping teams scale effectively.
        </p>
      </section>

      <section className="about__philosophy">
        <h2>Engineering Philosophy</h2>
        <ul>
          <li>Good coding standards are foundational to scalable systems</li>
          <li>
            Simplicity is usually the hardest — and most valuable — outcome
          </li>
          <li>Reusable systems reduce long-term engineering friction</li>
          <li>
            Frontend engineering requires both product thinking and technical
            depth
          </li>
          <li>
            Maintainability and correctness matter as much as feature delivery
          </li>
        </ul>
      </section>

      <section className="philosophy">
        <h3>How I work</h3>
        <p>
          I work as a senior individual contributor who collaborates closely
          with product, UX, and backend teams to deliver production-ready
          systems that scale with both the product and the organisation.
        </p>
        <p>I enjoy working on:</p>

        <ul>
          <li>Frontend architecture and platform design</li>
          <li>Reusable component systems and design systems</li>
          <li>Cross-framework frontend strategies</li>
          <li>Complex data visualisation and workflow-driven interfaces</li>
          <li>Technical debt reduction and long-term system health</li>
          <li>
            Mentoring engineers through architecture and implementation
            challenges
          </li>
        </ul>
      </section>

      <section className="about__direction">
        <h2>Looking Ahead</h2>
        <p>
          I am currently working as a Senior Staff Engineer, contributing to
          frontend architecture and scalable UI systems for large-scale data
          reliability platforms. I am interested in roles where I can continue
          influencing technical direction, driving frontend strategy, mentoring
          engineers, and building systems that enable teams to move faster with
          confidence.
        </p>
      </section>
    </div>
  )
}
