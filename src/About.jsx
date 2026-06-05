import "./About.css";

function About() {
  const skills = [
    "Java", "Python", "JavaScript", "React.js", "HTML", "CSS",
    "Spring Boot", "MySQL", "REST APIs","Data Structures & Algorithms", "Git & GitHub",
    "Vercel", "Render", "Railway", "DSA Basics"
  ];

  return (
    <div className="section-card about-card">
      <p className="section-label">About me</p>
      <h2 className="section-title">CSE student building real-world full stack projects.</h2>
      <p className="section-text">
        I am a B.Tech Computer Science and Engineering student from Mother Theresa Institute of
        Engineering and Technology, JNTUA. I enjoy creating practical web applications and I am
        currently focused on Java Full Stack Development with React, Spring Boot and MySQL.
      </p>

      <div className="about-grid">
        <div>
          <h3>What I am interested in</h3>
          <ul>
            <li>Full stack web development</li>
            <li>Java backend development</li>
            <li>React frontend interfaces</li>
            <li>AI-based project ideas</li>
            <li>Problem solving and DSA practice</li>
          </ul>
        </div>
        <div>
          <h3>Strengths</h3>
          <ul>
            <li>Quick learner and consistent improver</li>
            <li>Good leadership and communication</li>
            <li>Project-focused practical mindset</li>
            <li>Adaptable and hardworking</li>
            <li>Interested in building useful solutions</li>
          </ul>
        </div>
      </div>

      <h3 className="mini-title">Technical Skills</h3>
      <div className="skills-wrap">
        {skills.map((skill) => <span className="skill-pill" key={skill}>{skill}</span>)}
      </div>
    </div>
  );
}

export default About;
