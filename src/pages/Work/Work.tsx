import { useEffect } from 'react'
import './work.css'
import { Helmet } from 'react-helmet-async'

export default function Work() {
  useEffect(() => {
    document.title = 'Rupam Datta | Work'
  }, [])

  return (
    <div className="work">
      <section className="work__intro">
        <Helmet>
          <title>Rupam Datta | Work | Staff Engineer</title>
          <meta
            name="description"
            content="With 18+ years of experience in frontend engineering, I have delivered scalable React and Angular solutions that improve performance, usability, and maintainability across enterprise platforms."
          />
          <link rel="canonical" href="https://www.rupamdatta.com/work" />
        </Helmet>
        <h1>Work</h1>
        <p>
          My work focuses on building scalable frontend systems for complex,
          data-driven products. I care deeply about clarity, performance, and
          long-term maintainability.
        </p>
      </section>

      <section className="work__area">
        <h2>UI Architecture</h2>
        <p>
          Designing component hierarchies that scale. Establishing predictable
          patterns. Creating structure that enables teams to move faster without
          compromising consistency.
        </p>
      </section>

      <section className="work__area">
        <h2>Data-Heavy Interfaces</h2>
        <p>
          Building dashboards, tables, and analytical views that handle complex
          state, async workflows, and large datasets — while remaining intuitive
          and performant.
        </p>
      </section>

      <section className="work__area">
        <h2>Engineering Practices</h2>
        <p>
          Establishing naming conventions, code organization strategies, linting
          standards, and review practices that keep frontend systems healthy as
          they grow.
        </p>
      </section>

      {/* <section className="work__cta">
        <p>
          For smaller experiments and focused builds, visit{' '}
          <a
            href="https://mydemos.co.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            mydemos.co.in
          </a>
          .
        </p>
      </section> */}
    </div>
  )
}
