import { Download } from 'lucide-react'
import './home.css'
import { trackEvent } from '../../analytics'
import { AnalyticsEvent } from '../../AnalyticsEvent'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    document.title = 'Rupam Datta | Home'
  }, [])

  return (
    <div className="home">
      <section className="hero">
        <h1 className="hero__name">Rupam Datta</h1>

        <h2 className="hero__title">
          Senior Staff Software Engineer — Frontend Architecture & UI Systems
        </h2>

        <p className="hero__description">
          I design and build scalable frontend systems for complex, data-driven
          platforms. With 18+ years of experience across enterprise products, I
          focus on frontend architecture, design systems, and data-intensive UIs
          where correctness, consistency, and long-term maintainability are
          critical.
        </p>

        <p className="hero__description">
          My work spans on-prem, hybrid, and cloud environments, building UI
          foundations that teams and products scale on top of. I specialise in
          simplifying complex systems while preserving backward compatibility
          and protecting existing customers.
        </p>
      </section>

      <section className="focus">
        <h3>What I focus on</h3>

        <div className="focus__item">
          <strong>Frontend architecture for complex systems</strong>
          <p>
            Designing UI foundations that scale across teams, products, and
            evolving platform architectures.
          </p>
        </div>

        <div className="focus__item">
          <strong>Design systems & reusable UI platforms</strong>
          <p>
            Building predictable, reusable component systems that improve
            consistency and development velocity.
          </p>
        </div>

        <div className="focus__item">
          <strong>Data-intensive and visualization-driven UIs</strong>
          <p>
            Translating complex data relationships into clear, usable
            interfaces.
          </p>
        </div>

        <div className="focus__item">
          <strong>Long-term system health</strong>
          <p>
            Ensuring maintainability, backward compatibility, and correctness in
            fast-moving codebases.
          </p>
        </div>
      </section>

      <section className="philosophy">
        <h3>How I work</h3>
        <p>I work as a senior individual contributor who:</p>

        <ul>
          <li>
            Identifies the right problems to solve, not just the obvious ones
          </li>
          <li>Drives architecture decisions across frontend systems</li>
          <li>Partners closely with product, UX, and backend teams</li>
          <li>Mentors engineers through complex problem spaces</li>
          <li>Balances speed of delivery with long-term system stability</li>
        </ul>
      </section>

      <section className="philosophy">
        <h3>What I care about</h3>

        <ul>
          <li>
            Turning complex requirements into simple, scalable UI architecture
          </li>
          <li>
            Building systems that other engineers can easily understand and
            extend
          </li>
          <li>
            Maintaining correctness in permission-driven and high-risk workflows
          </li>
          <li>
            Reducing technical debt while preserving backward compatibility
          </li>
          <li>Creating UI platforms that enable teams, not slow them down</li>
        </ul>
      </section>

      <section className="cta">
        <a
          href="/resume-rupam-datta.pdf"
          download
          onClick={() =>
            trackEvent(AnalyticsEvent.ResumeDownload, 'engagement', 'home')
          }
        >
          <Download size={18} /> Download Resume
        </a>
      </section>

      {/* <section className="cta">
        <p>
          I also experiment with UI patterns and smaller focused builds. You can
          explore those at{' '}
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
