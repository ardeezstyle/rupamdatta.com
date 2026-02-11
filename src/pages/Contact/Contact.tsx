import './contact.css'

export default function Contact() {
  return (
    <div className="contact">
      <section className="contact__intro">
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
            <a href="mailto:rupam.datta01@gmail.com">rupam.datta01@gmail.com</a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{' '}
            <a
              href="https://www.linkedin.com/in/rupamdatta/"
              target="_blank"
              rel="noopener noreferrer"
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
            >
              github.com/ardeezstyle
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}
