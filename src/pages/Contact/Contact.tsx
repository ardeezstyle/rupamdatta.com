import { trackEvent } from '../../analytics'
import { AnalyticsEvent } from '../../AnalyticsEvent'
import SEO from '../../components/SEO'
import './contact.css'

export default function Contact() {
  return (
    <div className="contact">
      <section className="contact__intro">
        <SEO
          title="Contact | Rupam Datta | Senior Staff Software Engineer"
          description="Connect with Rupam Datta for discussions around frontend architecture, scalable UI systems, React, Angular, TypeScript, design systems, and complex enterprise product engineering."
          fullUrl="https://www.rupamdatta.com/contact"
        />

        <h1>Contact</h1>
        <p>
          I'm always open to conversations around frontend architecture,
          scalable UI systems, and complex product engineering challenges.
        </p>
        <p>
          Whether it's frontend platform design, design systems, data-intensive
          applications, or building maintainable systems at scale — I enjoy
          connecting with engineers, product teams, and organisations working on
          meaningful technical problems.
        </p>
      </section>

      <section className="contact__details">
        <p>You can reach me here:</p>
        <ul>
          <li>
            <strong>Email:</strong>{' '}
            <a
              href="mailto:rupam.datta01@gmail.com"
              onClick={() =>
                trackEvent(AnalyticsEvent.EmailClick, 'engagement', 'contact')
              }
            >
              rupam.datta01@gmail.com
            </a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{' '}
            <a
              href="https://www.linkedin.com/in/rupamdatta/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent(AnalyticsEvent.LinkedInClick, 'outbound', 'contact')
              }
            >
              www.linkedin.com/in/rupamdatta
            </a>
          </li>
          <li>
            <strong>GitHub:</strong>{' '}
            <a
              href="https://github.com/ardeezstyle"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent(AnalyticsEvent.GithubClick, 'outbound', 'contact')
              }
            >
              github.com/ardeezstyle
            </a>
          </li>
        </ul>
      </section>

      <section className="contact__details">
        <p>I'm particularly interested in discussions around:</p>
        <ul>
          <li>Frontend architecture and platform engineering</li>
          <li>React, Angular, and TypeScript ecosystems</li>
          <li>Design systems and reusable UI platforms</li>
          <li>Data visualization and workflow-driven interfaces</li>
          <li>Engineering practices for large frontend codebases</li>
          <li>Mentoring and scaling frontend teams</li>
        </ul>
        <p>
          You can also connect with me for collaborations, consulting
          discussions, or opportunities involving large-scale frontend systems
          and UI architecture.
        </p>
      </section>
    </div>
  )
}
