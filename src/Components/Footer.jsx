import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

function Footer() {
  return (
    <footer className="store-footer">

      <div className="footer-brand">
        <h2>Amuri Store</h2>
        <p>
          Aspiring Backend Developer | Exploring the world behind the web, one project at a time | Built with React, JavaScript, and APIs.
        </p>
      </div>

      <div className="footer-links">
        <div>
          <h3>Contact</h3>
          <a href="mailto:amuridawd91@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
            Email
          </a>
        </div>

        <div>
          <h3>Connect</h3>
          <a href="https://github.com/amuridawd91-boop" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} />
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/omer-dawud-700741390" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
            LinkedIn
          </a>
        </div>

        <div>
          <h3>Project</h3>
          <span>Portfolio — Coming Soon</span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Amuri Store</p>
        <p>Built with React</p>
      </div>

    </footer>
  )
}

export default Footer