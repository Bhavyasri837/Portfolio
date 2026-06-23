import About from "../About";
import Projects from "../Projects";
import Resume from "../Resume";
import Certificates from "../Certificates";
import Contact from "../Contact";
import "./Home.css";

export default function Home() {
  return (
    <>
      <section id="home" className="page-section hero-section">
        <div className="hero-content">
          <p className="eyebrow">Hello, I am</p>
          <h1>N S Bhavyasri</h1>
          <h2>Aspiring Java Full Stack Developer</h2>
          <p className="hero-text">
            B.Tech CSE student passionate about building clean, responsive and useful web
            applications using Java, React, Spring Boot and MySQL.
            </p>

          

          <div className="hero-actions">
            <a className="primary-btn" href="#projects">View Projects</a>
            <a className="secondary-btn" href="#contact">Contact Me</a>
          </div>

          <div className="stats-grid">
            <div><strong>8.7</strong><span>CGPA</span></div>
            <div><strong>2027</strong><span>B.Tech Batch</span></div>
            <div><strong>Full Stack</strong><span>Career Goal</span></div>
          </div>
        </div>
      </section>

      <section id="about" className="page-section">
        <About />
      </section>

      <section id="projects" className="page-section">
        <Projects />
      </section>

      <section id="resume" className="page-section">
        <Resume />
      </section>

      <section id="certificates" className="page-section">
        <Certificates />
      </section>

      <section id="contact" className="page-section">
        <Contact />
      </section>
    </>
  );
}
