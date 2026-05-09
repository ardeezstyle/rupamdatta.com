import SEO from '../../components/SEO'
import './work.css'

export default function Work() {
  return (
    <div className="work">
      <section className="work__intro">
        <SEO
          title="Work | Rupam Datta | Frontend Architecture & UI Systems"
          description="Frontend architecture, scalable UI systems, design systems, and data-intensive interfaces built across enterprise platforms using React, Angular, and TypeScript with a focus on maintainability, correctness, and long-term system health."
          fullUrl="https://www.rupamdatta.com/work"
        />

        <h1>Work</h1>
        <p>
          My work focuses on building scalable frontend systems for complex
          enterprise products across on-prem, hybrid, and cloud environments. I
          specialise in frontend architecture, reusable UI platforms, and
          data-intensive interfaces where correctness, consistency, and
          long-term maintainability are critical.
        </p>
        <p>
          Over the years, I have worked on platform-critical initiatives
          including permission-driven UI systems, onboarding workflows tied to
          evolving platform architectures, visualization-driven interfaces, and
          cross-framework frontend systems spanning React and Angular
          applications.
        </p>
      </section>

      <section className="work__area">
        <h2>Frontend Architecture</h2>
        <p>
          Designing scalable UI foundations that teams and products can build on
          with confidence.
        </p>
        <p>My work includes:</p>
        <ul>
          <li>Building reusable and predictable component systems</li>
          <li>Designing frontend architecture for large-scale applications</li>
          <li>Creating configuration-driven UI platforms</li>
          <li>Supporting coexistence between React and Angular applications</li>
          <li>
            Improving maintainability through modular and responsibility-driven
            design
          </li>
          <li>
            Preserving backward compatibility while evolving systems over time
          </li>
        </ul>
        <p>
          I focus on creating frontend structures that reduce engineering
          friction and enable teams to move faster without sacrificing quality
          or consistency.
        </p>
      </section>

      <section className="work__area">
        <h2>Data-Intensive Interfaces</h2>
        <p>Building interfaces that simplify complex data and workflows.</p>
        <p>I have worked extensively on:</p>
        <ul>
          <li>Analytical dashboards and operational workflows</li>
          <li>Large tables and data-heavy user interfaces</li>
          <li>Lineage and relationship visualisations</li>
          <li>Persona-based user experiences</li>
          <li>Permission-aware UI systems</li>
          <li>Async workflows and state-heavy applications</li>
        </ul>
        <p>
          My goal is always the same: translate complex systems into interfaces
          that feel intuitive, predictable, and usable.
        </p>
      </section>

      <section className="work__area">
        <h2>Design Systems & Reusability</h2>
        <p>
          Creating shared UI foundations that improve consistency across
          products and teams.
        </p>
        <p>This includes:</p>
        <ul>
          <li>Reusable component libraries</li>
          <li>Shared interaction patterns</li>
          <li>Frontend standards and UI consistency</li>
          <li>Collaboration with UX teams on scalable design patterns</li>
          <li>Improving developer experience through reusable abstractions</li>
        </ul>
        <p>
          I believe strong UI systems are not just about visuals — they are
          engineering platforms that improve reliability and velocity across the
          organisation.
        </p>
      </section>

      <section className="work__area">
        <h2>Engineering Practices</h2>
        <p>Investing in long-term system health and maintainability.</p>
        <p>I care deeply about:</p>
        <ul>
          <li>Clear naming conventions and code organisation</li>
          <li>Readable, maintainable frontend architecture</li>
          <li>Technical debt reduction</li>
          <li>Code review quality and engineering standards</li>
          <li>Backward compatibility and safe migrations</li>
          <li>
            Removing legacy complexity without disrupting teams or customers
          </li>
        </ul>
        <p>
          A large part of my work involves simplifying systems that have grown
          complex over time while ensuring stability for existing users and
          engineering teams.
        </p>
      </section>

      <section className="work__area">
        <h2>How I Approach Problems</h2>
        <p>I prefer simple solutions over clever ones.</p>
        <p>When working on frontend systems, I usually focus on:</p>
        <ul>
          <li>Breaking large problems into smaller, understandable parts</li>
          <li>Building abstractions only when they provide clear value</li>
          <li>Reducing unnecessary coupling between systems</li>
          <li>
            Designing for long-term evolution, not just immediate delivery
          </li>
          <li>Keeping systems understandable for future engineers</li>
        </ul>
        <p>
          I believe frontend engineering is not only about building interfaces —
          it is about creating systems that teams can confidently extend and
          maintain over time.
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
