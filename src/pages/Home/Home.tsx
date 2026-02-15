import './home.css'

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1 className="hero__name">Rupam Datta</h1>

        <h2 className="hero__title">
          Staff Software Engineer — Frontend & UI Systems
        </h2>

        <p className="hero__description">
          I design and build simple, scalable user interfaces for complex
          data-driven products. With 17+ years of experience, I focus on
          clarity, maintainability, and long-term system health.
        </p>
      </section>

      <section className="philosophy">
        <h3>What I care about</h3>

        <ul>
          <li>Turning complex requirements into clean UI architecture</li>
          <li>Building reusable, predictable component systems</li>
          <li>Writing code that teams can understand and extend</li>
        </ul>
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
