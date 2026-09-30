import '../../public/App.css'
import { Link } from "react-router-dom"
import aboutLogo from "../assets/about-logo.png"

function About() {
  return (
    <main className="about-page">
      <div className="about-card">

        <img src={aboutLogo} alt="Developer logo" className="about-logo" />

        <h1>About Amuri</h1>

        <p className="about-bio">
          I'm an aspiring Backend Developer currently building my skills in web development and exploring the technologies that power the web behind the scenes. I'm learning by building projects, experimenting with APIs, and improving my understanding of JavaScript and React. My goal is to keep learning, build real-world projects, and gradually grow into a confident backend developer.
        </p>

        <h2>What I'm Learning</h2>

        <div className="about-skills">
            <span>JavaScript</span>
            <span>React</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>APIs</span>
            <span>Git & GitHub</span>
            <span>Responsive Design</span>
            <span>Backend Development</span>
            <span>Problem Solving</span>
        </div>

        <div className="about-links">
          <a
            href="https://github.com/amuridawd91-boop"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/omer-dawud-700741390"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:amuridawd91@gmail.com">
            * amuridawd91@gmail.com *
          </a>
        </div>

        <p className="portfolio-note">
          Portfolio — Coming Soon
        </p>
        <Link to="/" className="back-button">
             ← Back to Shop
        </Link>
      </div>
    </main>
  )
}

export default About