import { useEffect } from 'react'
import { trackEvent } from '../../analytics'
import { AnalyticsEvent } from '../../AnalyticsEvent'
import './contact.css'
import { Helmet } from 'react-helmet-async'

export default function Contact() {
  useEffect(() => {
    document.title = 'Rupam Datta | Contact'
  }, [])

  return (
    <div className="contact">
      <section className="contact__intro">
        <Helmet>
          <title>Rupam Datta | Contact | Staff Engineer</title>
          <meta
            name="description"
            content="Get in touch with Rupam Datta, Staff Software Engineer in Bangalore with 18+ years of experience in building scalable UI and frontend systems."
          />
        </Helmet>
        <h1>Contact</h1>
        <p>
          I’m always open to conversations around frontend engineering, UI
          architecture, and interesting product problems.
        </p>
      </section>

      <section className="contact__details">
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
    </div>
  )
}
